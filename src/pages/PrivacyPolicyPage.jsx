
import SEO from '../components/seo/SEO'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'

function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the TradingBasics Privacy Policy to understand how personal information, cookies, analytics, and third-party services may be handled."
        path="/privacy-policy/"
      />

      <section className="learn-page-hero">
        <Container>
          <span className="eyebrow">PRIVACY & TRANSPARENCY</span>

          <h1>Privacy Policy</h1>

          <p>
            Your privacy matters. This policy explains how TradingBasics
            may collect, use, and protect information when you visit
            our website.
          </p>

          <div className="learn-page-hero__note">
            Please review this policy before using the website. We will
            update it as our features and services evolve.
          </div>
        </Container>
      </section>

      <section className="learn-page-paths">
        <Container>
          <SectionHeading
            eyebrow="YOUR INFORMATION"
            title="How information may be handled"
            description="The information processed depends on how you use the website and which features or third-party services are enabled."
          />

          <div className="lesson-content">
            <article className="lesson-content__article">
              <h2>1. Information you provide</h2>
              <p>
                If you contact us by email, we may receive your email
                address, the contents of your message, and any other
                information you choose to include. We use this information
                to respond to your inquiry and address your feedback.
              </p>

              <h2>2. Website usage and analytics</h2>
              <p>
                We may use analytics tools to understand how visitors
                interact with TradingBasics, such as which pages are
                visited and how the website is used. These tools may
                process technical and usage information, subject to
                their configuration and applicable settings.
              </p>

              <h2>3. Cookies and similar technologies</h2>
              <p>
                The website or third-party services may use cookies or
                similar technologies for functionality, analytics, or
                other purposes. The technologies used depend on the
                services enabled. You can review your browser settings
                to manage cookies, although disabling them may affect
                some website features.
              </p>

              <h2>4. How information may be used</h2>
              <p>
                Information may be used to operate and maintain the
                website, respond to inquiries, understand website
                performance, improve educational content, protect the
                website, and meet applicable legal obligations.
              </p>

              <h2>5. Third-party services and links</h2>
              <p>
                TradingBasics may link to third-party websites or use
                external services, such as hosting, analytics, or
                affiliate platforms. Those services may handle
                information under their own privacy policies and terms.
                We encourage you to review those policies before
                providing information to third parties.
              </p>

              <h2>6. Affiliate links</h2>
              <p>
                Some links may be affiliate links. Third-party affiliate
                programs may use cookies or tracking technologies to
                attribute referrals or qualifying actions. See our{' '}
                <a href="/affiliate-disclosure/">
                  Affiliate Disclosure
                </a>{' '}
                for more information.
              </p>

              <h2>7. Data retention and security</h2>
              <p>
                We take reasonable steps appropriate to the services
                and information involved to protect information against
                unauthorized access, loss, or misuse. No method of
                electronic storage or transmission is completely secure.
                Information is retained only as needed for relevant
                purposes and applicable obligations.
              </p>

              <h2>8. Your privacy choices and rights</h2>
              <p>
                Depending on your location and applicable law, you may
                have rights to access, correct, delete, or otherwise
                manage personal information. You can contact us with
                privacy questions or requests, subject to applicable
                legal requirements.
              </p>

              <h2>9. Children's privacy</h2>
              <p>
                TradingBasics is intended as a general educational
                resource and is not specifically directed at children.
                Please contact us if you believe a child has provided
                personal information through the website.
              </p>

              <h2>10. Changes to this policy</h2>
              <p>
                We may revise this policy as the website, its features,
                or applicable requirements change. Updates will be
                published on this page with a revised effective date
                where appropriate.
              </p>

              <h2>11. Contact us</h2>
              <p>
                For privacy-related questions or requests, contact us at{' '}
                <a href="mailto:info@tradingbasics.ca">
                  info@tradingbasics.ca
                </a>.
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

export default PrivacyPolicyPage
