// Contact / quote request page.
const { Button, Card, Input, Select, Radio, Checkbox, Dialog } = window.ChimneyMastersDesignSystem_aca12a;

function ContactScreen({ onNav }) {
  const [sent, setSent] = React.useState(false);
  return (
    <main style={{ fontFamily: 'var(--font-body)', background: 'var(--surface-subtle)' }}>
      <section>
        <div className="cm-container cm-pad-64 cm-split-form" style={{ gap: 48, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px, 5vw, 42px)', lineHeight: 1.12, color: 'var(--text-heading)' }}>Get a Free Quote</h1>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--text-body)' }}>Tell us what's going on and we'll call back within 30 minutes during business hours — or call us directly.</p>
            <Button variant="dark" size="lg" icon={CMIcons.phone()} style={{ alignSelf: 'flex-start' }}>Call (555) 012-3456</Button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
              {[[CMIcons.clock(20), 'Mon–Sat, 7am–7pm'], [CMIcons.mapPin(20), 'Serving the tri-county area'], [CMIcons.shield(20), 'Licensed & insured, CSIA-certified']].map(([ic, t]) => (
                <span key={t} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 15, color: 'var(--cm-charcoal-700)' }}>
                  <span style={{ color: 'var(--accent)', display: 'inline-flex' }}>{ic}</span>{t}
                </span>
              ))}
            </div>
          </div>
          <Card style={{ padding: 'var(--space-6)' }}>
            <div className="cm-field-grid" style={{ gap: 16 }}>
              <Input label="Full Name" placeholder="Jane Homeowner" />
              <Input label="Phone" placeholder="(555) 012-3456" />
              <Input label="Email" placeholder="jane@email.com" style={{ gridColumn: '1 / -1' }} />
              <Select label="Service Needed" placeholder="Choose a service" style={{ gridColumn: '1 / -1' }}
                options={['Chimney Sweep & Cleaning', 'Inspection (Level 1–3)', 'Masonry & Crown Repair', 'Caps, Liners & Installation', 'Not sure — need advice']} />
              <div style={{ gridColumn: '1 / -1' }}>
                <Radio label="Property Type" direction="row" defaultValue="House" options={['House', 'Townhome', 'Other']} />
              </div>
              <Input label="Message" textarea placeholder="When did you last have your chimney serviced? Any smoke, odor, or leaks?" style={{ gridColumn: '1 / -1' }} />
              <div style={{ gridColumn: '1 / -1' }}>
                <Checkbox label="Send me seasonal maintenance reminders" defaultChecked />
              </div>
              <Button variant="primary" size="lg" onClick={() => setSent(true)} style={{ gridColumn: '1 / -1' }}>Request My Free Quote</Button>
            </div>
          </Card>
        </div>
      </section>
      <Dialog open={sent} onClose={() => setSent(false)} title="Request Received"
        actions={<Button onClick={() => setSent(false)}>Done</Button>}>
        Thanks — we'll call you within 30 minutes during business hours to confirm your appointment window.
      </Dialog>
      <CTABand onNav={onNav} />
    </main>
  );
}

Object.assign(window, { ContactScreen });
