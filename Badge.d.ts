import React from 'react';

/** Square icon-only button. variant: default (outline) | dark | accent. */
export function IconButton({ variant = 'default', size = 40, label, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const palettes = {
    default: {
      idle: { background: '#fff', color: 'var(--cm-charcoal-800)', border: '1px solid var(--border-strong)' },
      hover: { background: 'var(--cm-gray-50)', color: 'var(--cm-charcoal-800)', border: '1px solid var(--cm-gray-400)' },
    },
    dark: {
      idle: { background: 'var(--cm-charcoal-800)', color: '#fff', border: '1px solid transparent' },
      hover: { background: 'var(--cm-charcoal-700)', color: '#fff', border: '1px solid transparent' },
    },
    accent: {
      idle: { background: 'var(--accent)', color: '#fff', border: '1px solid transparent' },
      hover: { background: 'var(--accent-hover)', color: '#fff', border: '1px solid transparent' },
    },
  };
  const p = palettes[variant][hover ? 'hover' : 'idle'];
  return (
    <button
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-md)', cursor: 'pointer',
        transition: 'background var(--duration-fast) var(--ease-standard)',
        ...p, ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
