import React from 'react';

/** Text input with label, hint, and error state. */
export function Input({ label, hint, error, type = 'text', placeholder, value, onChange, textarea = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--cm-danger)' : focus ? 'var(--border-focus)' : 'var(--border-strong)';
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      {label && <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>{label}</span>}
      <Tag
        type={textarea ? undefined : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        rows={textarea ? 4 : undefined}
        style={{
          fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-body)',
          padding: '12px 14px', borderRadius: 'var(--radius-md)',
          border: `1px solid ${borderColor}`,
          boxShadow: focus ? 'var(--focus-ring)' : 'none',
          outline: 'none', background: '#fff', resize: textarea ? 'vertical' : undefined,
          transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)',
        }}
        {...rest}
      />
      {error ? <span style={{ fontSize: 13, color: 'var(--cm-danger)' }}>{error}</span>
             : hint ? <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{hint}</span> : null}
    </label>
  );
}
