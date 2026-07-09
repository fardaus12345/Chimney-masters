# Chimney Masters — Information Architecture

21 pages. Hub-and-spoke: two service hubs (Chimney / Fireplace) under one Services hub, with 12 service spokes. Conversion pages (Contact, Coupons) reachable from every page via header + CTA bands.

## Sitemap

```
Home
├── About
├── Services (hub)
│   ├── Chimney Services (sub-hub)
│   │   ├── Chimney Cleaning
│   │   ├── Chimney Repairs (sub-hub-lite)
│   │   │   ├── Chimney Liner Repairs
│   │   │   ├── Firebox Repair
│   │   │   ├── Concrete Crown Repair
│   │   │   └── Masonry Work
│   │   ├── Chimney Inspections
│   │   ├── Animal Removal
│   │   ├── Chimney Cap Replacement
│   │   └── Damper Services
│   └── Fireplace Services (sub-hub)
│       ├── Gas Log Installation
│       └── Wood Stove Installation
├── Coupons
├── Contact
├── Privacy Policy   (footer only)
└── Terms of Service (footer only)
```

Note: Liner/Firebox/Crown/Masonry are listed both on Chimney Services and grouped under Chimney Repairs (repairs page links down to the four specific repair pages). URL structure: `/services/chimney/cleaning/`, `/services/chimney/repairs/liner/`, `/services/fireplace/gas-logs/`, etc.

---

## Page-by-page

### 1. Home
- **Purpose:** Brand front door; route the two visitor types (urgent vs. planned) in one screen.
- **User goal:** "Can these people fix my problem, and can I trust them?" — find the right service or the phone number fast.
- **Business goal:** Maximum call volume; establish premium positioning.
- **CTA goal:** Primary = Call. Secondary = Get a Free Quote. Tertiary = browse Services.
- **SEO intent:** "chimney sweep [city]", "chimney company near me" — broadest local head terms. LocalBusiness schema.
- **Why it exists:** Every campaign, GBP profile, and brand search lands here; it must convert both emergency and research traffic.

### 2. About
- **Purpose:** Humanize the company — family-owned story, certifications, team, values.
- **User goal:** "Who is coming into my home?" Verify legitimacy before booking.
- **Business goal:** Convert researchers who need trust before price; support premium pricing.
- **CTA goal:** Soft — "Meet us in person: Schedule an Inspection."
- **SEO intent:** Brand queries ("chimney masters reviews", "about chimney masters"); E-E-A-T signals.
- **Why it exists:** Home-service buyers buy the people, not the service. Second-most-visited page on service sites.

### 3. Services (hub)
- **Purpose:** One scannable directory of everything offered, split Chimney vs. Fireplace.
- **User goal:** "Do they do the thing I need?" — orient and self-select in seconds.
- **Business goal:** Distribute traffic to high-converting service pages; capture "chimney services" head term.
- **CTA goal:** Card click-throughs; fallback "Not sure? Call us" strip.
- **SEO intent:** "chimney services [city]" — category head term; internal-link authority distributor.
- **Why it exists:** With 12 services, a flat nav menu overwhelms; a hub gives crawlers and users one canonical directory.

### 4. Chimney Services (sub-hub)
- **Purpose:** Directory of all 9 chimney offerings with symptom-led entry points ("Water in the firebox? → Crown Repair").
- **User goal:** Match a *symptom* to a *service* — most users know the problem, not the fix.
- **Business goal:** Rank for "chimney repair/company [city]"; guide misdiagnosed visitors to the right (often bigger) job.
- **CTA goal:** Route to spokes; "Not sure what's wrong? Book an inspection" as the universal fallback.
- **SEO intent:** Mid-head terms: "chimney repair near me", "chimney company".
- **Why it exists:** The semantic bridge between "chimney" head terms and long-tail spokes; concentrates internal links.

### 5. Fireplace Services (sub-hub)
- **Purpose:** Directory for the install/upgrade side of the business (gas logs, wood stoves).
- **User goal:** Explore upgrade options and fuel types; this is *want* traffic, not *problem* traffic.
- **Business goal:** Sell high-ticket installations; seasonal campaign landing page (pre-winter).
- **CTA goal:** "Get an Installation Quote" — form-first (considered purchase, not urgent call).
- **SEO intent:** "fireplace installation [city]", "fireplace services".
- **Why it exists:** Separates aspirational buying journeys from repair journeys — different tone, imagery, and CTA style.

### 6. Chimney Cleaning
- **Purpose:** Sell the bread-and-butter annual sweep.
- **User goal:** Price, duration, mess ("will my living room be covered in soot?"), and booking.
- **Business goal:** Highest-volume recurring revenue; the entry service that seeds inspections and repairs.
- **CTA goal:** "Schedule a Sweep" + coupon cross-link (SWEEP offer).
- **SEO intent:** "chimney cleaning [city]", "chimney sweep cost" — highest-volume service query.
- **Why it exists:** The #1 searched chimney service; also the natural home of the maintenance-reminder loop.

