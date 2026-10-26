
import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'TradingBasics'
const SITE_URL = 'https://tradingbasics.ca'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

export default function SEO({
  title,
  description,
  path = '/',
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  noIndex = false,
}) {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : 'Learn Trading, Strategies & Risk Management | TradingBasics'

  const pageDescription =
    description ||
    'Learn trading fundamentals, risk management, trading psychology, technical analysis, and strategies with TradingBasics.'

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${SITE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : `${SITE_URL}${normalizedPath}`

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow'}
      />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
