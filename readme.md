# Chimney Masters Design System

Premium American chimney & fireplace service company: same-day inspections, sweeps/cleaning, repairs (masonry, crowns, caps, liners, flashing), and fireplace/stove installation. Website is WordPress + Elementor , 13 pages: Home, About, Coupons, Contact, plus service pages and hubs.

**Sources provided:** two logo PNGs (`uploads/`, copied to `assets/`) and a written brand brief. No codebase, Figma, or existing site export was provided — tokens, components, and the UI kit below are authored from the brief; component inventory is the standard set (flagged as such).

Brand identity: professional, trustworthy, family-safe, premium home service.

## Index

- `styles.css` — global entry; imports everything in `tokens/`
- `tokens/` — colors, typography, spacing, effects, base rules
- `assets/` — logo (transparent + white-bg)
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/` — `actions/` Button, IconButton · `forms/` Input, Select, Checkbox, Radio, Switch · `display/` Card, Badge, Tag, RatingStars · `navigation/` Tabs · `feedback/` Dialog, Toast, Tooltip
- `ui_kits/website/` — marketing-site kit: Home, Service page, Contact (interactive `index.html`)
- `SKILL.md` — agent-skill entry point

## Content fundamentals

- **Voice:** confident tradesman-professional. Direct, plain-spoken, safety-first. "We" for the company, "you/your home" for the customer. No emoji. No slang, no hype adjectives beyond "premium," "certified," "same-day."
- **Casing:** Title Case for headings and buttons ("Schedule an Inspection"), sentence case for body. Uppercase reserved for small eyebrow labels ("SAME-DAY SERVICE").
- **Emoji (client-directed, updated):** used sparingly as visual bullet markers to break dense info into scannable, friendly chunks — e.g. ✅ for checklist items, 📞 for the call CTA line, 🔥 as a section-opening accent. Never in headings, never stacked (max one per line), never replacing an icon in the component library — this is a copy-layer accent, not an iconography system.
- **Copy patterns:** lead with the outcome + trust signal. Examples:
  - Hero: "Your Chimney, Expertly Cared For" / "Certified sweeps, same-day inspections, and repairs done right the first time."
  - CTA: "Get a Free Quote", "Call (555) 012-3456", "Schedule Same-Day Service"
  - Trust bar: "Licensed & Insured · CSIA-Certified · Family-Owned Since 1998"
- **Numbers as proof:** years in business, chimneys serviced, star ratings. Keep to 3–4 stats max.

## Visual foundations

- **Color** (logo-derived, per brand spec): white/`#F8FAFC` pages with generous whitespace; Primary Black `#020302` for headings and dark footer/CTA bands; Primary Red `#E30C1D` strictly as the action/accent color — hover `#AA0F1A`, pressed/dark accent `#6F0E13`; body text `#4B5563`, borders `#E5E7EB`, success `#16A34A`. Cards: white on `#E5E7EB` border, hover border may go red. 1–2 dark black full-bleed bands per page for rhythm. Faint red tint `#FEF2F3` for coupons/callouts. No gradients except a subtle black-to-transparent protection scrim over photos.
- **Type:** **EB Garamond 700/800 headings, nav, and buttons** (free substitute for Adobe Garamond Pro — see Fonts caveat below), site-wide per client-referenced direction; Inter 400/500 body at 16px/1.6. Uppercase eyebrows keep the display font at 600 with 0.08em tracking. Hero 56px, H1 44, H2 32, H3 24.
- **Spacing:** 4px base scale; 96px section padding; 1200px container.
- **Corners & borders:** 8px buttons/inputs, 12px cards, 16px dialogs/panels. 1px `#E5E7EB` borders; 2px only for focus/selected.
- **Shadows:** soft charcoal-tinted; cards `--shadow-md`, hover lift to `--shadow-lg`; red CTA glow `--shadow-cta` on primary buttons only.
- **Cards:** white, 12px radius, 1px border + `--shadow-sm`; hover raises shadow, no scale.
- **Imagery:** real photography — warm-toned homes, fireplaces, techs at work. Dark scrim for text overlays. No illustrations.
- **Motion:** restrained; 120–200ms ease fades/color shifts. Hover = darker/lighter color or shadow lift; press = `--accent-pressed`, no shrink. No bounces, no parallax.
- **Focus:** 3px red-tinted ring (`--focus-ring`).

## Iconography

- No icon assets were provided. **Substitution flagged:** [Lucide](https://lucide.dev) via CDN — outline style, 2px stroke, matches the bold-but-clean brand. Use `stroke="currentColor"`, sized 20/24px inline with text, 32–40px in feature cards (in red or charcoal).
- Common glyphs: flame, home, shield-check, wrench, phone, calendar-check, star, check-circle, map-pin, clock.
- No emoji anywhere. Stars for ratings use Lucide `star` filled with `--cm-amber-500`.

## Intentional additions

- `RatingStars` — review ratings are core trust UI for a home-service brand; not in any provided source.

## Caveats

- **Font substitution:** the client-referenced headline treatment uses Adobe Garamond Pro (paid Adobe font, not redistributable here). **EB Garamond** (Google Fonts) is the nearest free match and is now the site-wide display font — headings, nav, and buttons. If you have licensed Adobe Garamond Pro font files, send them and I'll swap the `@font-face` source; the token structure (`--font-display`) won't need to change.
- Fonts otherwise load from Google Fonts (`@import` in `tokens/typography.css`) — no binaries ship with the system. Provide font files if offline use is needed.
- Photography: hero uses a real licensed-free Unsplash photo; other photos use Picsum's real-photo pool as stand-ins (generic, not chimney-specific) — swap in real project photography when available.
