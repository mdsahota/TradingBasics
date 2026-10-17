import SEO from '../components/seo/SEO'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  TrendingUp,
  ShieldCheck,
  ChartNoAxesCombined,
  ArrowRight,
  Brain,
} from 'lucide-react'

import Container from '../components/common/Container'
import Button from '../components/common/Button'

const lessons = [
  {
    number: '01',
    title: 'What Is Trading?',
    description:
      'Understand what trading means, why market participants buy and sell, and how trading differs from long-term investing.',
    href: '/learn/fundamentals/what-is-trading/',
  },
  {
    number: '02',
    title: 'Understanding Financial Markets',
    description:
      'Explore stocks, forex, commodities, indices, and other markets where traders participate.',
    href: '/learn/fundamentals/markets/',
    },
  {
    number: '03',
    title: 'How Prices Move',
    description:
      'Learn how buying and selling activity, supply and demand, and market expectations can influence prices.',
    href: '/learn/fundamentals/how-prices-move/',
    },
  {
    number: '04',
    title: 'Orders and Trading Basics',
    description:
      'Get familiar with market orders, limit orders, stop orders, bid prices, ask prices, and spreads.',
    href: '/learn/fundamentals/orders-trading-basics/',
    },
  {
    number: '05',
    title: 'Risk Before Reward',
    description:
      'Discover why protecting capital, planning potential losses, and managing position sizes matter.',
    href: '/learn/fundamentals/risk-before-reward/',
    },
  {
    number: '06',
    title: 'Trading Psychology: Managing Emotions',
    description:
      'Understand how fear, greed, impatience, and overconfidence can influence trading decisions and learn to build emotional discipline.',
    href: '/learn/fundamentals/trading-psychology/',
    },
]

function FundamentalsPage() {
  return (
    <>
    <SEO
        title="Trading Fundamentals: Beginner Learning Guide"
        description="Start learning trading fundamentals with beginner-friendly lessons on financial markets, price movements, trading orders, and risk management."
        path="/learn/fundamentals/"
    />

      <section className="fundamentals-hero">
        <Container>
          <span className="eyebrow">
            TRADINGBASICS LEARNING LIBRARY
          </span>

          <h1>Trading Fundamentals</h1>

          <p>
            Start with the essentials. Learn how financial markets work,
            understand common trading terms, and build a foundation
            before exploring strategies.
          </p>

          <div className="fundamentals-hero__actions">
            <Button href="#fundamentals-lessons">
              Explore the Lessons <ArrowRight size={18} />
            </Button>
            <Button href="/learn/" variant="secondary">
              Back to Learn
            </Button>
          </div>

          <div className="fundamentals-hero__notice">
            <ShieldCheck size={19} />
            <span>
              Educational content only. Trading involves risk,
              including the possible loss of your capital.
            </span>
          </div>
        </Container>
      </section>

      <section
        className="fundamentals-lessons"
        id="fundamentals-lessons"
      >
        <Container>
          <div className="fundamentals-section-heading">
            <span className="eyebrow">YOUR LEARNING PATH</span>
            <h2>Build your knowledge step by step</h2>
            <p>
              Work through these six topics in order to develop
              a clearer understanding of trading.
            </p>
          </div>


            <div className="fundamentals-lessons__grid">
            {lessons.map((lesson) => {
                const cardContent = (
                <>
                    <div className="fundamentals-lesson-card__number">
                    {lesson.number}
                    </div>

                    <div className="fundamentals-lesson-card__icon">
                    {lesson.number === '01' && <BookOpen size={23} />}
                    {lesson.number === '02' && <TrendingUp size={23} />}
                    {lesson.number === '03' && (
                        <ChartNoAxesCombined size={23} />
                    )}
                    {lesson.number === '04' && <BookOpen size={23} />}
                    {lesson.number === '05' && <ShieldCheck size={23} />}
                    {lesson.number === '06' && <Brain size={23} />}
                    </div>

                    <h3>{lesson.title}</h3>
                    <p>{lesson.description}</p>

                    {lesson.href && (
                    <span className="fundamentals-lesson-card__link">
                        Read Lesson <ArrowRight size={16} />
                    </span>
                    )}
                </>
                )

                return lesson.href ? (
                <a
                    className="fundamentals-lesson-card fundamentals-lesson-card--clickable"
                    href={lesson.href}
                    key={lesson.number}
                >
                    {cardContent}
                </a>
                ) : (
                <article
                    className="fundamentals-lesson-card"
                    key={lesson.number}
                >
                    {cardContent}
                </article>
                )
            })}
            </div>


          <div className="fundamentals-bottom-cta">
            <div>
              <span className="eyebrow">KEEP LEARNING</span>
              <h2>Good trading starts with understanding.</h2>
              <p>
                Take your time, learn the concepts, and never risk
                money you cannot afford to lose.
              </p>
            </div>

            <Button href="/risk-management/">
              Learn Risk Management <ArrowRight size={18} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default FundamentalsPage
