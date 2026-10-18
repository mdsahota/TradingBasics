import SEO from '../components/seo/SEO'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

import Container from '../components/common/Container'
import Button from '../components/common/Button'

function WhatIsTradingPage() {
  return (
    <>
    <SEO
        title="What Is Trading? A Beginner's Guide"
        description="Learn what trading is, how financial markets work, and how beginners can understand buying, selling, and risk management."
        path="/learn/fundamentals/what-is-trading/"
    />
      <section className="fundamentals-hero">
        <Container>
          <span className="eyebrow">
            TRADING FUNDAMENTALS · LESSON 01
          </span>

          <h1>What Is Trading?</h1>

          <p>
            Learn what trading means, why people buy and sell
            financial assets, and the essential concepts every
            beginner should understand before getting started.
          </p>

          <div className="fundamentals-hero__actions">
            <Button href="/learn/fundamentals/">
              <ArrowLeft size={18} /> All Fundamentals Lessons
            </Button>
          </div>

          <div className="fundamentals-hero__notice">
            <ShieldCheck size={19} />
            <span>
              This lesson is for education only. Trading involves
              risk and you can lose some or all of your invested
              money.
            </span>
          </div>
        </Container>
      </section>

      <section className="lesson-content">
        <Container>
          <article className="lesson-content__article">
            <span className="eyebrow">THE BASICS</span>
            <h2>What does trading mean?</h2>

            <p>
              Trading means buying and selling financial assets
              in an attempt to benefit from changes in their
              market prices. Depending on the market and the
              trader's approach, a position might last seconds,
              hours, days, or longer.
            </p>

            <p>
              People trade different assets, including company
              shares, currencies, commodities, and exchange-traded
              funds. Each market has its own features, costs, and
              risks.
            </p>

            <div className="lesson-content__callout">
              <BookOpen size={22} />
              <div>
                <h3>Key idea</h3>
                <p>
                  Trading involves uncertainty. A price can move
                  against your expectations, even when your
                  reasoning seems sound.
                </p>
              </div>
            </div>

            <h2>Why do people trade?</h2>

            <p>
              Market participants have different goals. Some try
              to benefit from short-term price movements. Others
              buy or sell to manage financial risks, provide
              liquidity, or adjust their investments.
            </p>

            <p>
              A potential trading opportunity is never a
              guaranteed profit. Decisions should account for
              transaction costs, uncertainty, and the possibility
              of loss.
            </p>

            <h2>Trading versus investing</h2>

            <div className="lesson-content__comparison">
              <div>
                <TrendingUp size={23} />
                <h3>Trading</h3>
                <p>
                  Often focuses on shorter-term price movements
                  and defined entry and exit decisions. Some
                  trading approaches are very active; others
                  involve holding positions for longer periods.
                </p>
              </div>

              <div>
                <BookOpen size={23} />
                <h3>Investing</h3>
                <p>
                  Often focuses on building wealth over a longer
                  period by holding assets based on goals,
                  fundamentals, and an investment plan.
                </p>
              </div>
            </div>

            <p>
              These approaches can overlap. The main differences
              are usually the time horizon, objectives, decision
              process, and how risk is managed.
            </p>

            <h2>What should beginners understand first?</h2>

            <ul>
              <li>Learn how the market you are studying works.</li>
              <li>Understand order types, fees, and spreads.</li>
              <li>Decide how much you could afford to lose.</li>
              <li>Learn risk management before exploring strategies.</li>
              <li>Practise with a simulator before risking real money.</li>
            </ul>

            <div className="lesson-content__callout">
              <ShieldCheck size={22} />
              <div>
                <h3>Remember</h3>
                <p>
                  No strategy removes market risk. Avoid borrowing
                  money to trade while learning, and never assume
                  past performance guarantees future results.
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
                <span className="eyebrow">NEXT LESSON</span>
                <h2>Understanding Financial Markets</h2>
                <p>
                  Explore the different markets and assets that
                  traders can encounter.
                </p>
              </div>

              <Button href="/learn/fundamentals/markets/">
                Next Lesson <ArrowRight size={18} />
              </Button>
            </div>
          </article>
        </Container>
      </section>
      
    </>
  )
}

export default WhatIsTradingPage
