import React from 'react';
import { Button } from '../actions/Button.jsx';

/** Modal dialog with scrim. Controlled via open/onClose. */
export function Dialog({ open, onClose, title, children, actions, width = 480 }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(17, 24, 39, 0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 24,
      }}
    >
      <div
        role="dialog" aria-modal="true"
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)',
          width, maxWidth: '100%', padding: 'var(--space-6)',
          display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--font-body)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--text-heading)' }}>{title}</div>
          <button onClick={onClose} aria-label="Close" style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--cm-gray-500)', fontSize: 22, lineHeight: 1, padding: 4 }}>×</button>
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>{children}</div>
        {actions && <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>{actions}</div>}
      </div>
    </div>
  );
}
