import * as React from 'react';

/** Uppercase status badge. */
export interface BadgeProps {
  tone?: 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'dark' | 'solid';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
