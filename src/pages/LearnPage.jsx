
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
    href: '/trading-psychology/',
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
    href: '/tools-strategies/',
    icon: <TrendingUp size={24} />,
  },
  {
    eyebrow: 'LEARN AT YOUR PACE',
    title: 'Trading Essentials',
    description:
      'Build your knowledge step by step and revisit important concepts as your understanding develops.',
    href: '/learn/fundamentals/',
    icon: <BookOpen size={24} />,
  },
]

function LearnPage() {
  return (
    <>
      <section className="learn-page-hero">
        <Container>
          <span className="eyebrow">THE TRADINGBASICS LEARNING LIBRARY</span>

          <h1>Learn trading, one concept at a time.</h1>

          <p>
            Build your understanding of financial markets through
            approachable lessons on trading fundamentals, risk management,
            psychology, and technical analysis.
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
    </>
  )
}

export default LearnPage
