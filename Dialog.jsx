import React from 'react';

/** Quiet label chip (service areas, filters). Optional onRemove shows an ×. */
export function Tag({ children, onRemove, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13,
      color: 'var(--cm-gray-600)', background: '#fff',
      border: '1px solid var(--border-default)',
      padding: '4px 12px', borderRadius: 'var(--radius-full)',
      ...style,
    }}>
      {children}
      {onRemove && (
        <button onClick={onRemove} aria-label="Remove" style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0, color: 'var(--cm-gray-400)', fontSize: 14, lineHeight: 1 }}>×</button>
      )}
    </span>
  );
}
