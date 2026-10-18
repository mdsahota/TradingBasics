
import { ArrowRight, Clock3, BookOpen } from 'lucide-react'

import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import ContentCard from '../common/ContentCard'
import Button from '../common/Button'


const articles = [
  {
    category: 'RISK MANAGEMENT',
    title: 'Why Risk Management Matters in Trading',
    description:
      'Explore position sizing, stop-loss planning, and ways to think more carefully about potential losses before entering a trade.',
    readTime: '5 min read',
    href: '/blog/why-risk-management-matters/',
  },
  {
    category: 'TRADING FUNDAMENTALS',
    title: 'Trading for Beginners: Where Should You Start?',
    description:
      'Understand the basic concepts of financial markets, how trading works, and what to learn before placing your first trade.',
    readTime: '6 min read',
    href: '/blog/trading-for-beginners/',
  },
  {
    category: 'TRADING PSYCHOLOGY',
    title: 'How to Avoid Emotional Trading Decisions',
    description:
      'Learn how fear, greed, and impatience can affect decisions and why a consistent trading plan matters.',
    readTime: '7 min read',
    href: '/blog/',
  },
]


function LatestArticlesSection() {
  return (
    <section className="latest-articles-section">
      <Container>
        <div className="latest-articles-section__header">
          <SectionHeading
            eyebrow="THE LEARNING JOURNAL"
            title="Ideas to help you trade smarter"
            description="Explore educational articles designed to help you understand markets, manage risk, and build better trading habits."
          />

          <a
            className="latest-articles-section__text-link"
            href="/blog/"
          >
            View all articles <ArrowRight size={17} />
          </a>
        </div>

        <div className="latest-articles-section__grid">
          {articles.map((article) => (
            <article
              className="latest-article-card"
              key={article.title}
            >
              <div className="latest-article-card__top">
                <span className="latest-article-card__category">
                  {article.category}
                </span>
                <span className="latest-article-card__icon">
                  <BookOpen size={21} />
                </span>
              </div>

              <h3>{article.title}</h3>

              <p className="latest-article-card__description">
                {article.description}
              </p>

              <div className="latest-article-card__bottom">
                <span className="latest-article-card__reading-time">
                  <Clock3 size={15} />
                  {article.readTime}
                </span>

                <a
                  className="latest-article-card__read-link"
                  href={article.href}
                  aria-label={`Read ${article.title}`}
                >
                  Read article <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="latest-articles-section__mobile-action">
          <Button href="/blog/" variant="outline">
            Explore All Articles <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default LatestArticlesSection
