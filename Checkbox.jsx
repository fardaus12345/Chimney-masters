import * as React from 'react';

/** Hover tooltip. */
export interface TooltipProps {
  text: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Tooltip(props: TooltipProps): JSX.Element;
