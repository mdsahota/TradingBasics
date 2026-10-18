
import SEO from '../components/seo/SEO'
import {
  ChartNoAxesCombined,
  Newspaper,
  Users,
  Activity,
  ShieldCheck,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react'

import Container from '../components/common/Container'
import Button from '../components/common/Button'

function MarketAnalysisPage() {
  return (
    <>
      <SEO
        title="Market Analysis: Understand Market Conditions"
        description="Learn how to analyze market conditions, economic information, market sentiment, price behaviour, and trading risks."
        path="/market-analysis/"
      />

      <section className="fundamentals-hero">
        <Container>
          <span className="eyebrow">TRADING EDUCATION · MARKET ANALYSIS</span>

          <h1>Understand the forces that move markets.</h1>

          <p>
            Market analysis brings together price behaviour, economic
            information, and market sentiment to help you understand
            conditions before making a trading decision.
          </p>

          <div className="fundamentals-hero__actions">
            <Button href="#market-analysis-lessons">
              Explore the lessons <ArrowRight size={18} />
            </Button>
          </div>

          <div className="fundamentals-hero__notice">
            Markets are influenced by many factors, and unexpected events can
            change conditions quickly. Analysis cannot guarantee the direction
            of future prices or prevent losses.
          </div>
        </Container>
      </section>

      <section className="lesson-content" id="market-analysis-lessons">
        <Container>
          <div className="lesson-content__article">
            <span className="eyebrow">THE FOUNDATIONS</span>
            <h2>What is market analysis?</h2>

            <p>
              Market analysis is the process of examining information that
              may help explain current market conditions. Traders may study
              price charts, economic reports, company results, news, and
              changes in market participation.
            </p>

            <p>
              Different markets respond to different influences. Stock prices
              may be affected by company performance and economic expectations,
              while currencies can react to interest rates, inflation, and
              central bank decisions.
            </p>

            <div className="lesson-content__callout">
              <ChartNoAxesCombined size={24} />
              <div>
                <h3>Look at the bigger picture</h3>
                <p>
                  One piece of information rarely explains every price
                  movement. Consider the wider context and remain open to
                  alternative explanations.
                </p>
              </div>
            </div>
          </div>

          <div className="markets-lesson-grid">
            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <Activity size={24} />
              </div>
              <h3>1. Understand market conditions</h3>
              <p>
                Learn the difference between trending, range-bound, and
                volatile markets. Different conditions may affect how a
                trading approach performs.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <Newspaper size={24} />
              </div>
              <h3>2. Follow economic information</h3>
              <p>
                Explore how inflation reports, employment data, interest
                rate decisions, and company announcements can influence
                expectations and prices.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <Users size={24} />
              </div>
              <h3>3. Understand market sentiment</h3>
              <p>
                Examine how participants' expectations, confidence, and
                reactions to new information can contribute to buying or
                selling pressure.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <ChartNoAxesCombined size={24} />
              </div>
              <h3>4. Combine different evidence</h3>
              <p>
                Compare relevant news, market context, and price behaviour.
                Conflicting signals are possible, and no single indicator
                should be treated as proof of a future move.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <ShieldCheck size={24} />
              </div>
              <h3>5. Account for uncertainty</h3>
              <p>
                Consider what could challenge your analysis, identify
                potential risks, and plan how to respond if the market
                behaves differently than expected.
              </p>
            </article>
          </div>

          <div className="lesson-content__article">
            <h2>A simple market analysis example</h2>

            <p>
              Imagine a central bank announces an interest rate decision.
              Traders may compare the announcement with what markets had
              expected and examine how bond yields, currency prices, and
              stock prices respond.
            </p>

            <p>
              The outcome is not always straightforward. If the decision was
              already expected, prices may react more to the accompanying
              statement or to how investors interpret future policy.
            </p>

            <div className="lesson-content__callout">
              <ClipboardCheck size={24} />
              <div>
                <h3>Ask three questions</h3>
                <p>
                  What was expected? What new information appeared? How did
                  the market respond, and what uncertainty remains?
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-content__article">
            <h2>Build a market analysis routine</h2>

            <ul>
              <li>Identify the market and timeframe you are studying.</li>
              <li>Review relevant economic or company information.</li>
              <li>Observe the current trend, range, and volatility.</li>
              <li>Consider more than one possible explanation for price moves.</li>
              <li>Write down your assumptions and what could prove them wrong.</li>
              <li>Define your risk limits before considering a trade.</li>
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
          <div className="lesson-content__next">
            <h2>Turn knowledge into a foundation</h2>
            <p>
              Market analysis is most useful when paired with an understanding
              of trading fundamentals, technical analysis, and risk management.
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

export default MarketAnalysisPage
