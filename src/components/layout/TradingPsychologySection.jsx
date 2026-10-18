
import {
  Brain,
  HeartPulse,
  BookOpenCheck,
  ArrowRight,
} from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import ContentCard from '../common/ContentCard'
import Button from '../common/Button'

const topics = [
  {
    eyebrow: 'RECOGNIZE YOUR TRIGGERS',
    title: 'Emotional Discipline',
    description:
      'Understand how fear, greed, frustration, and overconfidence can influence trading decisions.',
    href: '/learn/fundamentals/trading-psychology/',
    icon: <HeartPulse size={24} />,
  },
  {
    eyebrow: 'FOLLOW YOUR PROCESS',
    title: 'Patience & Consistency',
    description:
      'Learn why waiting for suitable opportunities and following a defined plan can help reduce impulsive decisions.',
    href: '/learn/fundamentals/trading-psychology/',
    icon: <Brain size={24} />,
  },
  {
    eyebrow: 'LEARN FROM EXPERIENCE',
    title: 'Trading Journals',
    description:
      'Explore how recording your decisions, trade rationale, and reflections can help you review your process.',
    href: '/learn/fundamentals/trading-psychology/',
    icon: <BookOpenCheck size={24} />,
  },
]

function TradingPsychologySection() {
  return (
    <section className="trading-psychology-section">
      <Container>
        <div className="trading-psychology-section__header">
          <SectionHeading
            eyebrow="THE MINDSET BEHIND THE TRADE"
            title="Build discipline beyond the charts"
            description="Trading decisions are influenced by more than market movements. Learn to recognize emotional patterns and build a repeatable decision-making process."
          />

          <div className="trading-psychology-section__quote">
            <span className="trading-psychology-section__quote-mark">“</span>
            <p>
              The goal isn't to eliminate emotions. It's to recognize them
              before they drive your decisions.
            </p>
            <span className="trading-psychology-section__quote-label">
              A disciplined approach
            </span>
          </div>
        </div>

        <div className="trading-psychology-section__grid">
          {topics.map((topic) => (
            <ContentCard
              key={topic.title}
              eyebrow={topic.eyebrow}
              title={topic.title}
              description={topic.description}
              href={topic.href}
              icon={topic.icon}
              className="psychology-topic-card"
            />
          ))}
        </div>

        <div className="trading-psychology-section__action">
          <Button href="/learn/fundamentals/trading-psychology/">
            Explore Trading Psychology <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default TradingPsychologySection
