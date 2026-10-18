
import { Link } from 'react-router-dom'
import { TrendingUp } from 'lucide-react'
import Container from '../common/Container'

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer__main">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">
                <TrendingUp size={22} />
              </span>
              <span>
                Trading<span className="footer__brand-accent">Basics</span>
              </span>
            </Link>

            <p className="footer__description">
              Learn the fundamentals of trading, build better risk management
              habits, and develop a disciplined approach to the markets.
            </p>
          </div>

          <div className="footer__column">
            <h3>Learn</h3>
            <Link to="/learn/">Trading Fundamentals</Link>
            <Link to="/risk-management/">Risk Management</Link>
            <Link to="/learn/fundamentals/trading-psychology/"> Trading Psychology </Link>
            <Link to="/tools-strategies/">Tools & Strategies</Link>
          </div>

          <div className="footer__column">
            <h3>Explore</h3>
            <Link to="/blog/">Latest Articles</Link>
            <Link to="/about/">About Us</Link>
            <Link to="/contact/">Contact</Link>
          </div>

          <div className="footer__column">
            <h3>Legal</h3>
            <Link to="/risk-disclaimer/">Risk Disclaimer</Link>
            <Link to="/affiliate-disclosure/">Affiliate Disclosure</Link>
            <Link to="/privacy-policy/">Privacy Policy</Link>
          </div>
        </div>

        <div className="footer__disclaimer">
          <strong>Important risk notice:</strong> Trading financial markets
          involves risk and may not be suitable for everyone. Educational
          content on this website is for informational purposes only and is
          not personalized financial or investment advice. You may lose some
          or all of your invested capital.
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} TradingBasics. All rights reserved.
          </p>
          <p>Learn first. Manage risk. Trade responsibly.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
