
import SEO from '../components/seo/SEO'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact | Get in Touch"
        description="Contact TradingBasics with questions, feedback, or suggestions about our trading education resources."
        path="/contact/"
      />

      <section className="learn-page-hero">
        <Container>
          <span className="eyebrow">CONTACT TRADINGBASICS</span>

          <h1>We'd like to hear from you.</h1>

          <p>
            Have a question about our educational resources, feedback on a
            lesson, or an idea for a future topic? We welcome your feedback
            as we continue building TradingBasics.
          </p>


            <div className="learn-page-hero__note">
            Have a question or suggestion? Email us at{' '}
            <a href="mailto:info@tradingbasics.ca">
                info@tradingbasics.ca
            </a>
            </div>


          <div className="learn-page-hero__actions">
            <Button href="/learn/">
              Explore Learning Resources
            </Button>
          </div>
        </Container>
      </section>

      <section className="learn-page-paths">
        <Container>
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="What can you contact us about?"
            description="We welcome messages related to the TradingBasics learning experience."
          />

          <div className="learn-page-paths__grid">
            <article className="learn-path-card">
              <h3>Questions about lessons</h3>
              <p>
                Share questions or suggest concepts you'd like to see
                explained more clearly.
              </p>
            </article>

            <article className="learn-path-card">
              <h3>Feedback and suggestions</h3>
              <p>
                Let us know how we can make our educational content
                clearer and more useful.
              </p>
            </article>

            <article className="learn-path-card">
              <h3>Website issues</h3>
              <p>
                Report broken links, technical problems, or other issues
                you encounter while using the website.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ContactPage
