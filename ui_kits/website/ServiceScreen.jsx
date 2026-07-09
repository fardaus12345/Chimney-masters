// Service detail page — Chimney Sweep & Cleaning.
const { Button, Card, Badge, Tag } = window.ChimneyMastersDesignSystem_aca12a;

function ServiceScreen({ onNav }) {
  const included = [
    'Full firebox, flue, and smoke-chamber sweep',
    'Creosote removal with HEPA-filtered vacuum',
    'Floor and furniture protection — zero mess',
    'Before/after photos and written condition report',
    'Cap, crown, and flashing visual check',
  ];
  const steps = [
    ['1', 'Book', 'Call or request online. Same-day slots before noon.'],
    ['2', 'Sweep & Inspect', 'Certified tech cleans and camera-checks your flue.'],
    ['3', 'Report', 'Photo report on the spot, with honest recommendations.'],
  ];
  return (
    <main style={{ fontFamily: 'var(--font-body)' }}>
      <section style={{ background: '#fff' }}>
        <div className="cm-container cm-pad-64 cm-split-12" style={{ gap: 48, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'flex-start' }}>
            <div style={{ fontSize: 14, color: 'var(--text-muted)' }}><a onClick={() => onNav('Home')} style={{ cursor: 'pointer' }}>Home</a> / Services / <span style={{ color: 'var(--text-heading)', fontWeight: 500 }}>Chimney Sweep</span></div>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px, 5vw, 42px)', lineHeight: 1.12, color: 'var(--text-heading)' }}>Chimney Sweep &amp; Cleaning</h1>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--text-body)' }}>An annual sweep is the single best protection against chimney fires. We clean thoroughly, contain the mess, and show you exactly what we found.</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Badge tone="solid">Same-Day</Badge>
              <Badge tone="success">CSIA-Certified</Badge>
              <Tag>~90 minutes</Tag>
              <Tag>From $189</Tag>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
              {included.map(item => (
                <span key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5 }}>
                  <span aria-hidden="true" style={{ flex: 'none' }}>✅</span>{item}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 8 }}>
              <Button variant="primary" size="lg" onClick={() => onNav('Contact')}>Schedule a Sweep</Button>
              <Button variant="secondary" size="lg" icon={CMIcons.phone()}>Call Us</Button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <PhotoPlaceholder label="Photo: sweep in progress" ratio="4 / 3" style={{ backgroundImage: "url('https://picsum.photos/seed/cm-service-1/700/525')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'transparent' }} />
            <PhotoPlaceholder label="Photo: before/after flue" ratio="4 / 3" style={{ backgroundImage: "url('https://picsum.photos/seed/cm-service-2/700/525')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'transparent' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--cm-gray-50)', borderTop: '1px solid var(--border-default)' }}>
        <div className="cm-container cm-pad-72">
          <h2 style={{ margin: '0 0 32px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 30px)', color: 'var(--text-heading)', textAlign: 'center' }}>How It Works</h2>
          <div className="cm-grid-3" style={{ gap: 20 }}>
            {steps.map(([n, t, b]) => (
              <Card key={n}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-heading)' }}>{t}</div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>{b}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABand onNav={onNav} />
    </main>
  );
}

Object.assign(window, { ServiceScreen });
