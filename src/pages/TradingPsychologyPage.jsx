
import SEO from '../components/seo/SEO'
import {
  ArrowLeft,
  Brain,
  HeartPulse,
  Target,
  ShieldCheck,
  BookOpen,
  AlertTriangle,
} from 'lucide-react'

import Container from '../components/common/Container'
import Button from '../components/common/Button'

const psychologyPrinciples = [
  {
    icon: <HeartPulse size={24} />,
    title: 'Fear and Greed',
    description:
      'Fear can cause traders to exit positions too early, while greed can encourage them to chase profits or take unnecessary risks. Recognizing these reactions can help you make more deliberate decisions.',
    example:
      'Example: Avoid entering a trade simply because an asset has risen sharply and you fear missing out.',
  },
  {
    icon: <Target size={24} />,
    title: 'Patience and Discipline',
    description:
      'A trading plan defines the conditions you want to see before entering or exiting a trade. Patience means waiting for those conditions instead of reacting to every market movement.',
    example:
      'Example: If your entry conditions are not met, waiting can be a valid decision.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Managing Losses',
    description:
      'Losses are an unavoidable possibility in trading. Accepting this uncertainty can help you avoid impulsive decisions, abandoning your plan, or increasing risk to recover money quickly.',
    example:
      'Example: After a loss, review your decisions rather than immediately placing another trade.',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Learning from Decisions',
    description:
      'A trading journal helps you record your reasoning, planned risk, emotions, and outcomes. Reviewing these records can reveal habits that deserve attention.',
    example:
      'Example: Record whether you followed your plan, even when the trade ended in a loss.',
  },
]

