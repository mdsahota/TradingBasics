
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, TrendingUp } from 'lucide-react'
import Container from '../common/Container'
import Button from '../common/Button'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Learn', path: '/learn/' },
  { label: 'Risk Management', path: '/risk-management/' },
  { label: 'Trading Psychology', path: '/trading-psychology/' },
  { label: 'Tools & Strategies', path: '/tools-strategies/' },
  { label: 'Blog', path: '/blog/' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <Container>
        <nav className="navbar" aria-label="Main navigation">
          <Link
            to="/"
            className="navbar__brand"
            aria-label="TradingBasics home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="navbar__logo">
              <TrendingUp size={23} strokeWidth={2.5} />
            </span>
            <span>Trading<span className="navbar__brand-accent">Basics</span></span>
          </Link>

          <button
            className="navbar__toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
            <div className="navbar__links">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="navbar__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Button href="/learn/" className="navbar__cta">
              Start Learning
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
