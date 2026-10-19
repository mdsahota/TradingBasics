import TradingViewPromo from './TradingViewPromo';
import MarketGlobe from '../visuals/MarketGlobe'
import SEO from '../seo/SEO'
import {
  ArrowLeft,
  ShieldCheck,
  Brain,
  Target,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
} from 'lucide-react'

import Container from '../common/Container'
import Button from '../common/Button'

const iconMap = {
  brain: Brain,
  target: Target,
  warning: AlertTriangle,
  check: CheckCircle2,
  idea: Lightbulb,
  chart: TrendingUp,
}

function ArticleCallout({ title, text, icon = 'idea' }) {
  const Icon = iconMap[icon] || Lightbulb

  return (
    <div className="lesson-content__callout">
      <Icon size={22} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

function ArticleSection({ section }) {
  return (
    <section className="article-section">
      <h2>{section.heading}</h2>

      {section.paragraphs?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      {section.list && (
        <ul>
          {section.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {section.callout && (
        <ArticleCallout {...section.callout} />
      )}
    </section>
  )
}

export default function ArticlePage({ article }) {
  return (
    <>
      <SEO
        title={article.seo.title}
        description={article.seo.description}
        canonical={article.seo.canonical}
      />


        <section className="fundamentals-hero article-hero--market">
        <Container>
            <div className="article-hero--market__layout">
            <div className="article-hero--market__content">
                <span className="eyebrow">
                {article.categories.join(' · ')}
                </span>

                <h1>{article.title}</h1>

                <p>{article.introduction}</p>

                <div className="fundamentals-hero__actions">
                <Button href={article.primaryCta.href} variant="primary">
                    {article.primaryCta.label}
                </Button>

                <Button href="/blog/" variant="secondary">
                    <ArrowLeft size={16} />
                    Back to Blog
                </Button>
                </div>

                <div className="fundamentals-hero__notice">
                <ShieldCheck size={20} />
                <span>{article.educationalNotice}</span>
                </div>
            </div>

            <div className="article-hero--market__visual">
                <MarketGlobe />
            </div>
            </div>
        </Container>
        </section>


      <section className="lesson-content">
        <Container>
          <article className="lesson-content__article">
            <span className="eyebrow">
              {article.articleEyebrow}
            </span>

            {article.sections.map((section, index) => (
              <ArticleSection
                key={`${section.heading}-${index}`}
                section={section}
              />
            ))}

            <h2>{article.conclusion.heading}</h2>

            {article.conclusion.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {article.promo?.enabled && <TradingViewPromo />}
            <ArticleCallout
              title="Important disclaimer"
              text={article.disclaimer}
              icon="warning"
            />

            <h2>What to Read Next</h2>

            <ul>
              {article.relatedArticles.map((related) => (
                <li key={related.href}>
                  <a href={related.href}>{related.title}</a>
                </li>
              ))}

              <li>
                <a href="/blog/">
                  Explore More TradingBasics Articles
                </a>
              </li>
            </ul>
          </article>
        </Container>
      </section>
    </>
  )
}
