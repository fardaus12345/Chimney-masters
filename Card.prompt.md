import React from 'react';

/** Small status badge. tone: accent | neutral | success | warning | danger | dark. */
export function Badge({ tone = 'accent', children, style }) {
  const tones = {
    accent:  { background: 'var(--cm-red-100)', color: 'var(--cm-red-700)' },
    neutral: { background: 'var(--cm-gray-100)', color: 'var(--cm-gray-600)' },
    success: { background: 'var(--cm-success-bg)', color: 'var(--cm-success)' },
    warning: { background: 'var(--cm-warning-bg)', color: 'var(--cm-warning)' },
    danger:  { background: 'var(--cm-danger-bg)', color: 'var(--cm-danger)' },
    dark:    { background: 'var(--cm-charcoal-800)', color: '#fff' },
    solid:   { background: 'var(--accent)', color: '#fff' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12,
      letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap',
      padding: '4px 10px', borderRadius: 'var(--radius-sm)',
      ...tones[tone], ...style,
    }}>{children}</span>
  );
}
