import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './button.cva';
import * as React from 'react';

// ButtonProps arayüzü
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'color'>, Omit<VariantProps<typeof buttonVariants>, 'disabled' | 'color'> {
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'thirty';
}
