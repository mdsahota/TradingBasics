
import MarketGlobe from '../components/visuals/MarketGlobe'
import Container from '../components/common/Container'
import '../styles/design-system.css'

export default function MarketGlobePreviewPage() {
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
              marginBottom: 12,
            }}
          >
            TRADINGBASICS · VISUAL LAB
          </p>

          <h1
            style={{
              fontSize: 'clamp(30px, 5vw, 48px)',
              marginBottom: 16,
            }}
          >
            Market Globe Preview
          </h1>

          <p
            style={{
              color: '#B8C3D1',
              maxWidth: 680,
              lineHeight: 1.7,
            }}
          >
            A rotating 3D globe featuring a market-themed surface,
            teal atmospheric glow, orbital rings, and gold accents.
            This isolated preview lets us test the visual before
            integrating it into the TradingBasics website.
          </p>
        </div>

        <div
          style={{
            border: '1px solid rgba(0, 184, 169, 0.25)',
            borderRadius: 12,
            overflow: 'hidden',
            background: '#101828',
            boxShadow: '0 24px 70px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: 'min(65vh, 620px)',
              minHeight: 360,
            }}
          >
            <MarketGlobe />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            marginTop: 20,
          }}
        >
          {[
            { color: '#00B8A9', label: 'Teal atmosphere' },
            { color: '#3B82F6', label: 'Market blue' },
            { color: '#F4B740', label: 'Gold accents' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#B8C3D1',
                fontSize: 13,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  background: item.color,
                  display: 'inline-block',
                }}
              />
              {item.label}
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 24,
            color: '#94A3B8',
            fontSize: 13,
          }}
        >
          Prototype only · The existing Earth globe and its preview
          page remain unchanged.
        </p>
      </Container>
    </main>
  )
}
