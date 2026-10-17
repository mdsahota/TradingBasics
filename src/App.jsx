
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import HeroSection from './components/layout/HeroSection'
import LearningCategories from './components/layout/LearningCategories'
import RiskManagementSection from './components/layout/RiskManagementSection'

function HomePage() {
  return (
    <>
      <HeroSection />
      <LearningCategories />
      <RiskManagementSection />
    </>
  )
}

function PlaceholderPage({ title }) {
  return (
    <section className="container" style={{ paddingBlock: '80px' }}>
      <h1>{title}</h1>
      <p style={{ marginTop: '16px' }}>
        This page is being prepared. Explore the homepage while we build
        the TradingBasics learning resources.
      </p>
    </section>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/learn/*"
          element={<PlaceholderPage title="Learn Trading" />}
        />
        <Route
          path="/risk-management/*"
          element={<PlaceholderPage title="Risk Management" />}
        />
        <Route
          path="/trading-psychology/*"
          element={<PlaceholderPage title="Trading Psychology" />}
        />
        <Route
          path="/tools-strategies/*"
          element={<PlaceholderPage title="Tools & Strategies" />}
        />
        <Route
          path="/blog/*"
          element={<PlaceholderPage title="TradingBasics Blog" />}
        />
        <Route
          path="/about/*"
          element={<PlaceholderPage title="About TradingBasics" />}
        />
        <Route
          path="/contact/*"
          element={<PlaceholderPage title="Contact Us" />}
        />
        <Route
          path="/affiliate-disclosure/*"
          element={<PlaceholderPage title="Affiliate Disclosure" />}
        />
        <Route
          path="/risk-disclaimer/*"
          element={<PlaceholderPage title="Risk Disclaimer" />}
        />
        <Route
          path="/privacy-policy/*"
          element={<PlaceholderPage title="Privacy Policy" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
