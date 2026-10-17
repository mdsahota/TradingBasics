
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, BookOpen, TrendingUp } from 'lucide-react'
import Container from '../common/Container'
import Eyebrow from '../common/Eyebrow'
import Button from '../common/Button'

function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <div className="hero-section__grid">
          <div className="hero-section__content">
            <Eyebrow>BUILD KNOWLEDGE. MANAGE RISK.</Eyebrow>

            <h1>
              Learn to Trade With
              <span className="hero-section__highlight"> Confidence.</span>
            </h1>

            <p className="hero-section__description">
              Understand the markets, develop disciplined trading habits,
              and learn how to manage risk with practical, beginner-friendly
              education.
            </p>

            <div className="hero-section__actions">
              <Button href="/learn/">
                Start Learning <ArrowRight size={18} />
              </Button>

              <Button href="/risk-management/" variant="outline">
                Learn Risk Management
              </Button>
            </div>

            <div className="hero-section__trust">
              <div className="hero-section__trust-item">
                <BookOpen size={19} />
                <span>Practical education</span>
              </div>

              <div className="hero-section__trust-item">
                <ShieldCheck size={19} />
                <span>Risk-first approach</span>
              </div>
            </div>
          </div>

          <div className="hero-section__visual" aria-label="Trading education highlights">
            <div className="hero-panel">
              <div className="hero-panel__top">
                <div>
                  <span className="hero-panel__label">YOUR LEARNING JOURNEY</span>
                  <h2>Build a stronger foundation</h2>
                </div>
                <span className="hero-panel__icon">
                  <TrendingUp size={23} />
                </span>
              </div>

              <div className="hero-panel__steps">
                <Link to="/learn/" className="hero-panel__step">
                  <span className="hero-panel__step-number">01</span>
                  <span className="hero-panel__step-copy">
                    <strong>Learn the basics</strong>
                    <small>Understand how markets work</small>
                  </span>
                  <ArrowRight size={18} />
                </Link>

                <Link to="/risk-management/" className="hero-panel__step">
                  <span className="hero-panel__step-number">02</span>
                  <span className="hero-panel__step-copy">
                    <strong>Manage your risk</strong>
                    <small>Protect capital through planning</small>
                  </span>
                  <ArrowRight size={18} />
                </Link>

                <Link to="/trading-psychology/" className="hero-panel__step">
                  <span className="hero-panel__step-number">03</span>
                  <span className="hero-panel__step-copy">
                    <strong>Build discipline</strong>
                    <small>Understand trading psychology</small>
                  </span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="hero-panel__note">
                Education first. Responsible decisions always.
              </div>
            </div>

            <div className="hero-section__decoration hero-section__decoration--one" />
            <div className="hero-section__decoration hero-section__decoration--two" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
