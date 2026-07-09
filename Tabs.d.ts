import React from 'react';

/** Native select styled to match Input. options: [{value, label}] or strings. */
export function Select({ label, options = [], value, onChange, placeholder, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const opts = options.map(o => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      {label && <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>{label}</span>}
      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%', appearance: 'none', fontFamily: 'var(--font-body)', fontSize: 16,
            color: value ? 'var(--text-body)' : 'var(--text-muted)',
            padding: '12px 40px 12px 14px', borderRadius: 'var(--radius-md)',
            border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-strong)'}`,
            boxShadow: focus ? 'var(--focus-ring)' : 'none',
            outline: 'none', background: '#fff', cursor: 'pointer',
          }}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {opts.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cm-gray-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </label>
  );
}
