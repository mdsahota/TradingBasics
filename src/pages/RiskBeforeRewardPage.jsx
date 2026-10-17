import SEO from '../components/seo/SEO'
import {
  ArrowLeft,
  ShieldCheck,
  Target,
  Scale,
  ChartNoAxesCombined,
  AlertTriangle,
} from 'lucide-react'

import Container from '../components/common/Container'
import Button from '../components/common/Button'

const riskPrinciples = [
  {
    icon: <Scale size={24} />,
    title: 'Risk Versus Reward',
    description:
      'Compare the amount you could lose with the potential gain you are targeting. A potential reward that is larger than the planned risk does not guarantee that a trade will succeed.',
    example:
      'Example: A planned loss of $20 versus a potential gain of $40 represents a 1:2 risk-to-reward ratio.',
  },
  {
    icon: <Target size={24} />,
    title: 'Position Sizing',
    description:
      'Position sizing determines how much of an asset you trade. It should reflect your financial circumstances, the distance to your planned exit, and the amount you can afford to risk.',
    example:
      'A smaller position generally means less exposure to a given price movement.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Stop-Loss Orders',
    description:
      'A stop order may help manage risk by triggering an order when a specified price is reached. It cannot guarantee an exact exit price, especially during fast markets or price gaps.',
    example:
      'A stop order can trigger at a different price from its stop level.',
  },
  {
    icon: <ChartNoAxesCombined size={24} />,
    title: 'Leverage and Exposure',
    description:
      'Leverage allows you to control a larger position relative to the funds you put up. It can magnify gains and losses and may expose you to additional costs or forced liquidation.',
    example:
      'A small adverse price move can cause a large loss when leverage is high.',
  },
]

function RiskBeforeRewardPage() {
  return (
    <>
    <SEO
    title="Risk Before Reward: Trading Risk Management"
    description="Learn trading risk management, position sizing, stop-loss orders, leverage, and risk-to-reward ratios before placing a trade."
    path="/learn/fundamentals/risk-before-reward/"
    />

      <section className="fundamentals-hero">
        <Container>
          <span className="eyebrow">
            TRADING FUNDAMENTALS · LESSON 05
          </span>

          <h1>Risk Before Reward</h1>

          <p>
            Learn how to think about potential losses, position
            size, stop-loss orders, and risk-to-reward ratios
            before considering a trade.
          </p>

          <div className="fundamentals-hero__actions">
            <Button href="/learn/fundamentals/">
              <ArrowLeft size={18} /> All Fundamentals Lessons
            </Button>
          </div>

          <div className="fundamentals-hero__notice">
            <ShieldCheck size={19} />
            <span>
              Educational content only. Risk-management tools
              cannot eliminate trading losses.
            </span>
          </div>
        </Container>
      </section>

      <section className="lesson-content">
        <Container>
          <article className="lesson-content__article">
            <span className="eyebrow">PLAN BEFORE YOU TRADE</span>

            <h2>Why risk comes first</h2>

            <p>
              Every trade involves uncertainty. Prices can move
              against your expectations, and even a carefully
              researched trade can lose money. Thinking about
              potential losses before entering helps you make
              more deliberate decisions.
            </p>

            <p>
              Risk management is not about guaranteeing profits.
              It is about understanding your exposure, setting
              reasonable limits, and avoiding a single loss
              that could seriously harm your finances.
            </p>

            <h2>Four important risk principles</h2>

            <div className="markets-lesson-grid">
              {riskPrinciples.map((principle) => (
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

            <h2>Understanding a risk-to-reward ratio</h2>

            <p>
              A risk-to-reward ratio compares the amount you
              plan to risk with the potential profit you are
              targeting. A 1:2 ratio means the potential reward
              is twice the planned risk, before fees and other
              costs.
            </p>

            <div className="lesson-content__callout">
              <Target size={22} />
              <div>
                <h3>A simple example</h3>
                <p>
                  Suppose a hypothetical trade has a planned
                  loss of $20 if it reaches your exit level and
                  a potential gain of $40 at your target. That
                  is a 1:2 planned risk-to-reward ratio.
                  It does not mean the trade has a 2-in-3 chance
                  of winning or that the target will be reached.
                </p>
              </div>
            </div>

            <h2>Position sizing matters</h2>

            <p>
              The number of shares or contracts you trade can
              have a major effect on the amount you gain or lose.
              Larger positions generally create greater exposure
              to the same price movement.
            </p>

            <p>
              For example, if a hypothetical position loses
              $1 per share and you hold 10 shares, the loss
              is $10 before costs. If you hold 50 shares, the
              loss is $50 before costs. Actual outcomes can
              differ if prices move quickly or execution is
              different from what you expected.
            </p>

            <h2>Understand the limits of stop-loss orders</h2>

            <p>
              A stop-loss plan can help define when you intend
              to exit a trade if the market moves against you.
              However, a stop price is not necessarily the
              price at which your trade will execute.
            </p>

            <p>
              Market gaps, low liquidity, slippage, and fast
              price movements can lead to a worse execution
              price. Different order types also have different
              execution trade-offs.
            </p>

            <h2>Common risk-management mistakes</h2>

            <ul>
              <li>
                <strong>Risking too much:</strong> Using a
                position size that could cause an unaffordable
                loss.
              </li>
              <li>
                <strong>Ignoring costs:</strong> Forgetting
                spreads, commissions, financing, and other fees.
              </li>
              <li>
                <strong>Overusing leverage:</strong> Taking
                exposure that is too large for your circumstances.
              </li>
              <li>
                <strong>Moving exit levels impulsively:</strong>
                Changing a plan out of fear or hope without
                reassessing the risk.
              </li>
              <li>
                <strong>Chasing losses:</strong> Increasing risk
                to try to recover money quickly.
              </li>
            </ul>

            <div className="lesson-content__callout">
              <AlertTriangle size={22} />
              <div>
                <h3>Beginner tip</h3>
                <p>
                  Practise with a simulator and record your
                  planned entry, exit, position size, and
                  possible loss. Never assume a stop-loss order
                  makes a trade risk-free, and never trade with
                  money you cannot afford to lose.
                </p>
              </div>
            </div>

            <div className="lesson-content__next">
              <div>
                <span className="eyebrow">PREVIOUS LESSON</span>
                <h2>Orders and Trading Basics</h2>
                <p>
                  Review market, limit, and stop orders before
                  learning how to manage trading risk.
                </p>
              </div>

              <Button href="/learn/fundamentals/orders-trading-basics/">
                Previous Lesson <ArrowLeft size={18} />
              </Button>
            </div>
          </article>
        </Container>
      </section>
    </>
  )
}

export default RiskBeforeRewardPage
