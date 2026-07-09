import * as React from 'react';

/** Quiet pill label. */
export interface TagProps {
  children?: React.ReactNode;
  onRemove?: () => void;
  style?: React.CSSProperties;
}

export declare function Tag(props: TagProps): JSX.Element;
