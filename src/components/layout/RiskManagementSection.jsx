
import {
  Calculator,
  ShieldCheck,
  Scale,
  ArrowRight,
} from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import ContentCard from '../common/ContentCard'
import Button from '../common/Button'

const topics = [
  {
    eyebrow: 'PLAN YOUR EXPOSURE',
    title: 'Position Sizing',
    description:
      'Understand how position size, account balance, and your planned risk work together when preparing a trade.',
    href: '/risk-management/',
    icon: <Calculator size={24} />,
  },
  {
    eyebrow: 'PLAN BEFORE ENTERING',
    title: 'Stop-Loss Planning',
    description:
      'Learn how stop-loss orders work, why they matter, and why execution prices can differ during volatile markets.',
    href: '/risk-management/',
    icon: <ShieldCheck size={24} />,
  },
  {
    eyebrow: 'EVALUATE THE TRADE',
    title: 'Risk-to-Reward Ratio',
    description:
      'Compare potential losses with potential gains and understand why a favourable ratio alone cannot guarantee success.',
    href: '/risk-management/',
    icon: <Scale size={24} />,
  },
]

function RiskManagementSection() {
  return (
    <section className="risk-management-section">
      <Container>
        <div className="risk-management-section__header">
          <SectionHeading
            eyebrow="RISK BEFORE REWARD"
            title="Make risk management part of every trading plan"
            description="Good trading education starts with understanding what you could lose, how you will manage that risk, and when a trade no longer fits your plan."
          />

          <div className="risk-management-section__intro">
            <span className="risk-management-section__intro-icon">
              <ShieldCheck size={25} />
            </span>
            <p>
              No strategy eliminates risk. A clear plan can help you make
              more informed decisions.
            </p>
          </div>
        </div>

        <div className="risk-management-section__grid">
          {topics.map((topic) => (
            <ContentCard
              key={topic.title}
              eyebrow={topic.eyebrow}
              title={topic.title}
              description={topic.description}
              href={topic.href}
              icon={topic.icon}
              className="risk-topic-card"
            />
          ))}
        </div>

        <div className="risk-management-section__action">
          <Button href="/risk-management/">
            Explore Risk Management <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default RiskManagementSection
