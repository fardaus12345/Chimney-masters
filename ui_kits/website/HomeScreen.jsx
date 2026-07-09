// Home page — full blueprint implementation (see guidelines/homepage-blueprint.md).
// Hero video is a placeholder animated gradient (.cm-hero-video-placeholder, defined in index.html)
// standing in for the client's AI-generated cinematic video until that asset is supplied.
const { Button, Card, Badge, Tag, RatingStars, Input, Select, Radio, Checkbox } = window.ChimneyMastersDesignSystem_aca12a;

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border-default)' }}>
      <button onClick={onToggle} style={{
        width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
        padding: '20px 4px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text-heading)',
      }}>
        {q}
        <span style={{ flex: 'none', fontSize: 20, color: 'var(--accent)', transform: open ? 'rotate(45deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-standard)' }}>+</span>
      </button>
      {open && <p style={{ margin: '0 0 20px', padding: '0 4px', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>{a}</p>}
    </div>
  );
}

function HomeScreen({ onNav }) {
  const [openFaq, setOpenFaq] = React.useState(0);

  const services = [
    { icon: CMIcons.flame(24), title: 'Chimney Sweep & Cleaning', body: 'Full brush-and-vacuum cleaning with before/after photos. Creosote removed, mess contained.' },
    { icon: CMIcons.search(24), title: 'Inspections (Level 1–3)', body: 'Camera-scoped inspections with a written, photo-documented report — same day.' },
    { icon: CMIcons.wrench(24), title: 'Masonry & Crown Repair', body: 'Tuckpointing, crown rebuilds, flashing, and waterproofing done right the first time.' },
    { icon: CMIcons.home(24), title: 'Caps, Liners & Installation', body: 'Stainless caps and liners, fireplace and stove installation — fitted and code-compliant.' },
  ];
  const benefits = [
    [CMIcons.shield(28), 'CSIA-Certified Technicians', 'Every tech is certified and background-checked before they set foot in your home.'],
    [CMIcons.search(28), 'Photo-Documented Reports', 'See exactly what we found — every inspection comes with before/after photos.'],
    [CMIcons.clock(28), 'Same-Day Availability', 'Call before noon and we\u2019ll usually have a tech at your door today.'],
    [CMIcons.home(28), 'Transparent, Upfront Pricing', 'No surprise fees — you approve the price before any work starts.'],
  ];
  const reviews = [
    { name: 'Karen M.', text: 'They found a cracked flue liner our inspector missed. Fixed it the same week, spotless cleanup.' },
    { name: 'Dave R.', text: 'Called at 9am, tech was here by 1pm. Walked me through every photo. Worth every penny.' },
    { name: 'Priya S.', text: 'Third year using them for our annual sweep. On time, honest, and the price never surprises us.' },
  ];
  const beforeAfter = [
    'Concrete Crown Rebuild', 'Masonry Tuckpointing', 'Chimney Cap Replacement',
  ];
  const articles = [
    ['Fall Chimney Prep: 5 Things to Check Before Your First Fire', 'Sep 2026'],
    ['How Often Should You Really Sweep Your Chimney?', 'Aug 2026'],
    ['Gas Logs vs. Wood Stoves: Which Fits Your Home?', 'Jul 2026'],
  ];
  const faqs = [
    ['How much does a chimney sweep cost?', 'Most standard sweeps run $189–$249 depending on chimney height and creosote buildup — we always confirm price before starting work.'],
    ['How long does a service visit take?', 'A standard sweep and inspection takes about 60–90 minutes. Repairs vary — we\u2019ll give you a time estimate when we quote the job.'],
    ['Do I need to be home during the appointment?', 'Yes, for entry and to walk through the findings with your technician — most visits fit inside a single appointment window.'],
    ['How often should I have my chimney cleaned?', 'The CSIA recommends an annual inspection for every chimney, with cleaning as needed based on creosote buildup and usage.'],
    ['Are you licensed and insured?', 'Yes — fully licensed and insured, with CSIA-certified technicians on every crew.'],
  ];
  const certifications = ['CSIA Certified', 'Licensed & Insured', 'BBB Accredited', 'NFI Certified'];

  return (
    <main style={{ fontFamily: 'var(--font-body)' }}>

      {/* HERO — real stock photo placeholder standing in for the AI cinematic video */}
      <section className="cm-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="cm-hero-bg" style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1761319914911-71b059a655d8?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover', backgroundPosition: 'center', willChange: 'transform',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(2,3,2,0.85) 20%, rgba(2,3,2,0.45) 60%, rgba(2,3,2,0.2) 100%)' }} />
        <div style={{ position: 'absolute', top: 16, left: 16, fontSize: 11, fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>
          [Free stock photo — placeholder for the client's AI-generated cinematic hero video]
        </div>
        <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '24px', width: '100%' }}>
          <Reveal style={{ maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 22, alignItems: 'flex-start' }}>
            <Badge tone="solid">🔥 Same-Day Inspections</Badge>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px, 5.5vw, 52px)', lineHeight: 1.08, letterSpacing: '-0.01em', color: '#fff' }}>
              Your Chimney, <span style={{ color: 'var(--cm-orange-400)' }}>Expertly</span> Cared For
            </h1>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', maxWidth: 480 }}>
              Certified sweeps, same-day inspections, and repairs done right the first time — so your family stays warm and safe.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" icon={CMIcons.phone()}>Call (555) 012-3456</Button>
              <a href="#booking-form" style={{ textDecoration: 'none' }}>
                <Button variant="onDark" size="lg">Get a Free Quote</Button>
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <RatingStars rating={4.9} showValue valueColor="#fff" />
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>from 480+ homeowner reviews</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BADGES */}
      <section style={{ background: '#fff', overflow: 'hidden' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 0' }}>
          <div className="cm-badge-track" style={{ display: 'flex', gap: 28, width: 'max-content' }}>
            {[...certifications, ...certifications].map((c, i) => (
              <div key={c + i} style={{
                border: '1px dashed var(--cm-gray-300)', borderRadius: 'var(--radius-md)',
                padding: '12px 20px', color: 'var(--cm-gray-500)', fontFamily: 'var(--font-display)',
                fontWeight: 600, fontSize: 12, letterSpacing: '0.04em', textAlign: 'center', flex: 'none',
              }}>{c}<br /><span style={{ fontWeight: 400, fontSize: 10 }}>logo placeholder</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div className="cm-container cm-pad-80">
          <Reveal style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>🔥 What We Do</div>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px, 4vw, 34px)', color: 'var(--text-heading)' }}>Every Chimney Service, One Certified Team</h2>
          </Reveal>
          <div className="cm-grid-4" style={{ gap: 20 }}>
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Card variant="feature" hoverable icon={s.icon} title={s.title}
                  footer={<Button variant="ghost" size="sm" onClick={() => onNav('Service')}>Learn More</Button>}>
                  {s.body}
                </Card>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Button variant="secondary" onClick={() => onNav('Service')}>View All Services</Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / BENEFITS */}
      <section style={{ background: '#fff' }}>
        <div className="cm-container cm-pad-80">
          <h2 style={{ margin: '0 0 40px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px, 4vw, 34px)', color: 'var(--text-heading)', textAlign: 'center' }}>Why Homeowners Choose Us</h2>
          <div className="cm-grid-4" style={{ gap: 32 }}>
            {benefits.map(([ic, t, b], i) => (
              <Reveal key={t} delay={i * 80} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ color: 'var(--accent)' }}>{ic}</span>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text-heading)' }}>{t}</div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)' }}>{b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div className="cm-container cm-pad-80 cm-split" style={{ gap: 48, alignItems: 'center' }}>
          <Reveal className="cm-img-zoom" style={{ borderRadius: 'var(--radius-lg)' }}>
            <PhotoPlaceholder label="Photo: founder / team" ratio="4 / 3" style={{
              backgroundImage: "url('https://picsum.photos/seed/cm-team-photo/800/600')",
              backgroundSize: 'cover', backgroundPosition: 'center', color: 'transparent',
            }} />
          </Reveal>
          <Reveal delay={120} style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: 'var(--text-heading)' }}>A Family Business, Since 1998</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)' }}>
              "We started Chimney Masters because homeowners deserve a straight answer, not a scare tactic. Every tech on our crew is CSIA-certified, and every job gets photo-documented — no exceptions."
            </p>
            <Button variant="ghost" className="cm-link-underline" onClick={() => onNav('About')}>Read Our Story →</Button>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: '#fff' }}>
        <div className="cm-container cm-pad-80">
          <h2 style={{ margin: '0 0 36px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px, 4vw, 34px)', color: 'var(--text-heading)', textAlign: 'center' }}>Trusted by Your Neighbors</h2>
          <div className="cm-grid-3" style={{ gap: 20 }}>
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <Card>
                  <RatingStars rating={5} size={16} />
                  <p style={{ margin: '10px 0 0', fontSize: 15, lineHeight: 1.6 }}>"{r.text}"</p>
                  <div style={{ marginTop: 12, fontWeight: 600, fontSize: 14, color: 'var(--text-heading)' }}>{r.name}</div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COUPON */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div className="cm-container" style={{ padding: '64px 24px' }}>
          <Card variant="tint" style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 20, padding: '32px 40px', position: 'relative', overflow: 'hidden' }}>
            <span className="cm-coupon-icon" style={{
              position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)',
              color: 'var(--cm-red-600)', opacity: 0.45, pointerEvents: 'none', zIndex: 0,
            }}>{CMIcons.tag(140)}</span>
            <div style={{ flex: 1, position: 'relative' }}>
              <Badge tone="solid" style={{ marginBottom: 12 }}>New Customers</Badge>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, color: 'var(--text-heading)' }}>$50 Off Your First Sweep</div>
              <p style={{ margin: '8px 0 0', fontSize: 15, color: 'var(--text-body)' }}>Mention code <strong>SWEEP50</strong> when you call. Valid through fall booking season.</p>
            </div>
            <Button variant="primary" size="lg" icon={CMIcons.phone()} style={{ flex: 'none', marginTop: 8, position: 'relative' }}>Claim by Phone</Button>
          </Card>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section style={{ background: 'var(--cm-red-800)' }}>
        <div className="cm-container" style={{ padding: '40px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap', textAlign: 'center' }}>
          <span style={{ color: '#fff' }}>{CMIcons.phone(28)}</span>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: '#fff' }}>Smoke smell or an animal in your chimney? Skip the form.</div>
          <Button variant="dark" size="lg" style={{ background: '#fff', color: 'var(--cm-red-800)' }} icon={CMIcons.phone()}>Call Now — (555) 012-3456</Button>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking-form" style={{ background: '#fff' }}>
        <div className="cm-container cm-pad-80 cm-split-form" style={{ gap: 48, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, color: 'var(--text-heading)' }}>Get a Free Quote</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)' }}>Tell us what's going on and we'll call back within 30 minutes during business hours.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[[CMIcons.clock(20), 'Mon–Sat, 7am–7pm'], [CMIcons.mapPin(20), 'Serving the tri-county area'], [CMIcons.shield(20), 'Licensed & insured, CSIA-certified']].map(([ic, t]) => (
                <span key={t} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 15, color: 'var(--cm-charcoal-700)' }}>
                  <span style={{ color: 'var(--cm-orange-600)', display: 'inline-flex' }}>{ic}</span>{t}
                </span>
              ))}
            </div>
          </div>
          <Card style={{ padding: 'var(--space-6)' }}>
            <div className="cm-field-grid" style={{ gap: 16 }}>
              <Input label="Full Name" placeholder="Jane Homeowner" />
              <Input label="Phone" placeholder="(555) 012-3456" />
              <Select label="Service Needed" placeholder="Choose a service" style={{ gridColumn: '1 / -1' }}
                options={['Chimney Sweep & Cleaning', 'Inspection (Level 1–3)', 'Masonry & Crown Repair', 'Caps, Liners & Installation', 'Not sure — need advice']} />
              <Radio label="Property Type" direction="row" defaultValue="House" options={['House', 'Townhome', 'Other']} style={{ gridColumn: '1 / -1' }} />
              <Input label="Message" textarea placeholder="When did you last have your chimney serviced?" style={{ gridColumn: '1 / -1' }} />
              <Checkbox label="Send me seasonal maintenance reminders" defaultChecked style={{ gridColumn: '1 / -1' }} />
              <Button variant="primary" size="lg" onClick={() => onNav('Contact')} style={{ gridColumn: '1 / -1' }}>Request My Free Quote</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div className="cm-container cm-pad-72">
          <h2 style={{ margin: '0 0 40px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 30px)', color: 'var(--text-heading)', textAlign: 'center' }}>Our Process</h2>
          <div className="cm-grid-3" style={{ gap: 32 }}>
            {[['1', 'Book', 'Call or request a quote online — same-day slots before noon.'], ['2', 'Sweep & Inspect', 'A certified tech cleans and camera-checks your chimney.'], ['3', 'Report', 'You get a photo-documented report and honest recommendations.']].map(([n, t, b]) => (
              <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-heading)' }}>{t}</div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section style={{ background: 'var(--cm-charcoal-900)' }}>
        <div className="cm-container cm-pad-80">
          <h2 style={{ margin: '0 0 36px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px, 4vw, 32px)', color: '#fff', textAlign: 'center' }}>See the Difference</h2>
          <div className="cm-grid-3" style={{ gap: 20 }}>
            {beforeAfter.map((label, i) => (
              <Reveal key={label} delay={i * 100} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                  <div className="cm-img-zoom" style={{ borderRadius: 'var(--radius-lg)' }}>
                    <PhotoPlaceholder label="Before" ratio="1 / 1" style={{
                      backgroundImage: `url('https://picsum.photos/seed/cm-before-${i}/400/400')`,
                      backgroundSize: 'cover', backgroundPosition: 'center', color: 'transparent',
                      border: '1px solid var(--cm-charcoal-700)',
                    }} />
                  </div>
                  <div className="cm-img-zoom" style={{ borderRadius: 'var(--radius-lg)' }}>
                    <PhotoPlaceholder label="After" ratio="1 / 1" style={{
                      backgroundImage: `url('https://picsum.photos/seed/cm-after-${i}/400/400')`,
                      backgroundSize: 'cover', backgroundPosition: 'center', color: 'transparent',
                      border: '1px solid var(--cm-charcoal-700)',
                    }} />
                  </div>
                </div>
                <Tag style={{ background: 'transparent', borderColor: 'var(--cm-gray-600)', color: 'var(--cm-gray-300)' }}>{label}</Tag>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff' }}>
        <div className="cm-pad-80" style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 24px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: 'var(--text-heading)', textAlign: 'center' }}>Common Questions</h2>
          {faqs.map(([q, a], i) => (
            <FAQItem key={q} q={q} a={a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
          ))}
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)' }}>
        <div className="cm-container cm-pad-80">
          <h2 style={{ margin: '0 0 36px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px, 4vw, 32px)', color: 'var(--text-heading)', textAlign: 'center' }}>From the Blog</h2>
          <div className="cm-grid-3" style={{ gap: 20 }}>
            {articles.map(([title, date], i) => (
              <Reveal key={title} delay={i * 100}>
                <Card hoverable>
                  <div className="cm-img-zoom" style={{ borderRadius: 'var(--radius-lg)' }}>
                    <PhotoPlaceholder label="Article photo" ratio="16 / 10" style={{
                      backgroundImage: `url('https://picsum.photos/seed/cm-article-${i}/700/440')`,
                      backgroundSize: 'cover', backgroundPosition: 'center', color: 'transparent',
                    }} />
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>{date}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text-heading)' }}>{title}</div>
                  <Button variant="ghost" size="sm">Read More</Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand onNav={onNav} />
    </main>
  );
}

Object.assign(window, { HomeScreen });
