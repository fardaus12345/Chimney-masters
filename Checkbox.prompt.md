import React from 'react';

/** Hover tooltip. Wraps children; dark charcoal bubble above. */
export function Tooltip({ text, children, style }) {
  const [show, setShow] = React.useState(false);
  return (
    <span
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ position: 'relative', display: 'inline-flex', ...style }}
    >
      {children}
      {show && (
        <span role="tooltip" style={{
          position: 'absolute', bottom: '100%', left: '50%', transform: 'translate(-50%, -8px)',
          background: 'var(--cm-charcoal-800)', color: '#fff',
          fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
          padding: '6px 10px', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap',
          boxShadow: 'var(--shadow-md)', zIndex: 50, pointerEvents: 'none',
        }}>{text}</span>
      )}
    </span>
  );
}
