
import SEO from '../components/seo/SEO'
import {
  ChartNoAxesCombined,
  TrendingUp,
  Layers,
  Activity,
  ShieldCheck,
  BookOpen,
  ArrowRight,
} from 'lucide-react'

import Container from '../components/common/Container'
import Button from '../components/common/Button'

function TechnicalAnalysisPage() {
  return (
    <>
      <SEO
        title="Technical Analysis: Charts, Trends and Indicators"
        description="Learn technical analysis basics, including price charts, candlesticks, market trends, support and resistance, and technical indicators."
        path="/tools-strategies/"
      />

      <section className="fundamentals-hero">
        <Container>
          <span className="eyebrow">TRADING EDUCATION · TECHNICAL ANALYSIS</span>

          <h1>Learn to read the story behind price movements.</h1>

          <p>
            Technical analysis studies historical prices and trading activity
            to help traders evaluate market conditions. Learn how charts,
            trends, and indicators can support a structured trading plan.
          </p>

          <div className="fundamentals-hero__actions">
            <Button href="#technical-analysis-lessons">
              Explore the lessons <ArrowRight size={18} />
            </Button>
          </div>

          <div className="fundamentals-hero__notice">
            Technical analysis cannot predict future prices with certainty.
            Markets can move unexpectedly, and every trading decision involves
            risk.
          </div>
        </Container>
      </section>

      <section
        className="lesson-content"
        id="technical-analysis-lessons"
      >
        <Container>
          <div className="lesson-content__article">
            <span className="eyebrow">THE FOUNDATIONS</span>
            <h2>What is technical analysis?</h2>

            <p>
              Technical analysis involves studying price charts, patterns,
              trends, and trading activity to assess how a market has behaved.
              Traders use these observations to develop and evaluate possible
              entry and exit plans.
            </p>

            <p>
              It is one approach to analysing markets. It does not guarantee
              profitable trades, and it is often used alongside risk
              management and an understanding of market fundamentals.
            </p>

            <div className="lesson-content__callout">
              <ChartNoAxesCombined size={24} />
              <div>
                <h3>Focus on evidence, not certainty</h3>
                <p>
                  A chart can help you organize information, but no pattern
                  or indicator can tell you with certainty what price will do
                  next.
                </p>
              </div>
            </div>
          </div>

          <div className="markets-lesson-grid">
            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <BookOpen size={24} />
              </div>
              <h3>1. Reading price charts</h3>
              <p>
                Understand how line charts, bar charts, and candlestick charts
                represent price movements over different time periods.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <TrendingUp size={24} />
              </div>
              <h3>2. Market trends</h3>
              <p>
                Learn to identify upward, downward, and sideways price
                movements, while recognizing that trends can change.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <Layers size={24} />
              </div>
              <h3>3. Support and resistance</h3>
              <p>
                Explore price areas where buying or selling interest has
                previously appeared. These areas are zones to assess, not
                guaranteed turning points.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <Activity size={24} />
              </div>
              <h3>4. Technical indicators</h3>
              <p>
                Get introduced to moving averages, the Relative Strength
                Index (RSI), and other tools used to examine price behaviour
                and momentum.
              </p>
            </article>

            <article className="markets-lesson-card">
              <div className="markets-lesson-card__icon">
                <ShieldCheck size={24} />
              </div>
              <h3>5. Use analysis responsibly</h3>
              <p>
                Combine observations with clear trading rules, planned exits,
                appropriate position sizing, and awareness of potential losses.
              </p>
            </article>
          </div>

          <div className="lesson-content__article">
            <h2>A simple example</h2>

            <p>
              Imagine a stock has been making higher highs and higher lows
              over several weeks. A trader might interpret this as an upward
              trend and look for evidence that the pattern is continuing.
            </p>

            <p>
              However, the trend could reverse, and a chart pattern can fail.
              A trader should consider what would invalidate the analysis
              before deciding whether to enter a trade.
            </p>

            <div className="lesson-content__callout">
              <ShieldCheck size={24} />
              <div>
                <h3>Analysis needs risk controls</h3>
                <p>
                  A possible trading opportunity is not a reason to ignore
                  position sizing, exit planning, or the possibility of loss.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-content__next">
            <h2>Continue learning</h2>
            <p>
              Build your chart-reading skills alongside a strong understanding
              of trading fundamentals and risk management.
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

export default TechnicalAnalysisPage