### 7. Chimney Repairs (repairs hub-lite)
- **Purpose:** Umbrella for all structural repairs; triage page that routes to the 4 specific repair spokes.
- **User goal:** "Something's broken/leaking — what is it and what will it cost?"
- **Business goal:** Capture generic "repair" searches; upsell diagnosis (Level 2 inspection) before quoting.
- **CTA goal:** "Book a Repair Assessment"; deep links to Liner/Firebox/Crown/Masonry.
- **SEO intent:** "chimney repair [city]" — high commercial intent, high ticket.
- **Why it exists:** Users search "chimney repair" 10× more than "flue liner replacement"; this page catches them, then routes.

### 8. Chimney Inspections
- **Purpose:** Explain Level 1/2/3 inspections; anchor the photo-documented report differentiator.
- **User goal:** Home sale/purchase due diligence, insurance requirement, or post-incident check.
- **Business goal:** Inspections are the diagnostic gateway to every repair job; real-estate referral magnet.
- **CTA goal:** "Book a Same-Day Inspection" — urgency framing (closings have deadlines).
- **SEO intent:** "chimney inspection [city]", "level 2 chimney inspection cost" — transactional, deadline-driven.
- **Why it exists:** Distinct buyer (often realtor-driven, time-boxed) with distinct language and urgency.

### 9. Animal Removal
- **Purpose:** Emergency/humane removal of birds, squirrels, raccoons + prevention (leads to cap replacement).
- **User goal:** "There's something alive in my chimney RIGHT NOW."
- **Business goal:** Emergency-priced calls; every removal upsells a chimney cap.
- **CTA goal:** Call-only, oversized phone CTA. No form-first — this user won't wait.
- **SEO intent:** "animal in chimney", "bird removal chimney [city]" — urgent long-tail with weak competition.
- **Why it exists:** Pure emergency intent deserves a page with zero friction; also the top organic feeder to Cap Replacement.

### 10. Chimney Cap Replacement
- **Purpose:** Sell caps as the cheap insurance against water, animals, and sparks.
- **User goal:** "My cap is rusted/missing — what does a new one cost?"
- **Business goal:** High-margin quick job; natural add-on to sweeps and animal removal.
- **CTA goal:** "Get a Cap Quote" — can be quoted from a photo, so form works well here.
- **SEO intent:** "chimney cap replacement/installation [city]".
- **Why it exists:** Discrete product-like service with its own search demand and photo-quotable sales motion.

### 11. Chimney Liner Repairs
- **Purpose:** Explain flue liner damage, relining options (stainless), and safety stakes.
- **User goal:** Understand a scary inspection finding ("cracked flue tiles") and its cost.
- **Business goal:** One of the highest-ticket jobs; converts inspection findings into revenue.
- **CTA goal:** "Schedule a Liner Assessment"; link from Inspections page findings language.
- **SEO intent:** "chimney liner repair/replacement cost" — research-heavy, high-value.
- **Why it exists:** Big-ticket decisions need a dedicated education page; this is where inspection reports send people.

### 12. Firebox Repair
- **Purpose:** Cracked/spalling firebox brick and mortar repair.
- **User goal:** "Is it safe to light a fire?" — safety verdict + fix cost.
- **Business goal:** Converts DIY-curious users into booked repairs via safety framing.
- **CTA goal:** "Get a Safety Assessment."
- **SEO intent:** "firebox repair", "fireplace brick repair [city]".
- **Why it exists:** Symptom users can see with their own eyes → strong search intent; distinct from structural masonry.

### 13. Concrete Crown Repair
- **Purpose:** Crown cracks = the #1 cause of chimney water damage; sell repair/rebuild + waterproofing.
- **User goal:** "Water stains near the fireplace / leak after rain — why?"
- **Business goal:** Catch water-intrusion jobs early (crown) before they become masonry rebuilds; upsell waterproofing.
- **CTA goal:** "Book a Leak Diagnosis."
- **SEO intent:** "chimney crown repair", "chimney leaking when it rains" — symptom queries.
- **Why it exists:** Leak symptoms are searched heavily but rarely matched to "crown" by homeowners — this page does the matching.

### 14. Damper Services
- **Purpose:** Repair/replace stuck or leaky dampers; energy-loss angle.
- **User goal:** "Damper won't open/close" or "cold draft from the fireplace."
- **Business goal:** Quick service call with top-sealing damper upsell.
- **CTA goal:** "Fix My Damper" call CTA.
- **SEO intent:** "chimney damper repair/replacement" — low competition, decent volume.
- **Why it exists:** Discrete symptom with its own search language; also winterization campaign landing.

