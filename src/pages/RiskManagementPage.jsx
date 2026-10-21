
import SEO from '../components/seo/SEO'
import {
  ShieldCheck,
  Scale,
  Target,
  Calculator,
  AlertTriangle,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react'

import Container from '../components/common/Container'
import Button from '../components/common/Button'

function RiskManagementPage() {
  return (
    <>
      <SEO
        title="Risk Management: Protect Your Trading Capital"
        description="Learn trading risk management, position sizing, stop-loss orders, risk-to-reward ratios, and practical ways to manage potential losses."
        path="/risk-management/"
      />

      <section className="fundamentals-hero">
        <Container>
          <span className="eyebrow">TRADING EDUCATION · RISK MANAGEMENT</span>

          <h1>Protect your capital before pursuing profits.</h1>

          <p>
            Risk management helps traders plan how much they are willing to
            lose, make consistent decisions, and avoid putting too much capital
            at risk on a single trade.
          </p>

          <div className="fundamentals-hero__actions">
            <Button href="#risk-management-lessons">
              Explore the lessons <ArrowRight size={18} />
            </Button>
          </div>

          <div className="fundamentals-hero__notice">
            No risk management method eliminates trading risk or guarantees
            profits. You can lose some or all of the money you invest.
          </div>
        </Container>
      </section>

      <section
        className="lesson-content"
        id="risk-management-lessons"
      >
        <Container>
          <div className="lesson-content__article">
            <span className="eyebrow">THE FOUNDATIONS</span>
            <h2>What is risk management?</h2>

            <p>
              Risk management is the process of identifying potential losses
              and deciding how to limit your exposure before entering a trade.
              Instead of focusing only on how much you could earn, you also
              consider how much you could lose.
            </p>

            <p>
              A trading plan should define your entry conditions, exit
              conditions, position size, and the amount of capital you are
              prepared to risk.
            </p>

            <div className="lesson-content__callout">
              <ShieldCheck size={24} />
              <div>
                <h3>Remember the priority</h3>
                <p>
                  Protecting your trading capital helps you avoid letting one
                  poorly planned trade cause disproportionate damage to your
                  account.
                </p>
              </div>
            </div>
          </div>

          <div className="markets-lesson-grid">
            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <Calculator size={24} />
              </div>
              <h3>1. Position sizing</h3>
              <p>
                Decide how many shares, contracts, or units to trade based on
                your account size, entry price, and planned exit.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <Target size={24} />
              </div>
              <h3>2. Stop-loss orders</h3>
              <p>
                Learn how stop-loss orders can help manage a planned exit.
                Execution prices may differ from the stop price, especially
                in fast-moving or illiquid markets.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <Scale size={24} />
              </div>
              <h3>3. Risk-to-reward ratio</h3>
              <p>
                Compare your planned potential loss with your planned potential
                gain before deciding whether a trade fits your strategy.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <AlertTriangle size={24} />
              </div>
              <h3>4. Understand leverage</h3>
              <p>
                Borrowed exposure can magnify losses as well as gains. Understand
                margin requirements and the possibility of losing more than
                you initially expect.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <ClipboardCheck size={24} />
              </div>
              <h3>5. Trading rules</h3>
              <p>
                Set clear limits for trade size, daily losses, and the
                conditions under which you will stop trading and review
                your decisions.
              </p>
            </article>
          </div>

          <div className="lesson-content__article">
            <h2>A simple position-sizing example</h2>

            <p>
              Imagine a hypothetical trading account of $5,000. A trader
              chooses to risk 1% of the account on one trade.
            </p>

            <div className="lesson-content__callout">
              <Calculator size={24} />
              <div>
                <h3>Calculate the planned risk</h3>
                <p>
                  Account balance: $5,000
                  <br />
                  Planned risk: 1%
                  <br />
                  Maximum planned loss: $50
                </p>
                <p>
                  If the entry price is $25 and the planned stop price is
                  $24, the difference is $1 per share. A position of 50 shares
                  represents $50 of planned price risk, excluding fees and
                  slippage.
                </p>
              </div>
            </div>

            <p>
              This is an educational example, not a recommendation to risk 1%
              on every trade. A stop-loss does not guarantee that the final
              loss will stay within the planned amount.
            </p>
          </div>

          <div className="lesson-content__article">
            <h2>Build a risk management checklist</h2>

            <ul>
              <li>Know why you are entering the trade.</li>
              <li>Define your exit before entering.</li>
              <li>Calculate your position size and planned loss.</li>
              <li>Consider fees, slippage, leverage, and market volatility.</li>
              <li>Avoid risking money you cannot afford to lose.</li>
              <li>Review your results and follow your trading plan.</li>
            </ul>
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

          <div className="lesson-content__article">
            <span className="eyebrow">INTERACTIVE TRADING TOOL</span>
            <h2>Plan your trade with the Trading Strategy Navigator</h2>

            <p>
              Before entering a trade, assess market conditions, review your
              trading plan, calculate position size, and check your risk.
              Use this interactive tool to build a more disciplined
              pre-trade routine.
            </p>

            <Button href="/trading-strategy-navigator/">
              Open Strategy Navigator <ArrowRight size={18} />
            </Button>
          </div>

          <div className="lesson-content__next">
            <h2>Continue learning</h2>
            <p>
              Risk management works best alongside market knowledge and
              emotional discipline.
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

export default RiskManagementPage