function TradingPsychologyPage() {
  return (
    <>
      <SEO
        title="Trading Psychology: Managing Emotions"
        description="Learn how fear, greed, impatience, and overconfidence affect trading decisions, and discover practical ways to build trading discipline."
        path="/learn/fundamentals/trading-psychology/"
      />

      <section className="fundamentals-hero">
        <Container>
          <span className="eyebrow">
            TRADING FUNDAMENTALS · LESSON 06
          </span>

          <h1>Trading Psychology: Managing Emotions</h1>

          <p>
            Understand how emotions influence trading decisions
            and learn practical ways to develop patience,
            discipline, and a consistent decision-making process.
          </p>

          <div className="fundamentals-hero__actions">
            <Button href="/learn/fundamentals/">
              <ArrowLeft size={18} /> All Fundamentals Lessons
            </Button>
          </div>

          <div className="fundamentals-hero__notice">
            <Brain size={19} />
            <span>
              Emotional discipline cannot eliminate risk or
              guarantee profitable results. A consistent
              decision-making process matters.
            </span>
          </div>
        </Container>
      </section>

      <section className="lesson-content">
        <Container>
          <article className="lesson-content__article">
            <span className="eyebrow">
              UNDERSTAND YOUR DECISIONS
            </span>

            <h2>What Is Trading Psychology?</h2>

            <p>
              Trading psychology refers to the emotions,
              attitudes, and habits that influence how a person
              makes trading decisions. Fear, excitement,
              frustration, and overconfidence can affect when
              someone enters a trade, exits a position, or
              decides how much money to risk.
            </p>

            <p>
              The goal is not to eliminate emotions, but to
              recognize them and avoid allowing impulsive
              feelings to replace a considered trading plan.
            </p>

            <h2>Four Important Psychology Principles</h2>

            <div className="markets-lesson-grid">
              {psychologyPrinciples.map((principle) => (
                <section
                  className="markets-lesson-card"
                  key={principle.title}
                >
                  <div className="markets-lesson-card__icon">
                    {principle.icon}
                  </div>

                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                  <span>{principle.example}</span>
                </section>
              ))}
            </div>

            <h2>How Fear and Greed Affect Trading</h2>

            <p>
              Fear may cause a trader to close a position
              prematurely or hesitate when a planned setup
              appears. Greed may encourage a trader to ignore
              an exit plan, increase position size, or continue
              taking risks after reaching a target.
            </p>

            <p>
              Another common reaction is the fear of missing
              out. A trader sees an asset moving quickly and
              enters without evaluating the opportunity or
              considering the possible loss.
            </p>

            <div className="lesson-content__callout">
              <Target size={22} />
              <div>
                <h3>A Practical Example</h3>
                <p>
                  Imagine a stock has already risen sharply.
                  You feel pressure to buy because you believe
                  the price will keep climbing. Instead of
                  reacting immediately, review your entry
                  criteria, potential risk, and trading plan.
                  If the conditions do not fit your plan,
                  you can choose not to enter.
                </p>
              </div>
            </div>

            <h2>Understand Impatience and Overconfidence</h2>

            <p>
              Impatience can lead traders to enter positions
              before their strategy's conditions are met.
              This may result in overtrading, where someone
              takes more trades than their plan requires.
            </p>

            <p>
              Overconfidence can develop after a series of
              profitable trades. A trader may begin to believe
              that losses are unlikely, ignore risk limits,
              or take positions that are too large.
            </p>

            <p>
              A written plan and consistent risk limits can
              help keep decisions grounded in a repeatable
              process rather than recent results or emotions.
            </p>

            <h2>Avoid Revenge Trading</h2>

            <p>
              Revenge trading happens when someone takes
              another trade primarily to recover money lost
              on a previous trade. Frustration can lead to
              rushed entries, larger positions, and less
              careful risk assessment.
            </p>

            <p>
              After a loss, take time to review what happened.
              Check whether you followed your plan and respected
              your risk limits. If you feel pressured to recover
              the loss immediately, consider taking a break.
            </p>

            <h2>Build a Consistent Trading Routine</h2>

            <ul>
              <li>
                <strong>Write a trading plan:</strong> Define
                your entry conditions, exit rules, and risk
                limits before placing a trade.
              </li>
              <li>
                <strong>Wait for your setup:</strong> Avoid
                entering simply because the market is moving
                or other people are discussing an asset.
              </li>
              <li>
                <strong>Respect your risk limits:</strong>
                Do not increase your exposure impulsively
                after a win or a loss.
              </li>
              <li>
                <strong>Keep a trading journal:</strong>
                Record your decisions, emotions, and reasons
                for entering and exiting trades.
              </li>
              <li>
                <strong>Review your process:</strong> Evaluate
                whether you followed your plan instead of
                judging every decision solely by its outcome.
              </li>
            </ul>

            <div className="lesson-content__callout">
              <AlertTriangle size={22} />
              <div>
                <h3>Beginner Tip</h3>
                <p>
                  Practise with a simulator before risking
                  real money. Record your decisions and learn
                  to follow your plan consistently. Simulated
                  results do not guarantee similar results
                  in live markets.
                </p>
              </div>
            </div>

            <h2>Why the Process Matters</h2>

            <p>
              A trade can follow a sensible plan and still
              lose money because market outcomes are uncertain.
              Similarly, a trade made without proper analysis
              can sometimes make money by chance.
            </p>

            <p>
              Reviewing your decisions over time helps you
              focus on the quality of your process, your
              risk management, and the habits you can improve.
              No routine can remove uncertainty from financial
              markets.
            </p>

            <div className="lesson-content__callout">
              <Brain size={22} />
              <div>
                <h3>Key Takeaways</h3>
                <p>
                  Recognize emotional reactions, follow a
                  defined trading plan, respect risk limits,
                  and review your decisions. Trading discipline
                  is about managing your responses, not
                  predicting every market movement correctly.
                </p>
              </div>
            </div>
<div className="lesson-content__article tradingview-promo">
            <h2>Explore a charting tool</h2>

            <p>
              Want to practise reading price charts? TradingView provides
              interactive charts and technical analysis tools that can help
              you explore market trends, support and resistance, and
              technical indicators.
            </p>

            <p>
              You can explore the platform and decide whether its tools suit
              your learning needs. Some features may require a paid plan.
            </p>

            <div className="tradingview-promo__banner">
              <a
                href="https://www.tradingview.com/chart/?aff_id=160718&utm_source=creative&utm_lang=EN"
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                aria-label="Explore TradingView charts"
              >
                <picture>
                  <source
                    media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
                    srcSet="https://s3.tradingview.com/pub/referrals/creatives/WT/EN/936x120Banner.jpg"
                  />
                  <img
                    src="https://s3.tradingview.com/pub/referrals/creatives/WT/EN/468x60Banner.jpg"
                    alt="Explore TradingView charts"
                    width="468"
                    height="60"
                    loading="lazy"
                  />
                </picture>
              </a>
            </div>

            <p className="tradingview-promo__disclosure">
              <small>
                This is an affiliate link. TradingBasics may earn a
                commission if you sign up or make a qualifying purchase,
                at no additional cost to you.
              </small>
            </p>
          </div>
            <div className="lesson-content__next">
              <div>
                <span className="eyebrow">
                  PREVIOUS LESSON
                </span>

                <h2>Risk Before Reward</h2>

                <p>
                  Learn how position sizing, stop-loss orders,
                  and risk-to-reward ratios can help you
                  understand trading risk.
                </p>
              </div>

              <Button href="/learn/fundamentals/risk-before-reward/">
                Previous Lesson <ArrowLeft size={18} />
              </Button>
            </div>
          </article>
        </Container>
      </section>
    </>
  )
}

export default TradingPsychologyPage
