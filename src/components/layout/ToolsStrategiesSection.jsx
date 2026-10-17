
import {
  ChartNoAxesCombined,
  TrendingUp,
  Calculator,
  ArrowRight,
} from 'lucide-react'

import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import ContentCard from '../common/ContentCard'
import Button from '../common/Button'

const topics = [
  {
    eyebrow: 'READ THE MARKETS',
    title: 'Technical Analysis',
    description:
      'Learn about price charts, market trends, support and resistance, and indicators used to study market behaviour.',
    href: '/tools-strategies/',
    icon: <ChartNoAxesCombined size={24} />,
  },
  {
    eyebrow: 'PLAN YOUR APPROACH',
    title: 'Trading Strategies',
    description:
      'Explore different trading approaches and learn how to develop a structured plan around your goals and risk tolerance.',
    href: '/tools-strategies/',
    icon: <TrendingUp size={24} />,
  },
  {
    eyebrow: 'MAKE INFORMED DECISIONS',
    title: 'Trading Tools',
    description:
      'Discover practical tools for position sizing, risk-to-reward calculations, and organizing your trading plans.',
    href: '/tools-strategies/',
    icon: <Calculator size={24} />,
  },
]

function ToolsStrategiesSection() {
  return (
    <section className="tools-strategies-section">
      <Container>
        <SectionHeading
          eyebrow="TOOLS FOR BETTER DECISIONS"
          title="Turn market knowledge into a plan"
          description="Explore trading concepts, practical strategies, and useful tools to help you make more informed decisions."
        />

        <div className="tools-strategies-section__grid">
          {topics.map((topic) => (
            <ContentCard
              key={topic.title}
              eyebrow={topic.eyebrow}
              title={topic.title}
              description={topic.description}
              href={topic.href}
              icon={topic.icon}
              className="tools-strategies-card"
            />
          ))}
        </div>

        <div className="tools-strategies-section__action">
          <Button href="/tools-strategies/">
            Explore Tools & Strategies <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default ToolsStrategiesSection
