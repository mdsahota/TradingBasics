import SEO from '../components/seo/SEO'
import {
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  ListOrdered,
  ShieldCheck,
  Clock,
  CircleDollarSign,
} from 'lucide-react'

import Container from '../components/common/Container'
import Button from '../components/common/Button'

const orderTypes = [
  {
    icon: <ShoppingCart size={24} />,
    title: 'Market Orders',
    description:
      'A market order requests an immediate purchase or sale at the best available prices. Execution is generally prioritized over getting a specific price, so the final price may differ from the last displayed price.',
    example:
      'Example: You submit a market order to buy shares at the best available prices.',
  },
  {
    icon: <ListOrdered size={24} />,
    title: 'Limit Orders',
    description:
      'A limit order sets the maximum price you are willing to pay when buying, or the minimum price you are willing to accept when selling. Execution is not guaranteed.',
    example:
      'Example: You set a buy limit at $50. The order may execute at $50 or lower, if available.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Stop Orders',
    description:
      'A stop order becomes a market order when its stop price is reached. The execution price can be different from the stop price, particularly in fast-moving markets.',
    example:
      'Example: A sell stop at $45 may trigger if the market reaches that level.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Order Duration',
    description:
      'Order duration determines how long an order remains active. A day order generally expires at the end of the trading day if it has not executed. A good-till-cancelled order can remain active longer, subject to broker rules.',
    example:
      'Always check your broker’s order-duration options and cancellation rules.',
  },
]

function OrdersTradingBasicsPage() {
  return (
    <>

    <SEO
    title="Orders and Trading Basics: Market, Limit and Stop Orders"
    description="Understand market orders, limit orders, stop orders, order duration, and trade execution with this beginner-friendly guide to trading basics."
    path="/learn/fundamentals/orders-trading-basics/"
    />

      <section className="fundamentals-hero">
        <Container>
          <span className="eyebrow">
            TRADING FUNDAMENTALS · LESSON 04
          </span>

          <h1>Orders and Trading Basics</h1>

          <p>
            Understand how trading orders work, how different
            order types affect execution, and what to check
            before placing a trade.
          </p>

          <div className="fundamentals-hero__actions">
            <Button href="/learn/fundamentals/">
              <ArrowLeft size={18} /> All Fundamentals Lessons
            </Button>
          </div>

          <div className="fundamentals-hero__notice">
            <ShieldCheck size={19} />
            <span>
              Educational content only. Orders may execute at
              unexpected prices, and trading can result in losses.
            </span>
          </div>
        </Container>
      </section>

      <section className="lesson-content">
        <Container>
          <article className="lesson-content__article">
            <span className="eyebrow">LEARN HOW ORDERS WORK</span>

            <h2>What is a trading order?</h2>

            <p>
              A trading order is an instruction sent to a broker
              or trading platform to buy or sell a financial
              asset. The order type helps determine how the
              instruction is handled in the market.
            </p>

            <p>
              Different order types involve different trade-offs.
              Some prioritize execution, while others set limits
              on the acceptable price. An order may be filled
              completely, filled partially, or not filled at all.
            </p>

            <h2>Common order types</h2>

            <div className="markets-lesson-grid">
              {orderTypes.map((order) => (
                <section
                  className="markets-lesson-card"
                  key={order.title}
                >
                  <div className="markets-lesson-card__icon">
                    {order.icon}
                  </div>

                  <h3>{order.title}</h3>
                  <p>{order.description}</p>
                  <span>{order.example}</span>
                </section>
              ))}
            </div>

            <h2>Buying versus selling</h2>

            <p>
              When you buy an asset, you generally want to
              understand the price you may pay, the costs
              involved, and why you are entering the trade.
              When you sell, consider the price you may receive,
              any applicable fees, and how the sale fits your plan.
            </p>

            <p>
              A short sale is different from selling an asset
              you already own. Short selling can involve
              additional requirements and potentially substantial
              losses, so beginners should understand the risks
              before considering it.
            </p>

            <h2>Example: choosing an order</h2>

            <div className="lesson-content__callout">
              <CircleDollarSign size={22} />
              <div>
                <h3>You want to buy a share</h3>
                <p>
                  Imagine a stock is currently quoted at a bid
                  of $49.95 and an ask of $50.00. A market buy
                  order may execute near the available ask prices,
                  but the final execution price is not guaranteed.
                  A buy limit order at $50.00 sets your maximum
                  purchase price, but it may remain unfilled if
                  sellers are not available at that price or lower.
                </p>
              </div>
            </div>

            <h2>Before you submit an order</h2>

            <ul>
              <li>
                <strong>Check the asset:</strong> Confirm the
                correct stock, fund, currency pair, or other
                instrument.
              </li>
              <li>
                <strong>Check buy or sell:</strong> Verify the
                direction and quantity.
              </li>
              <li>
                <strong>Review the order type:</strong> Understand
                whether you are using a market, limit, or stop order.
              </li>
              <li>
                <strong>Review the costs:</strong> Check commissions,
                spreads, and any other applicable fees.
              </li>
              <li>
                <strong>Confirm duration:</strong> Know when an
                unfilled order may expire.
              </li>
              <li>
                <strong>Understand the risk:</strong> Consider how
                much you could lose before placing the order.
              </li>
            </ul>

            <div className="lesson-content__callout">
              <ShieldCheck size={22} />
              <div>
                <h3>Beginner tip</h3>
                <p>
                  Practise using a paper-trading account or
                  simulator before placing orders with real money.
                  Learn how your platform handles each order type,
                  including its fees and execution rules.
                </p>
              </div>
            </div>

            <div className="lesson-content__next">
              <div>
                <span className="eyebrow">PREVIOUS LESSON</span>
                <h2>How Prices Move</h2>
                <p>
                  Review buying and selling pressure, bid and ask
                  prices, spreads, and candlesticks.
                </p>
              </div>

              <Button href="/learn/fundamentals/how-prices-move/">
                Previous Lesson <ArrowLeft size={18} />
              </Button>
            </div>
          </article>
        </Container>
      </section>
    </>
  )
}

export default OrdersTradingBasicsPage
