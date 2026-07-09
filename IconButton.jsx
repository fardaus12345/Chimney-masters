import React from 'react';

/**
 * Chimney Masters button. variant: primary (red), secondary (charcoal outline),
 * dark (solid charcoal), ghost (text). size: sm | md | lg. pill for phone CTAs.
 */
export function Button({ variant = 'primary', size = 'md', pill = false, disabled = false, icon = null, children, style, ...rest }) {
  const [state, setState] = React.useState('idle'); // idle | hover | active
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 14 },
    md: { padding: '12px 24px', fontSize: 16 },
    lg: { padding: '16px 32px', fontSize: 18 },
  };
  const palettes = {
    primary: {
      idle:   { background: 'var(--accent)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-cta)', transform: 'translateY(0) scale(1)' },
      hover:  { background: 'var(--accent-hover)', color: '#fff', border: '1px solid transparent', boxShadow: '0 8px 24px rgba(227,12,29,0.38)', transform: 'translateY(-2px) scale(1.015)' },
      active: { background: 'var(--accent-pressed)', color: '#fff', border: '1px solid transparent', boxShadow: 'none', transform: 'translateY(0) scale(0.98)' },
    },
    secondary: {
      idle:   { background: 'transparent', color: 'var(--cm-charcoal-800)', border: '1px solid var(--border-strong)', transform: 'translateY(0) scale(1)' },
      hover:  { background: 'var(--cm-gray-50)', color: 'var(--cm-charcoal-800)', border: '1px solid var(--cm-gray-400)', transform: 'translateY(-2px) scale(1.015)' },
      active: { background: 'var(--cm-gray-100)', color: 'var(--cm-charcoal-800)', border: '1px solid var(--cm-gray-400)', transform: 'translateY(0) scale(0.98)' },
    },
    dark: {
      idle:   { background: 'var(--cm-charcoal-800)', color: '#fff', border: '1px solid transparent', transform: 'translateY(0) scale(1)' },
      hover:  { background: 'var(--cm-charcoal-700)', color: '#fff', border: '1px solid transparent', transform: 'translateY(-2px) scale(1.015)' },
      active: { background: 'var(--cm-charcoal-900)', color: '#fff', border: '1px solid transparent', transform: 'translateY(0) scale(0.98)' },
    },
    ghost: {
      idle:   { background: 'transparent', color: 'var(--accent)', border: '1px solid transparent', transform: 'translateY(0) scale(1)' },
      hover:  { background: 'var(--cm-red-50)', color: 'var(--accent-pressed)', border: '1px solid transparent', transform: 'translateY(0) scale(1)' },
      active: { background: 'var(--cm-red-100)', color: 'var(--accent-pressed)', border: '1px solid transparent', transform: 'translateY(0) scale(0.98)' },
    },
    onDark: {
      idle:   { background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', transform: 'translateY(0) scale(1)' },
      hover:  { background: 'rgba(255,255,255,0.16)', color: '#fff', border: '1px solid rgba(255,255,255,0.65)', transform: 'translateY(-2px) scale(1.015)' },
      active: { background: 'rgba(255,255,255,0.24)', color: '#fff', border: '1px solid rgba(255,255,255,0.65)', transform: 'translateY(0) scale(0.98)' },
    },
  };
  const p = palettes[variant][disabled ? 'idle' : state];
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setState('hover')}
      onMouseLeave={() => setState('idle')}
      onMouseDown={() => setState('active')}
      onMouseUp={() => setState('hover')}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.01em', whiteSpace: 'nowrap',
        borderRadius: pill ? 'var(--radius-full)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background 0.3s var(--ease-standard), box-shadow 0.3s var(--ease-standard), transform 0.3s var(--ease-standard), border-color 0.3s var(--ease-standard)',
        ...sizes[size], ...p, ...style,
      }}
      {...rest}
    >
      {icon}{children}
    </button>
  );
}
