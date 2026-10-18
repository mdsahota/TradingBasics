
import SEO from '../components/seo/SEO'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'

function AffiliateDisclosurePage() {
  return (
    <>
      <SEO
        title="Affiliate Disclosure"
        description="Learn how TradingBasics may earn commissions through affiliate links and how affiliate relationships relate to our educational content."
        path="/affiliate-disclosure/"
      />

      <section className="learn-page-hero">
        <Container>
          <span className="eyebrow">TRANSPARENCY & TRUST</span>

          <h1>Affiliate Disclosure</h1>

          <p>
            We believe visitors should understand how TradingBasics may
            earn revenue and how commercial relationships can relate to
            the information presented on this website.
          </p>

          <div className="learn-page-hero__note">
            Some links may be affiliate links. If you make a qualifying
            purchase or take another qualifying action through them,
            TradingBasics may earn a commission at no additional cost
            to you.
          </div>
        </Container>
      </section>

      <section className="learn-page-paths">
        <Container>
          <SectionHeading
            eyebrow="OUR DISCLOSURE"
            title="How affiliate links work"
            description="Affiliate relationships can help support the ongoing development and maintenance of educational resources."
          />

          <div className="lesson-content">
            <article className="lesson-content__article">
              <h2>What is an affiliate link?</h2>
              <p>
                An affiliate link is a link to a third-party product,
                service, or website that may allow us to earn a commission
                when a visitor completes a qualifying action. The action
                required and commission arrangement depend on the
                applicable affiliate program.
              </p>

              <h2>Does it cost you extra?</h2>
              <p>
                In many affiliate arrangements, the commission does not
                increase the price you pay. However, prices, fees, and
                terms are set by the third-party provider and should
                always be reviewed before making a purchase.
              </p>

              <h2>Our educational purpose</h2>
              <p>
                TradingBasics provides educational information about
                financial markets and trading. Affiliate relationships
                do not make any trading strategy, financial product,
                or service suitable for every person. You should
                independently evaluate any product or service before
                deciding whether to use it.
              </p>

              <h2>Third-party products and services</h2>
              <p>
                We do not control all third-party products, services,
                websites, pricing, or policies. Review the provider's
                terms, fees, risks, and disclosures before proceeding.
              </p>

              <h2>Questions about this disclosure</h2>
              <p>
                If you have questions about affiliate links or this
                disclosure, please contact us at{' '}
                <a href="mailto:info@tradingbasics.ca">
                  info@tradingbasics.ca
                </a>.
              </p>
            </article>
          </div>

          <div className="learn-page-hero__actions">
            <Button href="/learn/">
              Explore Learning Resources
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AffiliateDisclosurePage
