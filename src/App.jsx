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
import RiskManagementPage from './pages/RiskManagementPage'
import TechnicalAnalysisPage from './pages/TechnicalAnalysisPage'
import TradingStrategiesPage from './pages/TradingStrategiesPage'
import MarketAnalysisPage from './pages/MarketAnalysisPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import RiskDisclaimerPage from './pages/RiskDisclaimerPage'
import AffiliateDisclosurePage from './pages/AffiliateDisclosurePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import BlogPage from './pages/BlogPage'
import ScrollToTop from './components/common/ScrollToTop'
import TradingForBeginners from './pages/TradingForBeginners'
import WhyRiskManagementMatters from './pages/WhyRiskManagementMatters'
import YouDontNeedToBeRight from './pages/YouDontNeedToBeRight'
import LadderTrading from './pages/ladder-trading'
import HowToBecomeABetterTrader from './pages/how-to-become-a-better-trader'
import GlobePreviewPage from './pages/GlobePreviewPage'


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
        <>
      <ScrollToTop />
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
        <Route path="/risk-management/*"   element={<RiskManagementPage />} />
        <Route path="/tools-strategies/*" element={<TechnicalAnalysisPage />} />
        <Route path="/trading-strategies/*" element={<TradingStrategiesPage />} />
        <Route path="/market-analysis/*"   element={<MarketAnalysisPage />} />
        <Route path="/risk-disclaimer/*" element={<RiskDisclaimerPage />} /> 
        <Route path="/blog/why-risk-management-matters/" element={<WhyRiskManagementMatters />} />
        <Route path="/blog/trading-for-beginners/" element={<TradingForBeginners />} />
        <Route path="/blog/you-dont-need-to-be-right/" element={<YouDontNeedToBeRight />} />
        <Route path="/blog/ladder-trading/" element={<LadderTrading />} />
        <Route path="/blog/how-to-become-a-better-trader/" element={<HowToBecomeABetterTrader />} />
        <Route path="/blog/*" element={<BlogPage />} />
        <Route path="/about/*" element={<AboutPage />} />
        <Route path="/contact/*" element={<ContactPage />} />
        <Route path="/affiliate-disclosure/*" element={<AffiliateDisclosurePage />} />
        <Route path="/privacy-policy/*" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/globe-preview" element={<GlobePreviewPage />} />

      </Route>
    </Routes>
    </>
  )
}

export default App
