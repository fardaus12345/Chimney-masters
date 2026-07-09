import * as React from 'react';

/**
 * Content / service card.
 * @startingPoint section="Components" subtitle="Service, feature & coupon cards" viewport="700x300"
 */
export interface CardProps {
  /** default | feature (icon service card) | tint (red-wash coupon) */
  variant?: 'default' | 'feature' | 'tint';
  /** Lift shadow on hover */
  hoverable?: boolean;
  /** 24px icon rendered in a red-tinted square */
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): JSX.Element;
