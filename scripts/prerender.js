
import puppeteer from 'puppeteer'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const distDir = path.resolve('dist')
const baseUrl = 'http://localhost:4173'

const routes = [
  '/learn/',
  '/learn/fundamentals/',
  '/learn/fundamentals/what-is-trading/',
  '/learn/fundamentals/markets/',
  '/learn/fundamentals/how-prices-move/',
  '/learn/fundamentals/orders-trading-basics/',
  '/learn/fundamentals/risk-before-reward/',
  '/learn/fundamentals/trading-psychology/',
  '/risk-management/',
  '/tools-strategies/',
  '/trading-strategies/',
  '/market-analysis/',
  '/risk-disclaimer/',
  '/blog/',
  '/blog/trading-for-beginners/',
  '/blog/why-risk-management-matters/',
  '/blog/you-dont-need-to-be-right/',
  '/blog/ladder-trading/',
  '/blog/how-to-become-a-better-trader/',
  '/about/',
  '/contact/',
  '/affiliate-disclosure/',
  '/privacy-policy/',
  '/',
]

const browser = await puppeteer.launch({ headless: true })

try {
  for (const route of routes) {
    // A fresh page prevents state from a previous route carrying over.
    const page = await browser.newPage()
    const url = `${baseUrl}${route}`

    try {
      console.log(`Rendering ${route}`)

      const response = await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      })

      if (!response || !response.ok()) {
        console.error(`  FAILED: HTTP ${response?.status() ?? 'no response'}`)
        continue
      }

      await page.waitForSelector('#root')

      await page.waitForFunction(() => {
        const root = document.querySelector('#root')
        return root?.innerText?.trim().length > 100
      }, { timeout: 15000 })

      const result = await page.evaluate(() => {
        const head = document.head.cloneNode(true)

        // Keep only the metadata React Helmet should have supplied
        // for the current route, removing duplicate tags by type.
        const uniqueSelectors = [
          'title',
          'meta[name="description"]',
          'meta[name="robots"]',
          'link[rel="canonical"]',
          'meta[property="og:type"]',
          'meta[property="og:site_name"]',
          'meta[property="og:title"]',
          'meta[property="og:description"]',
          'meta[property="og:url"]',
          'meta[property="og:image"]',
          'meta[name="twitter:card"]',
          'meta[name="twitter:title"]',
          'meta[name="twitter:description"]',
          'meta[name="twitter:image"]',
        ]

        for (const selector of uniqueSelectors) {
          const elements = [...head.querySelectorAll(selector)]

          if (elements.length > 1) {
            // React Helmet's current route metadata is last.
            elements.slice(0, -1).forEach(element => element.remove())
          }
        }

        const html = document.documentElement.cloneNode(true)
        html.querySelector('head')?.replaceWith(head)

        return {
          html: '<!doctype html>\n' + html.outerHTML,
          title: head.querySelector('title')?.textContent?.trim() ?? '',
          description: head.querySelector('meta[name="description"]')?.content ?? '',
          h1: document.querySelector('h1')?.innerText?.trim() ?? '',
          textLength: document.querySelector('#root')?.innerText?.trim().length ?? 0,
          titles: head.querySelectorAll('title').length,
          descriptions: head.querySelectorAll('meta[name="description"]').length,
          canonicals: head.querySelectorAll('link[rel="canonical"]').length,
        }
      })

      if (!result.h1 || result.textLength < 100) {
        console.warn(`  WARNING: Thin content (H1: "${result.h1}", text: ${result.textLength} chars)`)
      }

      const relativePath = route === '/'
        ? 'index.html'
        : path.join(route.replace(/^\/|\/$/g, ''), 'index.html')

      const outputPath = path.join(distDir, relativePath)

      await mkdir(path.dirname(outputPath), { recursive: true })
      await writeFile(outputPath, result.html, 'utf8')

      console.log(`  Saved: ${relativePath}`)
      console.log(`  Title: ${result.title}`)
      console.log(`  H1: ${result.h1 || '[missing]'}`)
      console.log(`  Description: ${result.description ? 'present' : 'MISSING'}`)
      console.log(`  Title tags: ${result.titles}`)
      console.log(`  Description tags: ${result.descriptions}`)
      console.log(`  Canonical tags: ${result.canonicals}`)
      console.log(`  Visible text: ${result.textLength} characters`)
    } finally {
      await page.close()
    }
  }
} finally {
  await browser.close()
}
