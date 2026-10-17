
import SEO from '../components/seo/SEO'
import {
  TrendingUp,
  Target,
  Layers,
  Clock,
  ShieldCheck,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react'

import Container from '../components/common/Container'
import Button from '../components/common/Button'

function TradingStrategiesPage() {
  return (
    <>
      <SEO
        title="Trading Strategies: Explore Different Trading Approaches"
        description="Learn about trend following, breakout trading, range trading, and other trading approaches, including their risks and limitations."
        path="/trading-strategies/"
      />

      <section className="fundamentals-hero">
        <Container>
          <span className="eyebrow">TRADING EDUCATION · STRATEGIES</span>

          <h1>Understand different approaches to trading.</h1>

          <p>
            A trading strategy provides a structured set of rules for
            evaluating potential opportunities, entering trades, managing
            risk, and deciding when to exit.
          </p>

          <div className="fundamentals-hero__actions">
            <Button href="#trading-strategy-lessons">
              Explore strategies <ArrowRight size={18} />
            </Button>
          </div>

          <div className="fundamentals-hero__notice">
            No trading strategy works in every market condition or guarantees
            profits. Always consider potential losses, costs, and your own
            financial circumstances.
          </div>
        </Container>
      </section>

      <section className="lesson-content" id="trading-strategy-lessons">
        <Container>
          <div className="lesson-content__article">
            <span className="eyebrow">THE FOUNDATIONS</span>
            <h2>What is a trading strategy?</h2>

            <p>
              A trading strategy is a repeatable approach that defines the
              conditions under which a trader considers entering and exiting
              a position. It may use price trends, chart patterns, market
              information, or other criteria.
            </p>

            <p>
              A clearly defined strategy helps traders evaluate decisions
              consistently instead of reacting impulsively to every market
              movement.
            </p>

            <div className="lesson-content__callout">
              <ClipboardCheck size={24} />
              <div>
                <h3>Rules matter more than predictions</h3>
                <p>
                  A useful strategy defines what you will do under different
                  conditions, including when your original idea is no longer
                  valid.
                </p>
              </div>
            </div>
          </div>

          <div className="markets-lesson-grid">
            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <TrendingUp size={24} />
              </div>
              <h3>1. Trend following</h3>
              <p>
                This approach looks for established upward or downward trends
                and attempts to participate while the trend continues.
                Reversals and sideways markets can create losses.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <Target size={24} />
              </div>
              <h3>2. Breakout trading</h3>
              <p>
                Breakout traders watch for price moving beyond an established
                support, resistance, or trading range. Some breakouts fail
                and quickly reverse.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <Layers size={24} />
              </div>
              <h3>3. Range trading</h3>
              <p>
                This approach looks for opportunities within a market that
                repeatedly moves between areas of support and resistance.
                It becomes less reliable when price breaks out of the range.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <Clock size={24} />
              </div>
              <h3>4. Trading timeframes</h3>
              <p>
                Some traders hold positions for minutes or hours, while others
                hold them for days or longer. The timeframe affects trade
                management, costs, and the time needed to monitor positions.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <ShieldCheck size={24} />
              </div>
              <h3>5. Risk-first planning</h3>
              <p>
                Define the entry conditions, planned exit, position size, and
                potential loss before placing a trade. A strategy should
                account for costs and unexpected price movements.
              </p>
            </article>
          </div>

          <div className="lesson-content__article">
            <h2>How to evaluate a strategy</h2>

            <p>
              Before risking real money, write down the strategy's rules and
              decide how you will measure its results. Historical examples
              can help you understand how it behaved in the past, but they
              cannot guarantee future performance.
            </p>

            <ul>
              <li>Define clear entry and exit conditions.</li>
              <li>Specify position sizing and risk limits.</li>
              <li>Consider transaction fees and slippage.</li>
              <li>Test consistently using historical data or a simulator.</li>
              <li>Review losing trades as well as winning trades.</li>
              <li>Avoid assuming that a short run of success will continue.</li>
            </ul>

            <div className="lesson-content__callout">
              <ShieldCheck size={24} />
              <div>
                <h3>Past results are not a promise</h3>
                <p>
                  A strategy that performed well historically may perform
                  poorly in different market conditions. Testing also has
                  limitations and can overstate expected performance.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-content__next">
            <h2>Build your foundation</h2>
            <p>
              Understand how markets work and learn to manage risk before
              exploring strategies in greater depth.
            </p>

            <Button href="/learn/fundamentals/">
              Return to Trading Fundamentals <ArrowRight size={18} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default TradingStrategiesPage
