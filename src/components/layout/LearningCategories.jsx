import { Link } from 'react-router-dom'
import {
  BookOpen,
  ShieldCheck,
  Brain,
  CandlestickChart,
  ArrowUpRight,
} from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import ContentCard from '../common/ContentCard'

const categories = [
  {
    eyebrow: 'START HERE',
    title: 'Trading Fundamentals',
    description:
      'Learn how financial markets work, understand common terminology, and explore different types of trading.',
    href: '/learn/',
    icon: <BookOpen size={24} />,
  },
  {
    eyebrow: 'PROTECT YOUR CAPITAL',
    title: 'Risk Management',
    description:
      'Explore position sizing, stop-loss concepts, risk-to-reward ratios, and the importance of a trading plan.',
    href: '/risk-management/',
    icon: <ShieldCheck size={24} />,
  },
  {
    eyebrow: 'BUILD DISCIPLINE',
    title: 'Trading Psychology',
    description:
      'Understand emotional decision-making, patience, consistency, and how to avoid impulsive trading.',
    href: '/learn/fundamentals/trading-psychology/',
    icon: <Brain size={24} />,
  },
  {
    eyebrow: 'PUT KNOWLEDGE TO WORK',
    title: 'Tools & Strategies',
    description:
      'Explore chart basics, technical indicators, trading strategies, and tools for planning your decisions.',
    href: '/tools-strategies/',
    icon: <CandlestickChart size={24} />,
  },
]

function LearningCategories() {
  return (
    <section className="learning-categories">
      <Container>
        <SectionHeading
          eyebrow="EXPLORE THE LEARNING HUB"
          title="Build your trading knowledge, step by step"
          description="Start with the fundamentals, learn to manage risk, and develop a more disciplined approach to understanding the markets."
          align="center"
        />

        <div className="learning-categories__grid">
          {categories.map((category) => (
            <ContentCard
              key={category.href}
              eyebrow={category.eyebrow}
              title={category.title}
              description={category.description}
              href={category.href}
              icon={category.icon}
              className="learning-category-card"
            />
          ))}
        </div>


            <div className="learning-categories__note">
            <span>
                New to trading? Begin with the fundamentals and learn at your own
                pace.
            </span>
            <Link to="/learn/">
                Explore learning resources <ArrowUpRight size={17} />
            </Link>
            </div>

      </Container>
    </section>
  )
}

export default LearningCategories
