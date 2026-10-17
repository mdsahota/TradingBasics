
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
