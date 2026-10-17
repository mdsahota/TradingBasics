import SEO from '../components/seo/SEO'
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  ArrowLeftRight,
  ShieldCheck,
  BarChart3,
} from 'lucide-react'

import Container from '../components/common/Container'
import Button from '../components/common/Button'

const priceFactors = [
  {
    icon: <TrendingUp size={24} />,
    title: 'Buying Pressure',
    description:
      'When buyers are more eager to purchase than sellers are to sell at current prices, buyers may offer higher prices to complete their trades.',
  },
  {
    icon: <TrendingDown size={24} />,
    title: 'Selling Pressure',
    description:
      'When sellers are more eager to sell than buyers are to buy at current prices, sellers may accept lower prices to find buyers.',
  },
  {
    icon: <ArrowLeftRight size={24} />,
    title: 'Supply and Demand',
    description:
      'Prices emerge from the interaction between buyers and sellers. Changes in demand, available supply, and expectations can influence the price at which trades occur.',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'News and Expectations',
    description:
      'Economic reports, company results, interest-rate decisions, and unexpected events can change what market participants expect about an asset.',
  },
]

function HowPricesMovePage() {
  return (
    <>

    <SEO
    title="How Prices Move: Supply and Demand"
    description="Learn how supply and demand, buying and selling pressure, bid-ask spreads, and candlestick charts influence financial market prices."
    path="/learn/fundamentals/how-prices-move/"
    />

      <section className="fundamentals-hero">
        <Container>
          <span className="eyebrow">
            TRADING FUNDAMENTALS · LESSON 03
          </span>

          <h1>How Prices Move</h1>

          <p>
            Learn how buyers and sellers influence prices,
            why markets rise and fall, and how to read the
            basic information shown on a price chart.
          </p>

          <div className="fundamentals-hero__actions">
            <Button href="/learn/fundamentals/">
              <ArrowLeft size={18} /> All Fundamentals Lessons
            </Button>
          </div>

          <div className="fundamentals-hero__notice">
            <ShieldCheck size={19} />
            <span>
              Educational content only. Market prices can change
              unexpectedly, and trading can result in losses.
            </span>
          </div>
        </Container>
      </section>

      <section className="lesson-content">
        <Container>
          <article className="lesson-content__article">
            <span className="eyebrow">UNDERSTAND PRICE ACTION</span>

            <h2>Why do prices change?</h2>

            <p>
              A market price reflects the prices at which buyers
              and sellers are willing to trade. When new orders
              arrive, existing orders change, or market
              participants react to new information, the price
              of an asset may move.
            </p>

            <p>
              A price increase does not mean that every trader
              is buying, and a price decrease does not mean that
              every trader is selling. Each completed trade has
              both a buyer and a seller.
            </p>

            <h2>Four factors that influence prices</h2>

            <div className="markets-lesson-grid">
              {priceFactors.map((factor) => (
                <section
                  className="markets-lesson-card"
                  key={factor.title}
                >
                  <div className="markets-lesson-card__icon">
                    {factor.icon}
                  </div>

                  <h3>{factor.title}</h3>
                  <p>{factor.description}</p>
                </section>
              ))}
            </div>

            <h2>Understanding bid, ask, and spread</h2>

            <p>
              In many markets, quotes include a bid price and
              an ask price. These help describe the prices
              currently available to trade.
            </p>

            <ul>
              <li>
                <strong>Bid:</strong> The highest displayed price
                a buyer is currently offering.
              </li>
              <li>
                <strong>Ask:</strong> The lowest displayed price
                a seller is currently asking.
              </li>
              <li>
                <strong>Spread:</strong> The difference between
                the ask price and the bid price.
              </li>
            </ul>

            <div className="lesson-content__callout">
              <BarChart3 size={22} />
              <div>
                <h3>Simple example</h3>
                <p>
                  Suppose a stock has a bid of $49.95 and an ask
                  of $50.00. The spread is $0.05 per share.
                  Actual execution prices may differ as quotes
                  and market conditions change.
                </p>
              </div>
            </div>

            <h2>How to read a candlestick</h2>

            <p>
              A candlestick summarizes price movement over a
              selected period, such as one minute, one hour,
              or one day. Each candle typically shows four
              prices:
            </p>

            <ul>
              <li>
                <strong>Open:</strong> The first price recorded
                for the period.
              </li>
              <li>
                <strong>High:</strong> The highest price reached
                during the period.
              </li>
              <li>
                <strong>Low:</strong> The lowest price reached
                during the period.
              </li>
              <li>
                <strong>Close:</strong> The final price recorded
                for the period.
              </li>
            </ul>

            <p>
              On many charts, a candle that closes above its
              opening price is shown in one colour, while a
              candle that closes below its opening price is
              shown in another. Colours vary by chart settings.
            </p>

            <h2>What beginners should remember</h2>

            <p>
              Price movements can be influenced by many
              interacting factors. A chart shows what prices
              have done, but it cannot guarantee what prices
              will do next.
            </p>

            <p>
              Learn to observe price movement without assuming
              that every rise or fall will continue. Practice
              reading charts before risking real money.
            </p>

            <div className="lesson-content__callout">
              <ShieldCheck size={22} />
              <div>
                <h3>Beginner tip</h3>
                <p>
                  Before studying trading strategies, practice
                  identifying the open, high, low, and close
                  on a few historical candlesticks. Focus on
                  understanding the information, not predicting
                  the next move.
                </p>
              </div>
            </div>

            <div className="lesson-content__next">
              <div>
                <span className="eyebrow">PREVIOUS LESSON</span>
                <h2>Understanding Financial Markets</h2>
                <p>
                  Review the different markets and assets
                  traders may encounter.
                </p>
              </div>

              <Button href="/learn/fundamentals/markets/">
                Previous Lesson <ArrowLeft size={18} />
              </Button>
            </div>
          </article>
        </Container>
      </section>
    </>
  )
}

export default HowPricesMovePage
