import React from 'react';

/** Star rating row, 0–5 in halves. Amber fill. */
export function RatingStars({ rating = 5, size = 18, showValue = false, valueColor = 'var(--text-heading)', style }) {
  const stars = [0, 1, 2, 3, 4].map(i => Math.max(0, Math.min(1, rating - i)));
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, ...style }}>
      {stars.map((fill, i) => (
        <span key={i} style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}>
          <Star size={size} color="var(--cm-gray-300)" />
          <span style={{ position: 'absolute', inset: 0, overflow: 'hidden', width: `${fill * 100}%` }}>
            <Star size={size} color="var(--cm-amber-500)" />
          </span>
        </span>
      ))}
      {showValue && <span style={{ marginLeft: 6, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: size * 0.85, color: valueColor }}>{rating.toFixed(1)}</span>}
    </span>
  );
}

function Star({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none" style={{ display: 'block' }}>
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
    </svg>
  );
}
