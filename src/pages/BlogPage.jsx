
import SEO from '../components/seo/SEO'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import ContentCard from '../components/common/ContentCard'
import Button from '../components/common/Button'
import { useState } from 'react'

const blogTopics = [
  {
  eyebrow: 'TRADING PSYCHOLOGY',
  title: 'Ladder Trading: Climb Smart, Avoid the Snake',
  description:
    'Discover how greed, overconfidence, and impulsive decisions can turn a promising trading climb into a costly setback. Learn to manage risk and protect your progress.',
  href: '/blog/ladder-trading/',
},

{
  eyebrow: 'TRADING PSYCHOLOGY',
  title: 'How to Become a Better Trader: Focus on Your Most Expensive Mistakes',
  description:
    'Your biggest trading improvements may come from fixing a few costly habits. Learn how to identify recurring mistakes, use feedback effectively, and build a process for better trading decisions.',
  href: '/blog/how-to-become-a-better-trader/',
},

  {
    eyebrow: 'TRADING PSYCHOLOGY',
    title: "You Don't Need to Be Right: The Power of a Trading Plan",
    description:
      'Learn how to handle uncertainty, manage risk, and make disciplined trading decisions without needing to predict every market move.',
    href: '/blog/you-dont-need-to-be-right/',
  },
  {
  eyebrow: 'RISK MANAGEMENT',
  title: 'Why Risk Management Matters in Trading',
  description:
    'Learn position sizing, stop-loss orders, risk-to-reward ratios, drawdowns, and practical ways to understand trading risk.',
  href: '/blog/why-risk-management-matters/',
},

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
  const [showAll, setShowAll] = useState(false)

  const visibleTopics = showAll ? blogTopics : blogTopics.slice(0, 9)

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
            {visibleTopics.map((topic) => (
              <ContentCard
                key={topic.href}
                eyebrow={topic.eyebrow}
                title={topic.title}
                description={topic.description}
                href={topic.href}
                className="learn-path-card"
              />
            ))}
          </div>

          {blogTopics.length > 9 && (
            <div className="learn-page-hero__actions">
              <Button onClick={() => setShowAll((prev) => !prev)}>
                {showAll ? 'Show Fewer Articles' : 'Show All Articles'}
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}

export default BlogPage

