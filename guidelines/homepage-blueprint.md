# Chimney Masters — Homepage Blueprint (UX Structure Only)

Structure only — no headlines, no body copy. Placeholder language in brackets describes *what kind* of content goes there, not the content itself. Token names refer to `styles.css`.

---

## 1. Header

- **Purpose:** Persistent orientation + fastest possible path to a phone call.
- **Why it exists:** Home-service visitors decide "call or keep browsing" within seconds; the header is on-screen for that entire decision.
- **Layout:** Sticky, single row. Logo left · nav center-right · phone-pill CTA far right. Collapses to logo + hamburger + phone icon under ~900px.
- **Content direction:** Logo mark, 5 nav items (Home / About / Services ▾ / Coupons / Contact), one always-visible phone number.
- **Headline style:** N/A (no headline in header).
- **Image/video:** Logo only (`assets/chimney-masters-logo.png`), transparent, ~40–52px tall.
- **Icon style:** Lucide outline, 20px, chevron for the Services dropdown only.
- **CTA placement:** Primary red pill button, far right, phone icon + number, persists on scroll.
- **Trust elements:** None here — kept clean; trust lives in the bar directly below.
- **Background:** White, 1px `--border-default` bottom hairline; goes solid on scroll if hero is transparent-over-video.
- **Card layout:** N/A.
- **Section spacing:** Fixed height ~72–80px; no vertical rhythm (persistent chrome).
- **Conversion purpose:** Zero-friction call path from anywhere on the site.
- **UX reasoning:** Nielsen-standard persistent nav; phone-first because home-service conversion is disproportionately by call, not form.

---

## 2. Hero Video

