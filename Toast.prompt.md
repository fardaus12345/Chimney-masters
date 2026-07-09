import * as React from 'react';

/** Modal dialog. */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Buttons row, right-aligned */
  actions?: React.ReactNode;
  width?: number;
}

export declare function Dialog(props: DialogProps): JSX.Element | null;
