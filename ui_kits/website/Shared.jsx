// Shared chrome for the Chimney Masters website kit.
const DS = window.ChimneyMastersDesignSystem_aca12a;
const { Button } = DS;

// Scroll-reveal wrapper — fades/slides content up once as it enters the viewport (premium, restrained).
function Reveal({ children, delay = 0, style, as: Tag = 'div' }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={visible ? 'cm-reveal' : ''} style={{ opacity: visible ? undefined : 0, animationDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
}

const CMIcons = {
  phone: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  flame: (s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
  shield: (s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>,
  wrench: (s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  search: (s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  home: (s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  clock: (s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  mapPin: (s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  check: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>,
  tag: (s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.29-6.29a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>,
  menu: (s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>,
  close: (s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>,
};

function PhotoPlaceholder({ label, ratio = '16 / 10', style }) {
  return (
    <div style={{
      aspectRatio: ratio, background: 'var(--cm-gray-200)', borderRadius: 'var(--radius-lg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--cm-gray-500)', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
      border: '1px dashed var(--cm-gray-300)', ...style,
    }}>{label}</div>
  );
}

function SiteHeader({ page, onNav }) {
  const links = ['Home', 'Services', 'About', 'Coupons', 'Contact'];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const go = l => { onNav(l === 'Services' ? 'Service' : l); setMenuOpen(false); };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: '#fff', borderBottom: '1px solid var(--border-default)' }}>
      <div className="cm-container" style={{ padding: '12px 24px', minHeight: 76, boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'nowrap' }}>
        <a onClick={() => go('Home')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none', flex: 'none' }}>
          <img src="../../assets/chimney-masters-logo.png" alt="Chimney Masters" style={{ height: 56 }} />
        </a>
        <nav className="cm-nav-desktop" style={{ display: 'flex', gap: 4, marginLeft: 'auto', flexWrap: 'wrap' }}>
          {links.map(l => {
            const on = (l === 'Services' && page === 'Service') || l === page;
            return (
              <a key={l} onClick={() => go(l)} style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, cursor: 'pointer', textDecoration: 'none',
                color: on ? 'var(--accent)' : 'var(--cm-charcoal-700)', padding: '8px 12px', borderRadius: 6,
              }}>{l}</a>
            );
          })}
        </nav>
        <button className="cm-nav-toggle" style={{ marginLeft: 'auto' }} aria-label="Toggle menu" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? CMIcons.close(24) : CMIcons.menu(24)}
        </button>
        <Button variant="primary" pill icon={CMIcons.phone()} onClick={() => go('Contact')} style={{ flex: 'none' }}>
          <span className="cm-header-cta-label">(555) 012-3456</span>
        </Button>
      </div>
      {menuOpen && (
        <nav style={{ borderTop: '1px solid var(--border-default)', background: '#fff', display: 'flex', flexDirection: 'column', padding: '8px 24px 16px' }}>
          {links.map(l => {
            const on = (l === 'Services' && page === 'Service') || l === page;
            return (
              <a key={l} onClick={() => go(l)} style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, cursor: 'pointer', textDecoration: 'none',
                color: on ? 'var(--accent)' : 'var(--cm-charcoal-700)', padding: '12px 4px', borderBottom: '1px solid var(--border-default)',
              }}>{l}</a>
            );
          })}
        </nav>
      )}
    </header>
  );
}

function TrustBar() {
  const items = [
    [CMIcons.shield(20), 'Licensed & Insured'],
    [CMIcons.flame(20), 'CSIA-Certified Sweeps'],
    [CMIcons.clock(20), 'Same-Day Service'],
    [CMIcons.home(20), 'Family-Owned Since 1998'],
  ];
  return (
    <div style={{ background: 'var(--surface-subtle)', borderBottom: '1px solid var(--border-default)', overflow: 'hidden' }}>
      <div className="cm-container cm-trustbar-scroll" style={{ padding: '14px 24px' }}>
        <div className="cm-trustbar-track" style={{ display: 'flex', gap: 40, justifyContent: 'center', width: 'max-content' }}>
          {[...items, ...items].map(([ic, label], i) => (
            <span key={label + i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, color: 'var(--cm-charcoal-700)', flex: 'none', whiteSpace: 'nowrap' }}>
              <span style={{ color: 'var(--cm-orange-600)', display: 'inline-flex' }}>{ic}</span>{label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTABand({ onNav }) {
  return (
    <section style={{ background: 'var(--cm-charcoal-900)' }}>
      <div className="cm-container" style={{ padding: '64px 24px', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--cm-red-600)', marginBottom: 10 }}>Same-Day Service</div>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: '#fff' }}>Don't Wait on a Fire Hazard.</h2>
          <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--cm-gray-400)' }}>Call before noon and we'll have a certified tech at your door today.</p>
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" icon={CMIcons.phone()}>Call (555) 012-3456</Button>
          <Button variant="onDark" size="lg" onClick={() => onNav('Contact')}>Get a Free Quote</Button>
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ onNav }) {
  const col = { display: 'flex', flexDirection: 'column', gap: 10 };
  const link = { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--cm-gray-400)', cursor: 'pointer', textDecoration: 'none' };
  const head = { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 };
  return (
    <footer style={{ background: 'var(--cm-charcoal-900)' }}>
      <div className="cm-container cm-footer-grid" style={{ padding: '56px 24px 32px', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <img src="../../assets/chimney-masters-logo.png" alt="Chimney Masters" style={{ height: 72, alignSelf: 'flex-start', background: '#fff', borderRadius: 'var(--radius-md)', padding: '8px 12px' }} />
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--cm-gray-400)', maxWidth: 320 }}>Premium chimney &amp; fireplace care. Licensed, insured, and family-owned since 1998.</p>
        </div>
        <div style={col}><span style={head}>Services</span>
          {['Chimney Sweep', 'Inspections', 'Masonry Repair', 'Caps & Liners', 'Installation'].map(s => <a key={s} style={link} onClick={() => onNav('Service')}>{s}</a>)}
        </div>
        <div style={col}><span style={head}>Company</span>
          {['About', 'Coupons', 'Contact'].map(s => <a key={s} style={link} onClick={() => onNav(s)}>{s}</a>)}
        </div>
        <div style={col}><span style={head}>Contact</span>
          <span style={{ ...link, cursor: 'default' }}>(555) 012-3456</span>
          <span style={{ ...link, cursor: 'default' }}>service@chimneymasters.com</span>
          <span style={{ ...link, cursor: 'default' }}>Mon–Sat, 7am–7pm</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--cm-charcoal-700)' }}>
      <div className="cm-container" style={{ padding: '16px 24px', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--cm-gray-500)' }}>© 2026 Chimney Masters. Licensed &amp; insured.</div>
      </div>
    </footer>
  );
}

Object.assign(window, { CMIcons, PhotoPlaceholder, SiteHeader, TrustBar, CTABand, SiteFooter, Reveal });
