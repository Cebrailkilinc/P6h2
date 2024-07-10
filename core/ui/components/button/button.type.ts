import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './button.cva';
import * as React from 'react';

// ButtonProps arayüzü
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Omit<VariantProps<typeof buttonVariants>, 'disabled'> {
  disabled?: boolean;
}
