
import {
  GraduationCap,
  ShieldCheck,
  BookOpenCheck,
  Target,
} from 'lucide-react'

import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

const benefits = [
  {
    icon: <GraduationCap size={23} />,
    title: 'Beginner-Friendly Learning',
    description:
      'Learn trading concepts in clear, simple language, starting with the fundamentals and progressing at your own pace.',
  },
  {
    icon: <ShieldCheck size={23} />,
    title: 'Risk-Aware Education',
    description:
      'Understand the importance of protecting capital, planning trades, and recognizing that losses are always possible.',
  },
  {
    icon: <BookOpenCheck size={23} />,
    title: 'Practical Knowledge',
    description:
      'Explore educational examples, trading terminology, and tools that help explain how market decisions work.',
  },
  {
    icon: <Target size={23} />,
    title: 'A Structured Learning Path',
    description:
      'Build your understanding step by step, from market basics to risk management, trading psychology, and strategies.',
  },
]

function WhyTradingBasicsSection() {
  return (
    <section className="why-tradingbasics-section">
      <Container>
        <div className="why-tradingbasics-section__layout">
          <div className="why-tradingbasics-section__intro">
            <SectionHeading
              eyebrow="WHY TRADINGBASICS"
              title="Build knowledge before taking risks"
              description="Trading is more than spotting price movements. A solid foundation starts with understanding markets, managing risk, and making informed decisions."
              align="left"
            />

            <p className="why-tradingbasics-section__note">
              Our focus is education—not promises of profits or
              shortcuts to success.
            </p>
          </div>

          <div className="why-tradingbasics-section__grid">
            {benefits.map((benefit) => (
              <article
                className="why-tradingbasics-card"
                key={benefit.title}
              >
                <div className="why-tradingbasics-card__icon">
                  {benefit.icon}
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhyTradingBasicsSection
