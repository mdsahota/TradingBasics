
import SEO from '../components/seo/SEO'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'

function RiskDisclaimerPage() {
  return (
    <>
      <SEO
        title="Risk Disclaimer"
        description="Read the TradingBasics risk disclaimer covering trading risks, potential losses, educational content, and independent financial decisions."
        path="/risk-disclaimer/"
      />

      <section className="learn-page-hero">
        <Container>
          <span className="eyebrow">IMPORTANT INFORMATION</span>

          <h1>Risk Disclaimer</h1>

          <p>
            Understanding risk is an essential part of learning about
            financial markets. Before making trading or investment
            decisions, please read the following information carefully.
          </p>

          <div className="learn-page-hero__note">
            Trading involves risk, including the possible loss of some
            or all of your invested capital.
          </div>
        </Container>
      </section>

      <section className="learn-page-paths">
        <Container>
          <SectionHeading
            eyebrow="PLEASE READ CAREFULLY"
            title="Educational information only"
            description="TradingBasics provides educational information about financial markets and trading concepts."
          />

          <div className="lesson-content">
            <article className="lesson-content__article">
              <h2>No financial or investment advice</h2>
              <p>
                Content on TradingBasics is provided for general educational
                and informational purposes. It is not personalized financial,
                investment, tax, or legal advice, and it should not be treated
                as a recommendation to buy, sell, or hold any financial
                instrument.
              </p>

              <h2>Trading involves substantial risk</h2>
              <p>
                Trading stocks, foreign exchange, cryptocurrencies, derivatives,
                and other financial instruments can result in losses.
                Leverage can increase both potential gains and potential
                losses. You may lose some or all of the money you commit to
                trading.
              </p>

              <h2>No guaranteed results</h2>
              <p>
                Examples, strategies, charts, and explanations are intended
                to support learning. They do not guarantee profitable
                outcomes. Past performance does not necessarily indicate
                future results, and market conditions can change.
              </p>

              <h2>Independent decisions</h2>
              <p>
                You are responsible for your own financial decisions.
                Consider your financial circumstances, objectives, experience,
                and ability to withstand losses before trading. Consult a
                qualified financial professional if you need advice tailored
                to your situation.
              </p>

              <h2>Accuracy and completeness</h2>
              <p>
                We aim to provide useful educational content, but we do not
                guarantee that all information is complete, accurate, or
                current at all times. Market information and trading rules
                may change. Verify important information using appropriate
                and reliable sources before acting on it.
              </p>

              <h2>Third-party services and links</h2>
              <p>
                TradingBasics may reference third-party websites, tools,
                products, or services. We do not control all third-party
                content and are not responsible for its accuracy, availability,
                or practices. Review the applicable terms and disclosures
                before using external services.
              </p>

              <h2>Use at your own discretion</h2>
              <p>
                By using TradingBasics, you acknowledge that you are
                responsible for how you interpret and use its educational
                content. Nothing on this website removes the financial risks
                associated with trading.
              </p>
            </article>
          </div>

          <div className="learn-page-hero__actions">
            <Button href="/learn/">
              Return to Learning Resources
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default RiskDisclaimerPage
