import * as React from 'react';

/** Toast / notification bar. */
export interface ToastProps {
  tone?: 'success' | 'danger' | 'neutral';
  children?: React.ReactNode;
  onDismiss?: () => void;
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): JSX.Element;
