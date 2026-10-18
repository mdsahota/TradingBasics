import SEO from '../components/seo/SEO'
import {
  BookOpen,
  TrendingUp,
  ShieldCheck,
  Brain,
  ChartNoAxesCombined,
  ArrowRight,
} from 'lucide-react'

import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import ContentCard from '../components/common/ContentCard'
import Button from '../components/common/Button'

const learningPaths = [
  {
    eyebrow: 'START HERE',
    title: 'Trading Fundamentals',
    description:
      'Understand financial markets, how trading works, common terminology, and the differences between major asset classes.',
    href: '/learn/fundamentals/',
    icon: <BookOpen size={24} />,
  },
  {
    eyebrow: 'PROTECT YOUR CAPITAL',
    title: 'Risk Management',
    description:
      'Learn about position sizing, stop-loss orders, risk-to-reward ratios, and planning for potential losses.',
    href: '/risk-management/',
    icon: <ShieldCheck size={24} />,
  },
  {
    eyebrow: 'BUILD GOOD HABITS',
    title: 'Trading Psychology',
    description:
      'Explore emotional discipline, patience, decision-making, and ways to review your trading behaviour.',
    href: '/learn/fundamentals/trading-psychology/',
    icon: <Brain size={24} />,
  },
  {
    eyebrow: 'UNDERSTAND PRICE ACTION',
    title: 'Technical Analysis',
    description:
      'Get introduced to charts, trends, support and resistance, and commonly used technical indicators.',
    href: '/tools-strategies/',
    icon: <ChartNoAxesCombined size={24} />,
  },
  {
    eyebrow: 'EXPLORE YOUR APPROACH',
    title: 'Trading Strategies',
    description:
      'Discover how different trading approaches work and why a strategy should include clear rules and risk controls.',
    href: '/trading-strategies/',
    icon: <TrendingUp size={24} />,
  },


  {
    eyebrow: 'MAKE INFORMED DECISIONS',
    title: 'Market Analysis',
    description:
      'Learn how traders evaluate market conditions, interpret information, and develop a structured approach to trading decisions.',
    href: '/market-analysis/',
    icon: <ChartNoAxesCombined size={24} />,
  },


]

function LearnPage() {
  return (
    <>
    <SEO
        title="Learn Trading: Beginner Guides and Learning Paths"
        description="Explore structured trading learning paths covering market fundamentals, risk management, trading psychology, technical analysis, and trading strategies."
        path="/learn/"
    />

      <section className="learn-page-hero">
        <Container>
          <span className="eyebrow">THE TRADINGBASICS LEARNING LIBRARY</span>

          <h1>Learn trading, one concept at a time.</h1>

          <p>
            Build your understanding of financial markets through
            approachable lessons on trading fundamentals, risk management,
            trading psychology, technical analysis, trading strategies,
            and market analysis.
          </p>

          <div className="learn-page-hero__actions">
            <Button href="/learn/fundamentals/">
              Start with the Fundamentals <ArrowRight size={18} />
            </Button>
          </div>

          <div className="learn-page-hero__note">
            Educational resources for learning at your own pace. Trading
            involves risk, including the possible loss of capital.
          </div>
        </Container>
      </section>

      <section className="learn-page-paths">
        <Container>
          <SectionHeading
            eyebrow="EXPLORE THE LIBRARY"
            title="Choose your learning path"
            description="Start with the basics or explore a specific topic. Each path will guide you toward relevant lessons and practical concepts."
          />

          <div className="learn-page-paths__grid">
            {learningPaths.map((path) => (
              <ContentCard
                key={path.title}
                eyebrow={path.eyebrow}
                title={path.title}
                description={path.description}
                href={path.href}
                icon={path.icon}
                className="learn-path-card"
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="ibkr-promo-section">
        <Container>
          <div className="ibkr-promo">
            <span className="eyebrow">BROKERAGE RESOURCES</span>

            <h2>Explore Interactive Brokers</h2>

            <p>
              Compare brokerage fees, available markets, and account
              requirements to decide whether Interactive Brokers
              fits your trading needs.
            </p>

            <div className="ibkr-promo__banner">
              <a
                href="https://ibkr.com/referral/manohar512?utm_source=kamyaablab&utm_medium=affiliate&utm_campaign=homepage&utm_content=secondary_cta"
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                aria-label="Explore Interactive Brokers"
              >
                <img
                  src="/images/interactive-brokers.png"
                  alt="Interactive Brokers — Explore IBKR"
                  width="468"
                  height="60"
                  loading="lazy"
                />
              </a>
            </div>

            <p className="ibkr-promo__disclosure">
              Referral link · We may receive compensation.
            </p>
          </div>
        </Container>
      </section>
      
      <section className="amazon-promo-section">
        <Container>
          <div className="amazon-promo">
            <h2>Build Your Trading Knowledge</h2>

            <p>
              Explore books and resources on technical analysis,
              candlestick patterns, and trading strategies.
            </p>

            <div className="amazon-promo__banner">
              <a
                href="https://amzn.to/3KQ7TbV"
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                aria-label="Explore trading books on Amazon"
              >
                <img
                  src="/images/amazon-trading-books.png"
                  alt="Build Your Trading Knowledge — Explore Trading Books"
                  width="460"
                  height="58"
                  loading="lazy"
                />
              </a>
            </div>

            <p className="amazon-promo__disclosure">
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </Container>
      </section>

    </>
  )
}

export default LearnPage
