import * as React from 'react';

/** Amber star rating (0–5, halves supported). */
export interface RatingStarsProps {
  rating?: number;
  /** Star size px */
  size?: number;
  /** Show numeric value after the stars */
  showValue?: boolean;
  /** Color of the numeric value text — override to '#fff' on dark/photo backgrounds */
  valueColor?: string;
  style?: React.CSSProperties;
}

export declare function RatingStars(props: RatingStarsProps): JSX.Element;
