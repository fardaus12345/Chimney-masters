<!-- @dsCard group="Components" viewport="700x340" name="Display" subtitle="Card, Badge, Tag, RatingStars" -->
<!DOCTYPE html>
<html><head>
<link rel="stylesheet" href="../../styles.css">
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
<script src="../../_ds_bundle.js"></script>
<style>body{margin:0;padding:20px 24px;background:var(--cm-gray-50)}</style>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
const { Card, Badge, Tag, RatingStars } = window.ChimneyMastersDesignSystem_aca12a;
const flame = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>;
ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{display:'flex', flexDirection:'column', gap:16}}>
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
      <Card variant="feature" hoverable icon={flame} title="Chimney Sweep">Full brush-and-vacuum cleaning with before/after photos.</Card>
      <Card variant="tint" title="$50 Off First Sweep" footer={<Badge tone="solid">Save $50</Badge>}>New customers. Mention code SWEEP50 when you call.</Card>
    </div>
    <div style={{display:'flex', gap:10, alignItems:'center', flexWrap:'wrap'}}>
      <Badge tone="solid">Same-Day</Badge>
      <Badge tone="accent">Popular</Badge>
      <Badge tone="success">Certified</Badge>
      <Badge tone="warning">Limited</Badge>
      <Badge tone="dark">Premium</Badge>
      <Tag>Fairfield County</Tag>
      <Tag onRemove={() => {}}>Masonry</Tag>
      <RatingStars rating={4.9} showValue />
    </div>
  </div>
);
</script>
</body></html>
