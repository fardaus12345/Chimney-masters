import React from 'react';

/** Content card. variant: default | feature (icon service card) | tint (red-wash coupon/callout). */
export function Card({ variant = 'default', hoverable = false, icon = null, title, children, footer, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const backgrounds = {
    default: 'var(--surface-card)',
    feature: 'var(--surface-card)',
    tint: 'var(--surface-accent-tint)',
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: backgrounds[variant],
        border: hoverable && hover ? '1px solid var(--border-hover-accent)' : '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: hoverable && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hoverable && hover ? 'translateY(-4px)' : 'translateY(0)',
        padding: 'var(--space-5)',
        fontFamily: 'var(--font-body)',
        transition: 'box-shadow 0.35s var(--ease-standard), border-color 0.35s var(--ease-standard), transform 0.35s var(--ease-standard)',
        display: 'flex', flexDirection: 'column', gap: 12,
        ...style,
      }}
      {...rest}
    >
      {icon && (
        <div style={{
          width: 48, height: 48, borderRadius: 'var(--radius-md)',
          background: 'var(--cm-red-50)', color: 'var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: hoverable && hover ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.35s var(--ease-standard)',
        }}>{icon}</div>
      )}
      {title && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--text-heading)' }}>{title}</div>}
      {children && <div style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>{children}</div>}
      {footer && <div style={{ marginTop: 'auto', paddingTop: 4 }}>{footer}</div>}
    </div>
  );
}