- **Purpose:** Establish premium brand feeling in the first 2 seconds and state the single core promise.
- **Why it exists:** First impression drives the trust-vs-bounce decision before any copy is read; motion + darkness reads "premium home service," not "budget contractor."
- **Layout:** Full-bleed, 80–90vh (not full 100vh — signal there's more below). Text block left- or center-aligned over a dark scrim gradient (transparent top → `--cm-charcoal-900` at ~55% opacity toward bottom-left where text sits).
- **Content direction:** One eyebrow label, one short headline slot, one supporting line slot, two CTA slots, one trust-strip slot (rating + badges) beneath the CTAs.
- **Headline style:** Large Montserrat 800, ≤8 words, benefit-led not feature-led; slot for one word to sit in `--accent` red as the "highlight word."
- **Image/video:** AI-generated cinematic background video — warm firelight / chimney smoke against dusk exterior, slow motion, no visible people/faces (avoid uncanny AI-face artifacts), 8–15s seamless loop, muted/no audio. Static poster frame (same grade) as `<video poster>` and mobile fallback.
- **Icon style:** None over the video except CTA icons (phone glyph inline in the button).
- **CTA placement:** Two CTAs side by side: primary red "Call" (with phone icon), secondary outline/ghost-on-dark "Get a Free Quote" — anchors to Booking Form section.
- **Trust elements:** Small inline strip under CTAs: star rating + review count + 1–2 micro-badges (Licensed & Insured / CSIA-Certified), white/light text on the scrim.
- **Background:** Video with dark gradient scrim; charcoal-900 fallback background color while video loads.
- **Card layout:** N/A.
- **Section spacing:** No top padding (true full-bleed from under header); ~64–96px conceptual bottom breathing room before Trust Bar (can be zero if Trust Bar is a contrasting band).
- **Conversion purpose:** Convert the emergency visitor immediately (call) and capture the planned visitor's intent (quote CTA scrolls to form).
- **UX reasoning:** Video must not delay LCP text — headline/CTA render as HTML over the video, not baked into it. Single dominant promise avoids decision paralysis.

---

## 3. Trust Bar

- **Purpose:** Immediate, scannable proof of legitimacy right where hero urgency hands off to scrutiny.
- **Why it exists:** Reduces "is this a real, licensed company" doubt before the visitor invests more scroll time.
- **Layout:** Full-width single row, 4 evenly-spaced items, icon + short label each. Wraps to 2×2 grid on mobile.
- **Content direction:** Licensed & Insured · CSIA-Certified · Same-Day Service · Family-Owned Since [year] — factual credentials only, no sales language.
- **Headline style:** No headline — this is a label row, not a copy section.
- **Image/video:** None.
- **Icon style:** Lucide outline 20–24px, `--accent` red, one per item.
- **CTA placement:** None — this section is pure reassurance, not a conversion ask.
- **Trust elements:** The entire section IS the trust element.
- **Background:** `--cm-gray-50`, thin `--border-default` bottom rule — visually distinct strip from both hero and next section.
- **Card layout:** N/A (inline items, not cards).
- **Section spacing:** Compact, ~14–20px vertical padding — a strip, not a full section.
- **Conversion purpose:** Removes legitimacy objections early so later CTAs face less resistance.
- **UX reasoning:** Placed directly under hero (proven pattern) so it's the very next thing seen regardless of scroll speed.

---

## 4. Badges (Certifications / Affiliations)

- **Purpose:** Deeper, more official trust layer — third-party-verifiable marks (CSIA, BBB, manufacturer certifications, insurance).
- **Why it exists:** Trust Bar is brand's own claims; Badges are external validation — different persuasion register, both needed.
- **Layout:** Horizontal logo/badge row, grayscale-until-hover or subtle full-color, centered, evenly spaced.
- **Content direction:** Certification body marks, association memberships, insurance-verified seal, manufacturer-authorized-dealer marks (for stove/gas log brands).
- **Headline style:** Optional micro-eyebrow only ("Certified & Accredited") — no full headline.
- **Image/video:** Real badge/seal image assets (must be sourced/provided — do not fabricate certification logos).
- **Icon style:** N/A — these are official marks, not icon-font glyphs.
- **CTA placement:** None.
- **Trust elements:** Entire section.
- **Background:** White, no border — reads as a quiet continuation, not its own loud block.
- **Card layout:** N/A (flat row) or optional very subtle divider between marks.
- **Section spacing:** Small, ~40–56px vertical — a pause, not a destination.
- **Conversion purpose:** Supports premium/high-ticket decisions (installs, masonry) where buyers research credentials before spending.
- **UX reasoning:** Kept visually quiet so it doesn't compete with Reviews or Services for attention — it's supporting evidence, not a headline claim.

---

## 5. Featured Services

- **Purpose:** Let visitors self-route to the specific service they need.
- **Why it exists:** With 12 services across 2 hubs, the homepage can't explain all of them — it must triage into the top few + a path to the full directory.
- **Layout:** 4-up card grid (2×2 on tablet, 1-col stack on mobile) showing the top-traffic services (Cleaning, Inspections, Repairs, Installation-cluster); grid ends with a 5th "wide" card or link: "View All 12 Services."
- **Content direction:** One icon + short title + one-line descriptor + "Learn More" per card; group label distinguishes Chimney vs. Fireplace if mixed.
- **Headline style:** Section eyebrow (small, uppercase, red) + H2, benefit-framed ("everything under one roof" register, not decided yet — copy phase).
- **Image/video:** None inside the small cards (icon-led); optional single supporting photo if layout goes asymmetric (photo + 3 cards) — decide at wireframe-visual stage.
- **Icon style:** Lucide outline 24px in a red-tinted rounded square (matches `Card` component's `icon` slot).
- **CTA placement:** Per-card ghost "Learn More" link; one primary section-level CTA at the bottom ("View All Services") — no red CTA competing with the card links.
- **Trust elements:** None required here — this section's job is navigation, not persuasion.
- **Background:** `--cm-gray-50` (alternates with white per rhythm rule — hero/white, trust/gray, badges/white, services/gray).
- **Card layout:** `Card` component, `variant="feature"`, `hoverable` (shadow lift + red border-hover per design system).
- **Section spacing:** Large, ~80–96px top/bottom (`--space-9`) — a primary destination section.
- **Conversion purpose:** Routes traffic to high-intent service pages where the real conversion (form/call) happens.
- **UX reasoning:** 4 cards avoids choice overload (Hick's Law) while the "View All" link satisfies power-users without cluttering the grid.

---

## 6. Why Choose Us / Benefits

- **Purpose:** Differentiate from cheaper/less-certified competitors on non-price dimensions.
- **Why it exists:** By the time a visitor has seen services, the next question is "why you and not the other guy" — this section answers before Reviews prove it.
- **Layout:** 3–4 column icon+text list, no cards/borders (lighter-weight than Featured Services to create rhythm contrast) — or a photo-left/list-right split for variety.
- **Content direction:** Differentiators as short benefit statements (certification depth, photo-documented reports, same-day availability, transparent pricing) — not generic ("quality service") filler.
- **Headline style:** H2 + optional subhead; can carry the strongest brand promise of the page.
- **Image/video:** Optional single supporting photo (tech at work, real home) if using the split layout; otherwise none.
- **Icon style:** Lucide outline 28–32px, `--accent` or `--cm-charcoal-900`, no background chip (distinguishes from Featured Services' boxed icons).
- **CTA placement:** None mandatory — can end with a single quiet text link to About, no button.
- **Trust elements:** The benefit claims themselves function as trust; can include 1 inline stat (e.g., years in business) if factual.
- **Background:** White.
- **Card layout:** N/A or borderless list.
- **Section spacing:** Medium-large, ~72–88px.
- **Conversion purpose:** Builds the rational case that supports the emotional/social proof of Reviews next.
- **UX reasoning:** Rational differentiation before social proof follows a classic persuasion sequence: claim → evidence (reviews) → offer (coupon) → action (CTA/form).

---

## 7. About Preview

- **Purpose:** Tease the company story/team without pulling the visitor off the conversion path.
- **Why it exists:** Some visitors want the "who" before they'll call; a full detour to /about would lose momentum, so a preview keeps them on Home.
- **Layout:** Photo + text split (2-column), photo on the side that balances the previous section's image (alternating rhythm).
- **Content direction:** One short founder/team-story excerpt + years-in-business + a "Meet the Team" link.
- **Headline style:** H2, personal/human register (contrasts with the service sections' functional tone).
- **Image/video:** Real photo of founder/team or storefront/truck — must be authentic, not stock-generic.
- **Icon style:** None, or a single small quote-mark glyph if excerpt is styled as a pull-quote.
- **CTA placement:** One low-emphasis text/ghost link — "Read Our Story" — not a red primary button (this section informs, doesn't sell).
- **Trust elements:** Years in business, family-owned framing, certifications restated in human terms ("our lead tech is CSIA-certified").
- **Background:** `--cm-gray-50`.
- **Card layout:** N/A (editorial split, not cards).
- **Section spacing:** Medium, ~64–80px.
- **Conversion purpose:** Indirect — builds affinity that reduces price sensitivity and improves close rate on the eventual call.
- **UX reasoning:** Keeps the "trust the people" need satisfied in-line, so it doesn't require an exit from the homepage funnel.

---

## 8. Reviews

- **Purpose:** Third-party social proof at the point where rational + emotional trust need reinforcement before the ask (Coupon/CTA/Form).
- **Why it exists:** Peer validation is the single strongest home-service conversion lever; must appear before the final conversion push, not buried at the bottom.
- **Layout:** 3-up card grid (carousel on mobile, swipeable); optional platform logo row above (Google, BBB) if real integrations exist.
- **Content direction:** Star rating + short excerpt + name + (optionally) service used and city/neighborhood — real reviews only, never fabricated.
- **Headline style:** H2 restating the aggregate rating as a headline device (e.g., a numeral-led headline) — exact wording deferred to copy phase.
- **Image/video:** Optional small reviewer initials/avatar circles (no stock headshots); platform badge icons (Google "G", BBB) if licensed to use.
- **Icon style:** Star rating via `RatingStars` component (amber fill); no other icons needed.
- **CTA placement:** None competing — optional quiet "Read More Reviews" link to Google/BBB profile at section end.
- **Trust elements:** The section is entirely trust content — ratings, counts, verified-review indicator if platform supports it.
- **Background:** White or `--cm-gray-50` (whichever creates alternation with Benefits above and Coupons below).
- **Card layout:** `Card` component, default variant, no hover-lift needed (static, non-navigational content).
- **Section spacing:** Large, ~80px — this is a primary trust destination, not a transition.
- **Conversion purpose:** Removes final skepticism immediately before the monetary ask (Coupons) and action ask (Final CTA/Form).
- **UX reasoning:** Classic "evidence before offer" sequencing; also breaks up a long scroll with a lower-cognitive-load, high-emotional-payoff section.

---

## 9. Coupons

- **Purpose:** Give price-motivated visitors a concrete reason to act now instead of comparison-shopping elsewhere.
- **Why it exists:** Home-service buyers habitually search "[company] coupon" before calling; surfacing it on Home keeps that behavior on-site instead of sending them to a search results page full of competitors.
- **Layout:** Single wide highlighted banner/card (not a grid — homepage shows the single best/featured offer, full list lives on /coupons).
- **Content direction:** One offer headline slot, one terms/fine-print slot, promo-code slot, link to "View All Coupons."
- **Headline style:** Large, deal-forward (numeral-led, e.g., "$__ Off" pattern) — exact copy deferred.
- **Image/video:** None required — this section is typographic/badge-led, not photographic (keeps it feeling like a genuine offer, not a stock ad).
- **Icon style:** One tag/percent Lucide icon as a small accent, optional.
- **CTA placement:** One primary red CTA: "Claim by Phone" (mirrors /coupons page pattern — keeps redemption trackable via call).
- **Trust elements:** "New customers" / validity framing (implicit honesty signal — real terms, not fake urgency countdowns).
- **Background:** `--surface-accent-tint` (`--cm-red-50`) card on white or gray section background — the tint IS the section's visual identity, per design-system Card `tint` variant.
- **Card layout:** `Card` component, `variant="tint"`, single instance, horizontal layout (text left, CTA right) per existing Home screen pattern already built.
- **Section spacing:** Medium, ~64px — deliberately less than Reviews/Services (this is a nudge, not a pillar section).
- **Conversion purpose:** Directly monetary trigger — converts undecided/price-sensitive visitors right before the final CTA.
- **UX reasoning:** One offer, not a grid, avoids discount-shopping behavior (comparing multiple coupons) that could stall the decision instead of prompting it.

---

## 10. Emergency CTA

- **Purpose:** Dedicated, unmissable escape hatch for the urgent-need visitor who scrolled past everything looking for "help me now."
- **Why it exists:** Not every visitor enters at the hero — some arrive via a blog link, ad, or deep scroll; this section re-catches the emergency segment mid-page.
- **Layout:** Full-width contrasting band (not a card) — visually distinct from surrounding sections, deliberately urgent in tone but not alarmist (premium brand ≠ red-alert siren design).
- **Content direction:** One short urgency-acknowledging line + oversized phone CTA; optionally the 24/7-or-same-day-hours fact restated.
- **Headline style:** Short, direct, safety-forward (not discount-forward — different register from Coupons).
- **Image/video:** None — text + icon only, keeps this section fast and unambiguous.
- **Icon style:** Single large phone or flame-warning glyph, `--accent` or white depending on band color, no icon grid.
- **CTA placement:** One oversized, centered red (or white-on-charcoal) phone button — the single largest CTA on the page.
- **Trust elements:** "Licensed & Insured" micro-restatement only if space allows — otherwise omit, keep this section singular in purpose.
- **Background:** `--cm-charcoal-900` solid (matches existing dark-CTA-band pattern already in the design system) or `--accent` red solid — pick one, use consistently as the site's "urgent" signature color going forward.
- **Card layout:** N/A — full-bleed band, not a card.
- **Section spacing:** Compact, ~48–64px — a punctuation mark, not a pillar section.
- **Conversion purpose:** Pure call-volume capture for safety/urgent scenarios (smoke smell, animal in chimney, active leak).
- **UX reasoning:** Separated from the "Final CTA" (which targets the planned/considered visitor) so urgent and considered intents each get a tonally-correct, non-competing ask.

---

## 11. Booking Form

- **Purpose:** Capture leads who prefer a form over a call (large segment of premium/planned buyers).
- **User goal:** Request a quote/appointment with minimal typing, get a clear "what happens next" expectation.
- **Business goal:** Lead capture with enough qualifying data (service needed, property type) to route/quote efficiently.
- **CTA goal:** One clearly primary submit button; no competing links inside the form card.
- **Layout:** Two-column — left: reassurance content (hours, response-time promise, phone alt., service-area note); right: the form card. Matches the pattern already built in `ContactScreen.jsx`.
- **Content direction:** Fields: Name, Phone, Email, Service Needed (select), Property Type (radio), Message (textarea), one reminders opt-in checkbox — 6 fields max per brief.
- **Headline style:** H2, direct and low-pressure ("get a quote" register, not "buy now").
- **Image/video:** None — form is the content.
- **Icon style:** Small inline icons (clock, map-pin, shield) next to the reassurance bullets only, not inside form fields.
- **CTA placement:** Full-width primary red submit button at form bottom; phone CTA repeated on the left column as the equal-weight alternative.
- **Trust elements:** "We respond within 30 minutes" promise, hours, licensed/insured restatement.
- **Background:** `--cm-gray-50` section background, white form card with border + shadow (`Card` component default).
- **Card layout:** `Card` wrapping the form, `Input`/`Select`/`Radio`/`Checkbox` components exactly as built in the design system.
- **Section spacing:** Large, ~72–96px — this is a primary destination (hero's "Get a Free Quote" CTA anchors here).
- **Conversion purpose:** The form-preferring visitor's entire conversion path ends here — this section must never feel like an afterthought.
- **UX reasoning:** Two-column keeps the form from feeling like a bare wall of fields by pairing it with human reassurance copy; anchor-link target for the hero's secondary CTA satisfies "one clear destination per CTA" heuristic.

---

## 12. Our Process

- **Purpose:** Reduce anxiety about "what happens when they show up" — set expectations for the service visit.
- **Why it exists:** Inviting a stranger into your home is a trust threshold; a clear numbered process lowers perceived risk more effectively than adjectives ("professional," "reliable") do.
- **Layout:** 3-step horizontal numbered sequence (Book → Sweep & Inspect → Report, or generalized "Contact → Visit → Done" for a homepage-level version vs. the service-page-specific version already built).
- **Content direction:** Each step: numeral badge + short title + one-line description of what happens.
- **Headline style:** H2, procedural/reassuring register.
- **Image/video:** Optional connecting line/arrow between steps (decorative, not a photo); no video needed here.
- **Icon style:** Numeral badges (circle, `--accent` fill, white numeral) rather than icons — numerals communicate sequence better than abstract glyphs.
- **CTA placement:** None inside the steps; section can close with a quiet link to the Booking Form anchor.
- **Trust elements:** Implicit — clarity itself is the trust signal (nothing hidden about the process).
- **Background:** White or `--cm-gray-50` (alternate with Booking Form above).
- **Card layout:** `Card` component per step (matches existing `ServiceScreen.jsx` "How It Works" pattern) or borderless numbered columns for a lighter homepage treatment — choose borderless here to avoid visually competing with Featured Services' cards.
- **Section spacing:** Medium, ~64–72px.
- **Conversion purpose:** Indirect — removes the "I don't know what I'm signing up for" objection that stalls form completion above.
- **UX reasoning:** Placed after the Booking Form (not before) so it functions as reassurance for those who hesitated, and as post-decision confidence for those who already submitted.

---

## 13. Before & After

- **Purpose:** Visual proof of craftsmanship for high-ticket, visually-verifiable work (masonry, crown repair, cap replacement).
- **Why it exists:** Some services (repairs, masonry) are bought on visible outcome — photos are more persuasive than any adjective; this is the site's single largest premium-differentiation opportunity.
- **Layout:** Slider or side-by-side comparison pairs, 3–4 example pairs in a horizontal scroll/carousel; each pair labeled with the service type.
- **Content direction:** Real before/after photo pairs only — must be sourced from the client, never generated/stock (per copyright + honesty requirements).
- **Headline style:** H2, proof-forward register ("see the difference" category — exact copy later).
- **Image/video:** Real photography, consistent crop/aspect ratio across pairs, consistent lighting grade if possible for credibility.
- **Icon style:** Small "before/after" label chips (`Tag` component) rather than icons.
- **CTA placement:** One link per pair or one section-level CTA — "Get Your Free Estimate" — kept secondary (ghost/outline) since photos are doing the persuasion work here.
- **Trust elements:** The photography itself; optional service-name + city label per pair for local-proof specificity.
- **Background:** `--cm-charcoal-900` or dark neutral (photos read as premium against a dark frame; also creates page rhythm contrast against the mostly-white/gray sections around it) — or white if photo quality/lighting doesn't support a dark frame; decide once real photos are supplied.
- **Card layout:** Minimal-chrome image cards — thin border or no border, let the photo be the content, small caption bar beneath.
- **Section spacing:** Large, ~72–88px.
- **Conversion purpose:** Converts visually-motivated, higher-ticket buyers (masonry, crown, cap) who need to see outcome quality before committing.
- **UX reasoning:** Positioned late in the page (after trust/process are established) because raw photos without context read as generic; sequencing them after Reviews/Process maximizes their persuasive weight.

---

## 14. FAQs

- **Purpose:** Pre-empt common objections/questions that would otherwise become phone-tag or lost leads.
- **Why it exists:** Reduces support burden and captures long-tail SEO ("how much does a chimney sweep cost") directly on the highest-authority page.
- **Layout:** Single-column accordion, 5–7 questions max on Home (deeper FAQ sets belong on service pages).
- **Content direction:** Pricing-range questions, process questions ("how long does it take," "do I need to be home"), safety questions ("how often should I sweep") — homepage FAQs stay general; service-specific questions live on their own pages.
- **Headline style:** Simple H2 ("Common Questions" register) — no cleverness needed here.
- **Image/video:** None.
- **Icon style:** Chevron/plus-minus toggle glyph per accordion row only.
- **CTA placement:** None inside items; optional closing line linking to Contact for anything not covered.
- **Trust elements:** Transparent, direct answers (including honest pricing ranges) function as a trust signal in themselves.
- **Background:** White.
- **Card layout:** N/A — accordion rows with `--border-default` dividers, not cards.
- **Section spacing:** Medium, ~64–72px.
- **Conversion purpose:** Removes last-mile objections for visitors who are close to converting but have one unanswered question.
- **UX reasoning:** Accordion (not expanded list) keeps the section scannable and short on-page while still holding full answer depth; also enables FAQ schema markup for SERP rich results.

---

## 15. Latest Articles

- **Purpose:** Surface blog/resource content for top-of-funnel/research visitors and support ongoing SEO content strategy.
- **Why it exists:** Gives returning/organic visitors a reason to explore beyond services; signals an active, authoritative site to both users and search engines.
- **Layout:** 3-up card grid (image + title + excerpt + date), horizontal scroll on mobile.
- **Content direction:** Seasonal/maintenance-education topics (e.g., pre-winter prep, safety topics, cost guides) — teaser only, full article lives on its own page.
- **Headline style:** H2, informational register, distinct from the sales-toned sections around it.
- **Image/video:** Featured image per article — real photography or simple branded graphic, never generic stock-with-stock-people clichés.
- **Icon style:** None needed beyond a small "read time" or category tag chip.
- **CTA placement:** Per-card "Read More" ghost link; one section-level "View All Articles" link.
- **Trust elements:** Authorship/date stamps (freshness signal); category tags showing breadth of expertise.
- **Background:** `--cm-gray-50`.
- **Card layout:** `Card` component, default variant, image on top, hoverable.
- **Section spacing:** Medium, ~64–72px.
- **Conversion purpose:** Low-pressure engagement layer — nurtures visitors not yet ready to call/quote, keeps them in the brand orbit (return visits, email signup potential).
- **UX reasoning:** Placed near the bottom since it serves top-of-funnel intent, which should never precede the bottom-of-funnel CTAs a ready-to-buy visitor needs first.

---

## 16. Final CTA

- **Purpose:** Last, unambiguous conversion ask before the footer — the page's closing argument.
- **Why it exists:** Every long homepage needs a clear "okay, now act" moment distinct from the mid-page Emergency CTA (which served urgent intent specifically); this one serves the general/considered visitor who read the whole page.
- **Layout:** Full-width band, dark background, centered content — mirrors the existing `CTABand` component already built in the design system.
- **Content direction:** One restated core promise + two CTAs (Call / Get a Free Quote), matching the hero's dual-CTA pattern for a satisfying structural bookend.
- **Headline style:** H2, confident close (can reuse/echo the hero's promise rather than introduce a new idea).
- **Image/video:** None — solid dark background, no competing imagery this late in the page.
- **Icon style:** Phone icon inline in the primary CTA only.
- **CTA placement:** Two CTAs side by side, centered — primary red "Call," secondary outline "Get a Free Quote" (anchors back up to Booking Form or to /contact).
- **Trust elements:** Optional one-line credential restatement (licensed/insured) in smaller text beneath the CTAs.
- **Background:** `--cm-charcoal-900` (existing `CTABand` component/pattern — reuse exactly).
- **Card layout:** N/A — full-bleed band, no cards.
- **Section spacing:** Medium, ~64px.
- **Conversion purpose:** Final capture for any visitor who scrolled the entire page without acting yet.
- **UX reasoning:** Symmetry with the hero (same dual-CTA structure) gives the page a deliberate "open and close" feel rather than trailing off into the footer.

---

## 17. Footer

- **Purpose:** Full-site orientation, NAP consistency, legal links, final utility layer.
- **Why it exists:** Catches visitors who scrolled all the way down looking for something the main nav didn't surface (specific service, hours, legal pages); also the site's primary internal-linking and local-SEO anchor.
- **Layout:** 4-column grid — brand/logo+blurb, Services (full list), Company (About/Coupons/Contact), Contact details (phone/email/hours) — bottom bar for copyright + legal links. Matches the `SiteFooter` component already built.
- **Content direction:** Full 12-service list (SEO value + orientation), NAP block, hours, social links if applicable.
- **Headline style:** No headline — small-caps column labels only.
- **Image/video:** Logo (white/dark-mode-safe version).
- **Icon style:** Optional small social-platform icons only, Lucide-consistent stroke style.
- **CTA placement:** None primary — footer is utility, not a conversion push (the Final CTA already made the ask).
- **Trust elements:** NAP consistency (local SEO trust signal to both users and search engines), hours, licensing line in the copyright bar if desired.
- **Background:** `--cm-charcoal-900`/near-black (existing `SiteFooter` pattern), lighter gray-400 text for secondary content, white for headings.
- **Card layout:** N/A — flat column layout.
- **Section spacing:** Large top padding (~56px) to clearly separate from Final CTA; tight internal row spacing.
- **Conversion purpose:** Safety net — ensures no dead-end even for visitors who reached the very bottom unconverted.
- **UX reasoning:** Full service list in the footer is a deliberate SEO + findability decision distinct from the curated homepage Featured Services grid above.

---

## Section order (top to bottom)

Header (persistent) → Hero Video → Trust Bar → Badges → Featured Services → Why Choose Us / Benefits → About Preview → Reviews → Coupons → Emergency CTA → Booking Form → Our Process → Before & After → FAQs → Latest Articles → Final CTA → Footer

## Background rhythm (alternating, 2-color max per system rule)
White → gray-50 → white → gray-50 → white → gray-50 → white → red-tint (Coupons) → charcoal-900 (Emergency CTA) → gray-50 (Booking Form) → white (Process) → charcoal-900 or white (Before/After, pending real photos) → white (FAQ) → gray-50 (Articles) → charcoal-900 (Final CTA) → charcoal-900/darker (Footer).

## Open decisions for the next (visual/copy) pass
- Confirm Emergency CTA and Final CTA don't feel redundant once real copy is written — they must read as *different* asks (urgent vs. considered).
- Before & After background (dark vs. white) depends on the real photography once supplied.
- Confirm whether Badges section has real certification marks to show; if not yet available, it should be cut rather than filled with placeholders that look like fabricated credentials.
