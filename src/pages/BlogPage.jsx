
import SEO from '../components/seo/SEO'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import ContentCard from '../components/common/ContentCard'
import Button from '../components/common/Button'

const blogTopics = [
  {
    eyebrow: 'TRADING FOR BEGINNERS',
    title: 'Trading for Beginners: Where Should You Start?',
    description:
      'Start learning trading step by step, understand financial markets and trading terminology, and discover how to practise while managing risk.',
    href: '/blog/trading-for-beginners/',
  },

  {
    eyebrow: 'TRADING FUNDAMENTALS',
    title: 'Understanding How Financial Markets Work',
    description:
      'Explore the basics of financial markets, the assets people trade, and how buyers and sellers participate.',
    href: '/learn/fundamentals/markets/',
  },
  {
    eyebrow: 'RISK MANAGEMENT',
    title: 'Why Risk Management Matters in Trading',
    description:
      'Learn why planning for potential losses is an important part of understanding trading decisions.',
    href: '/risk-management/',
  },
  {
    eyebrow: 'TECHNICAL ANALYSIS',
    title: 'An Introduction to Technical Analysis',
    description:
      'Discover how traders use charts, trends, support, and resistance to study price movements.',
    href: '/tools-strategies/',
  },
  {
    eyebrow: 'TRADING PSYCHOLOGY',
    title: 'The Role of Psychology in Trading',
    description:
      'Understand how patience, emotions, and disciplined decision-making can influence trading behaviour.',
    href: '/learn/fundamentals/trading-psychology/',
  },
  {
    eyebrow: 'TRADING STRATEGIES',
    title: 'What Makes a Trading Strategy?',
    description:
      'Explore the role of rules, entry and exit decisions, and risk controls in a trading approach.',
    href: '/trading-strategies/',
  },
  {
    eyebrow: 'MARKET ANALYSIS',
    title: 'A Structured Approach to Market Analysis',
    description:
      'Learn how market context and relevant information can help organize your understanding of trading decisions.',
    href: '/market-analysis/',
  },
]

function BlogPage() {
  return (
    <>
      <SEO
        title="Trading Blog | Trading Education and Market Guides"
        description="Explore TradingBasics educational resources covering financial markets, risk management, technical analysis, trading psychology, and trading strategies."
        path="/blog/"
      />

      <section className="learn-page-hero">
        <Container>
          <span className="eyebrow">THE TRADINGBASICS BLOG</span>

          <h1>Explore trading concepts, one topic at a time.</h1>

          <p>
            Explore educational resources to build your understanding of
            financial markets, trading terminology, risk management,
            and different trading approaches.
          </p>

          <div className="learn-page-hero__actions">
            <Button href="/learn/">
              Explore Learning Paths
            </Button>
          </div>

          <div className="learn-page-hero__note">
            TradingBasics provides educational information, not personalized
            financial advice. Trading involves risk, including potential losses.
          </div>
        </Container>
      </section>

      <section className="learn-page-paths">
        <Container>
          <SectionHeading
            eyebrow="EXPLORE TOPICS"
            title="Trading education and guides"
            description="Choose a topic to explore its related learning resources."
          />

          <div className="learn-page-paths__grid">
            {blogTopics.map((topic) => (
              <ContentCard
                key={topic.title}
                eyebrow={topic.eyebrow}
                title={topic.title}
                description={topic.description}
                href={topic.href}
                className="learn-path-card"
              />
            ))}
          </div>

          <div className="learn-page-hero__actions">
            <Button href="/learn/fundamentals/">
              Start with the Fundamentals
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default BlogPage
