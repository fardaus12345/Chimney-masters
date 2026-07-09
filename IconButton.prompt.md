Primary action button — red for the one main CTA per view, secondary/dark/ghost elsewhere.

```jsx
<Button variant="primary" size="lg">Get a Free Quote</Button>
<Button variant="secondary">Our Services</Button>
<Button variant="primary" pill icon={<PhoneIcon/>}>Call (555) 012-3456</Button>
```

Variants: `primary` (brick red + glow), `secondary` (charcoal outline), `dark` (solid charcoal — for use on light heroes), `ghost` (red text), `onDark` (translucent white outline — for CTAs sitting on photos/dark bands, since `secondary`'s hover turns near-white and swallows dark text there). Sizes sm/md/lg. `pill` for phone CTAs.
