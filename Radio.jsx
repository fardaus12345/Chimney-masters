import React from 'react';

/** Checkbox with label. Controlled via checked/onChange or uncontrolled. */
export function Checkbox({ label, checked, defaultChecked = false, onChange, disabled = false, style }) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(v => !v);
    onChange && onChange(!isChecked);
  };
  return (
    <label onClick={toggle} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)', userSelect: 'none', ...style }}>
      <span style={{
        width: 20, height: 20, borderRadius: 'var(--radius-sm)', flex: 'none',
        border: isChecked ? '1px solid var(--accent)' : '1px solid var(--border-strong)',
        background: isChecked ? 'var(--accent)' : '#fff',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--duration-fast), border-color var(--duration-fast)',
      }}>
        {isChecked && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
      </span>
      {label}
    </label>
  );
}
