
import SEO from '../components/seo/SEO'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'

function AboutPage() {
  return (
    <>
      <SEO
        title="About | Learn Trading with Confidence"
        description="Discover TradingBasics, an educational resource designed to help beginners understand financial markets, trading concepts, risk management, and trading psychology."
        path="/about/"
      />

      <section className="learn-page-hero">
        <Container>
          <span className="eyebrow">ABOUT TRADINGBASICS</span>

          <h1>Understand the markets. Build your knowledge.</h1>

          <p>
            TradingBasics helps learners develop a clearer understanding of
            financial markets through approachable explanations, structured
            learning paths, and practical educational resources.
          </p>

          <div className="learn-page-hero__actions">
            <Button href="/learn/fundamentals/">
              Explore Learning Paths
            </Button>
          </div>

          <div className="learn-page-hero__note">
            Our focus is education, informed decision-making, and understanding
            risk before making trading decisions.
          </div>
        </Container>
      </section>

      <section className="learn-page-paths">
        <Container>
          <SectionHeading
            eyebrow="OUR PURPOSE"
            title="Learning before trading"
            description="Financial markets can feel complicated when you're starting out. TradingBasics organizes key concepts into learning paths that help you build your knowledge step by step."
          />

          <div className="learn-page-paths__grid">
            <article className="learn-path-card">
              <h3>Start with the basics</h3>
              <p>
                Learn how financial markets work, why prices move, and how
                different trading orders are used.
              </p>
            </article>

            <article className="learn-path-card">
              <h3>Understand risk</h3>
              <p>
                Explore position sizing, risk-to-reward ratios, and the
                importance of protecting trading capital.
              </p>
            </article>

            <article className="learn-path-card">
              <h3>Develop a process</h3>
              <p>
                Study technical analysis, trading strategies, market analysis,
                and the role of psychology in decision-making.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="learn-page-paths">
        <Container>
          <SectionHeading
            eyebrow="OUR APPROACH"
            title="Clear, structured, educational"
            description="We aim to make trading concepts easier to understand without suggesting that profits are guaranteed or that any strategy is right for everyone."
          />

          <p>
            TradingBasics is an educational resource, not a promise of
            investment results. Trading involves risk, and learners should
            consider their circumstances and seek qualified financial advice
            when appropriate.
          </p>
        </Container>
      </section>
    </>
  )
}

export default AboutPage
