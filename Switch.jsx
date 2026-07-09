import React from 'react';

/** Radio group. options: strings or {value,label}. */
export function Radio({ label, options = [], value, defaultValue, onChange, name, direction = 'column', style }) {
  const [internal, setInternal] = React.useState(defaultValue);
  const selected = value !== undefined ? value : internal;
  const opts = options.map(o => (typeof o === 'string' ? { value: o, label: o } : o));
  const pick = v => { if (value === undefined) setInternal(v); onChange && onChange(v); };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-body)', ...style }}>
      {label && <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>{label}</span>}
      <div style={{ display: 'flex', flexDirection: direction, gap: direction === 'row' ? 20 : 10 }}>
        {opts.map(o => {
          const on = selected === o.value;
          return (
            <label key={o.value} onClick={() => pick(o.value)} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 15, color: 'var(--text-body)', userSelect: 'none' }}>
              <span style={{
                width: 20, height: 20, borderRadius: '50%', flex: 'none', boxSizing: 'border-box',
                border: on ? '6px solid var(--accent)' : '1px solid var(--border-strong)',
                background: '#fff', transition: 'border var(--duration-fast)',
              }}></span>
              {o.label}
            </label>
          );
        })}
      </div>
    </div>
  );
}
