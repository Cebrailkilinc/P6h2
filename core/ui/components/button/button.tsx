import * as React from 'react';
import { cn } from '@/packages/util/cn';
import { buttonVariants } from './button.cva';
import { ButtonProps } from './button.type';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, disabled, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(buttonVariants({ variant, size }), className)}
    disabled={!!disabled} // Burada !! operatörü ile boolean değere dönüştürüyoruz
    {...props}
  />
));

Button.displayName = 'Button';

export { Button };
