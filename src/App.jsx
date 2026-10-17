import SEO from './components/seo/SEO'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import HeroSection from './components/layout/HeroSection'
import LearningCategories from './components/layout/LearningCategories'
import RiskManagementSection from './components/layout/RiskManagementSection'
import TradingPsychologySection from './components/layout/TradingPsychologySection'
import ToolsStrategiesSection from './components/layout/ToolsStrategiesSection'
import LatestArticlesSection from './components/layout/LatestArticlesSection'
import WhyTradingBasicsSection from './components/layout/WhyTradingBasicsSection'
import FinalCTASection from './components/layout/FinalCTASection'
import LearnPage from './pages/LearnPage'
import FundamentalsPage from './pages/FundamentalsPage'
import WhatIsTradingPage from './pages/WhatIsTradingPage'
import UnderstandingMarketsPage from './pages/UnderstandingMarketsPage'
import HowPricesMovePage from './pages/HowPricesMovePage'
import OrdersTradingBasicsPage from './pages/OrdersTradingBasicsPage'
import RiskBeforeRewardPage from './pages/RiskBeforeRewardPage'
import TradingPsychologyPage from './pages/TradingPsychologyPage'

function HomePage() {
  return (
    <>
      <SEO
        title="Learn Trading, Strategies & Risk Management"
        description="Build your trading knowledge with beginner-friendly lessons on financial markets, trading strategies, risk management, and trading psychology."
        path="/"
      />    
      <HeroSection />
      <LearningCategories />
      <RiskManagementSection />
      <TradingPsychologySection />
      <ToolsStrategiesSection />
      <LatestArticlesSection />
      <WhyTradingBasicsSection />
      <FinalCTASection />
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
        <Route path="/learn/*" element={<LearnPage />} />
        <Route path="/learn/fundamentals/" element={<FundamentalsPage />} />
        <Route path="/learn/fundamentals/what-is-trading/" element={<WhatIsTradingPage />} />
        <Route path="/learn/fundamentals/markets/" element={<UnderstandingMarketsPage />} />
        <Route path="/learn/fundamentals/how-prices-move/" element={<HowPricesMovePage />} />
        <Route path="/learn/fundamentals/orders-trading-basics/" element={<OrdersTradingBasicsPage />} />
        <Route path="/learn/fundamentals/risk-before-reward/" element={<RiskBeforeRewardPage />} />
        <Route path="/learn/fundamentals/trading-psychology/" element={<TradingPsychologyPage />} />
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
