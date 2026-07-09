<!-- @dsCard group="Components" viewport="700x240" name="Actions" subtitle="Button variants + IconButton" -->
<!DOCTYPE html>
<html><head>
<link rel="stylesheet" href="../../styles.css">
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
<script src="../../_ds_bundle.js"></script>
<style>body{margin:0;padding:20px 24px}</style>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
const { Button, IconButton } = window.ChimneyMastersDesignSystem_aca12a;
const phone = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{display:'flex', flexDirection:'column', gap:16}}>
    <div style={{display:'flex', gap:12, alignItems:'center', flexWrap:'wrap'}}>
      <Button variant="primary">Get a Free Quote</Button>
      <Button variant="secondary">Our Services</Button>
      <Button variant="dark">Schedule Inspection</Button>
      <Button variant="ghost">Learn More</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
    <div style={{display:'flex', gap:12, alignItems:'center', flexWrap:'wrap'}}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="lg">Large CTA</Button>
      <Button variant="primary" pill icon={phone}>Call (555) 012-3456</Button>
      <IconButton label="Call" variant="accent">{phone}</IconButton>
      <IconButton label="Call" variant="default">{phone}</IconButton>
      <IconButton label="Call" variant="dark">{phone}</IconButton>
    </div>
  </div>
);
</script>
</body></html>
