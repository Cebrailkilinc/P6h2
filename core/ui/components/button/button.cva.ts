import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  '  rounded-[4px]  ',
  {
    variants: {
      variant: {
        primary: 'text-grayBlue-25 border border-primaryGray  hover:bg-secondaryGray  ',   
        secondary: 'border-none hover:bg-secondaryGray '     
      },
      size: {
        xxs:'text-[0.5rem]',
        xsmall:'px-2 py-1 text-[0.625rem]',
        small: 'px-2.5 py-1.5 text-xs',
        medium: 'px-3 py-2 text-sm',
        large: 'px-4 py-2 text-base',
      },
     },
    defaultVariants: {
      variant: 'primary',
      size: 'small',
    },
  }
);
