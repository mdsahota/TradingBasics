
import GlobeAnimation from '../components/visuals/GlobeAnimation'
import Container from '../components/common/Container'
import '../styles/design-system.css'

export default function GlobePreviewPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#101828',
        color: '#F5F7FA',
        padding: '48px 0',
      }}
    >
      <Container>
        <div style={{ marginBottom: 28 }}>
          <p
            style={{
              color: '#00B8A9',
              letterSpacing: '0.14em',
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            TRADINGBASICS · VISUAL LAB
          </p>

          <h1 style={{ fontSize: 'clamp(30px, 5vw, 48px)' }}>
            Calm Markets — Globe Preview
          </h1>

          <p style={{ color: '#B8C3D1', maxWidth: 680 }}>
            A slow-moving 3D globe experiment for the TradingBasics homepage.
            We're testing the Earth texture, lighting, atmosphere, and motion
            before integrating it into the main site.
          </p>
        </div>

        <div
          style={{
            border: '1px solid rgba(0, 184, 169, 0.25)',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 24px 70px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div style={{ height: 'min(65vh, 620px)', minHeight: 360 }}>
            <GlobeAnimation />
          </div>
        </div>

        <p
          style={{
            marginTop: 18,
            color: '#94A3B8',
            fontSize: 13,
          }}
        >
          Prototype preview · Not yet integrated into the homepage
        </p>
      </Container>
    </main>
  )
}
