import * as React from 'react';

/** Labeled text input / textarea. */
export interface InputProps {
  label?: string;
  hint?: string;
  /** Error message — turns border red and replaces hint */
  error?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Render a 4-row textarea instead */
  textarea?: boolean;
  style?: React.CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
