import SEO from '../components/seo/SEO'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  Coins,
  Globe,
  ShieldCheck,
} from 'lucide-react'

import Container from '../components/common/Container'
import Button from '../components/common/Button'

const markets = [
  {
    icon: <Building2 size={24} />,
    title: 'Stock Markets',
    description:
      'Stocks represent ownership shares in companies. Their prices can change in response to company performance, economic conditions, investor expectations, and market activity.',
    example: 'Examples: shares of publicly listed companies.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Foreign Exchange (Forex)',
    description:
      'The forex market involves exchanging one currency for another. Exchange rates can be influenced by interest rates, economic data, trade, and geopolitical events.',
    example: 'Example: the EUR/USD currency pair.',
  },
  {
    icon: <Coins size={24} />,
    title: 'Commodities',
    description:
      'Commodities include raw materials and agricultural products. Prices may respond to supply, demand, weather, production costs, and global events.',
    example: 'Examples: gold, crude oil, and wheat.',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Market Indices',
    description:
      'An index tracks the performance of a selected group of securities. You generally cannot buy an index directly, but certain funds and derivatives provide exposure to it.',
    example: 'Examples: S&P 500 and S&P/TSX Composite Index.',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Exchange-Traded Funds (ETFs)',
    description:
      'ETFs are investment funds that trade on exchanges. They may hold a collection of assets or track an index, sector, commodity, or other market exposure.',
    example: 'Examples: broad-market index ETFs and bond ETFs.',
  },
    {
    icon: <Building2 size={24} />,
    title: 'Bonds and Fixed-Income Markets',
    description:
      'Bonds are loans made to governments or companies. They may pay interest over time, and their prices can change with interest rates, credit risk, and market conditions.',
    example:
      'Examples: Government of Canada bonds and corporate bonds.',
  },
]

function TrendingUpIcon() {
  return <BarChart3 size={24} />
}

function UnderstandingMarketsPage() {
  return (
    <>
    <SEO
    title="Understanding Financial Markets"
    description="Explore stock markets, forex, commodities, market indices, ETFs, and bonds. Learn how financial markets work in this beginner-friendly trading guide."
    path="/learn/fundamentals/markets/"
    />    
      <section className="fundamentals-hero">
        <Container>
          <span className="eyebrow">
            TRADING FUNDAMENTALS · LESSON 02
          </span>

          <h1>Understanding Financial Markets</h1>

          <p>
            Discover the main financial markets, what people trade
            in them, and why prices can move differently from one
            market to another.
          </p>

          <div className="fundamentals-hero__actions">
            <Button href="/learn/fundamentals/">
              <ArrowLeft size={18} /> All Fundamentals Lessons
            </Button>
          </div>

          <div className="fundamentals-hero__notice">
            <ShieldCheck size={19} />
            <span>
              Educational content only. Financial markets involve
              risk, and you can lose money when trading or investing.
            </span>
          </div>
        </Container>
      </section>

      <section className="lesson-content">
        <Container>
          <article className="lesson-content__article">
            <span className="eyebrow">KNOW THE MARKETS</span>
            <h2>What is a financial market?</h2>

            <p>
              A financial market is a place or system where
              participants buy, sell, or exchange financial assets.
              Markets help connect buyers and sellers and allow
              prices to change as supply, demand, and expectations
              change.
            </p>

            <p>
              Different markets have different trading hours,
              costs, rules, liquidity, and risks. Understanding
              what you are trading is an important first step
              before considering any transaction.
            </p>

            <h2>Explore the major markets</h2>

            <div className="markets-lesson-grid">
              {markets.map((market) => (
                <section
                  className="markets-lesson-card"
                  key={market.title}
                >
                  <div className="markets-lesson-card__icon">
                    {market.icon}
                  </div>

                  <h3>{market.title}</h3>
                  <p>{market.description}</p>
                  <span>{market.example}</span>
                </section>
              ))}
            </div>

            <h2>What makes market prices move?</h2>

            <p>
              Prices can respond to company announcements, economic
              reports, interest-rate decisions, changes in supply
              and demand, and unexpected world events. Traders may
              interpret the same information differently, which
              can contribute to price fluctuations.
            </p>

            <p>
              No single factor predicts every price movement.
              Markets can move unexpectedly, and past performance
              does not guarantee future results.
            </p>

            <h2>Understand risk before choosing a market</h2>

            <ul>
              <li>
                <strong>Volatility:</strong> How much and how quickly
                prices can change.
              </li>
              <li>
                <strong>Liquidity:</strong> How easily an asset can
                usually be bought or sold without significantly
                affecting its price.
              </li>
              <li>
                <strong>Trading costs:</strong> Commissions, spreads,
                fees, and other expenses that may apply.
              </li>
              <li>
                <strong>Leverage:</strong> Borrowed or amplified
                exposure that can magnify both gains and losses.
              </li>
            </ul>

            <div className="lesson-content__callout">
              <ShieldCheck size={22} />
              <div>
                <h3>Beginner tip</h3>
                <p>
                  Learn one market at a time. Understand its rules,
                  costs, and risks before moving on to more complex
                  products or strategies.
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
                <span className="eyebrow">PREVIOUS LESSON</span>
                <h2>What Is Trading?</h2>
                <p>
                  Review the basics of buying and selling financial
                  assets.
                </p>
              </div>

              <Button href="/learn/fundamentals/what-is-trading/">
                Previous Lesson <ArrowLeft size={18} />
              </Button>
            </div>
          </article>
        </Container>
      </section>
    </>
  )
}

export default UnderstandingMarketsPage
