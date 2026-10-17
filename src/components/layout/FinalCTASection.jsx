
import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react'

import Container from '../common/Container'
import Button from '../common/Button'

function FinalCTASection() {
  return (
    <section className="final-cta-section">
      <Container>
        <div className="final-cta-section__panel">
          <div className="final-cta-section__content">
            <span className="eyebrow">
              YOUR LEARNING JOURNEY STARTS HERE
            </span>

            <h2>
              Understand the markets.
              <br />
              Build your confidence.
            </h2>

            <p>
              Start with the fundamentals, learn to manage risk, and
              explore trading concepts one step at a time.
            </p>

            <div className="final-cta-section__actions">
              <Button href="/learn/">
                Start Learning <ArrowRight size={18} />
              </Button>

              <Button href="/tools-strategies/" variant="outline">
                Explore Strategies <BookOpen size={18} />
              </Button>
            </div>

            <div className="final-cta-section__trust-note">
              <ShieldCheck size={18} />
              <span>
                Education first. Risk awareness always.
              </span>
            </div>
          </div>

          <div className="final-cta-section__visual" aria-hidden="true">
            <div className="final-cta-section__visual-circle">
              <BookOpen size={64} strokeWidth={1.4} />
            </div>

            <span className="final-cta-section__visual-label">
              LEARN · PRACTISE · IMPROVE
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTASection
