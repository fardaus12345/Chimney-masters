import * as React from 'react';

/**
 * Primary action button.
 * @startingPoint section="Components" subtitle="Red CTA, outline, dark & ghost variants" viewport="700x220"
 */
export interface ButtonProps {
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost' | 'onDark';
  size?: 'sm' | 'md' | 'lg';
  /** Fully-rounded — used for phone-number CTAs */
  pill?: boolean;
  disabled?: boolean;
  /** Optional leading icon node (Lucide, 20px) */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export declare function Button(props: ButtonProps): JSX.Element;