### 15. Masonry Work
- **Purpose:** Tuckpointing, rebuilds, brick replacement — the craftsmanship showcase.
- **User goal:** "My chimney looks bad/is crumbling — can it be restored?"
- **Business goal:** Highest-ticket structural work; before/after gallery drives premium perception site-wide.
- **CTA goal:** "Request a Masonry Estimate" — form + photo upload.
- **SEO intent:** "chimney masonry repair", "tuckpointing [city]".
- **Why it exists:** Big visual proof opportunity (before/afters) and a distinct trade-level search category.

### 16. Gas Log Installation
- **Purpose:** Sell gas log sets: convenience, styles, vented vs. vent-free.
- **User goal:** Compare options, see real installs, understand total installed cost.
- **Business goal:** High-margin install + future service plan customer.
- **CTA goal:** "Design My Fireplace — Free Consult" (form-first, considered purchase).
- **SEO intent:** "gas log installation [city]", "vented vs vent-free gas logs".
- **Why it exists:** Aspirational purchase journey; needs gallery-style UX unlike any repair page.

### 17. Wood Stove Installation
- **Purpose:** Sell wood stove/insert installs: efficiency, code compliance, chimney compatibility.
- **User goal:** "Can I put a stove here, what brand, what total cost?"
- **Business goal:** Highest-ticket fireplace job; bundles liner work (cross-sell to #11).
- **CTA goal:** "Get an Installation Quote."
- **SEO intent:** "wood stove installation [city]", "wood stove insert cost".
- **Why it exists:** Regulated, complex install where "certified installer" wins the search; distinct from gas journey.

### 18. Coupons
- **Purpose:** Capture deal-seekers; give fence-sitters the final nudge.
- **User goal:** "Get the best price before I call."
- **Business goal:** Convert price-sensitive traffic without discounting site-wide; track promo codes per channel.
- **CTA goal:** "Claim by Phone — mention code" (drives calls, makes redemption trackable).
- **SEO intent:** "chimney sweep coupon [city]", brand + "coupon".
- **Why it exists:** Home-service buyers habitually check for coupons pre-call; owning that page keeps them off competitors' offers.

### 19. Contact
- **Purpose:** Universal conversion endpoint — quote form, phone, hours, service area map.
- **User goal:** Reach a human with minimum friction; know when they'll hear back.
- **Business goal:** Capture every non-phone lead; set the "30-minute callback" service promise.
- **CTA goal:** Form submit; click-to-call as equal-weight alternative.
- **SEO intent:** Brand + "contact/phone number"; NAP consistency for local SEO.
- **Why it exists:** Every CTA band on the site needs a destination; also the GBP "website" deep-link target.

### 20. Privacy Policy
- **Purpose:** Legal disclosure of data handling (forms, analytics, call tracking).
- **User goal:** Verify data safety (rarely read, always expected).
- **Business goal:** Compliance (CCPA/GDPR-adjacent), ad-platform requirements (Google Ads requires it).
- **CTA goal:** None.
- **SEO intent:** None (noindex acceptable); trust signal for crawlers and ad review.
- **Why it exists:** Required for running ads and collecting form data; absence blocks Google Ads approval.

### 21. Terms of Service
- **Purpose:** Service terms, estimates vs. final pricing, warranty language, liability.
- **User goal:** Check warranty/guarantee terms before or after booking.
- **Business goal:** Legal protection; dispute reference.
- **CTA goal:** None.
- **SEO intent:** None.
- **Why it exists:** Protects the business on estimates, cancellations, and warranty claims.

---

## User journeys

**1. Emergency ("smoke smell / animal inside") — mobile, 80% call**
Google → Home or Animal Removal → sticky call button → done. Design rule: phone CTA visible in first viewport of every page; no journey longer than 1 tap.

**2. Symptom researcher ("leak after rain")**
Google symptom query → Crown Repair (or Repairs hub) → reads symptom match → Inspections cross-link ("not sure? we diagnose") → Contact form or call. Cross-links between symptom pages are the connective tissue.

**3. Annual maintenance planner**
Home → Services → Chimney Cleaning → checks Coupons (nav) → calls with promo code. Coupons page must cross-link back to Cleaning and Inspection.

**4. Home buyer / realtor**
Google "level 2 inspection [city]" → Inspections → About (verifies certification) → Contact form with closing date. Speed-of-report messaging closes this journey.

**5. Upgrade shopper (gas logs / stove)**
Seasonal ad or Google → Fireplace Services → Gas Log or Wood Stove page → gallery → consult form → (post-install) becomes Cleaning maintenance customer. This journey feeds journey #3 forever — note it in the CRM flow.

**Global movement rules**
- Header: Home, About, Services (dropdown: 2 sub-hubs + top 4 services), Coupons, Contact + phone pill. 
- Every service page ends with the dark CTA band (call + quote) and 2–3 "related services" cards.
- Breadcrumbs on all service pages (schema-marked): Home / Services / Chimney / Crown Repair.
- Footer: full service list (SEO + orientation), NAP, hours, Privacy/Terms.
- Coupons teased on Home and Cleaning; Contact linked from literally everywhere.
