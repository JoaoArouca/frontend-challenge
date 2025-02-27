import { VariantProps } from 'class-variance-authority'

import { clsxm } from '@/utils/clsxm'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary500 text-white shadow hover:bg-primary400',
        secondary: 'bg-gray600 text-white shadow-sm hover:bg-gray500',
        destructive: 'bg-danger500 text-white shadow-sm hover:bg-danger600',
        outline:
          'border border-gray300 bg-transparent shadow-sm hover:bg-gray100',
        ghost: 'hover:bg-gray100 hover:text-gray900',
        link: 'text-primary500 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-[2.5rem] px-[1rem] py-[0.5rem] text-md font-medium',
        sm: 'h-[2rem] rounded-sm px-[0.75rem] text-sm',
        lg: 'h-[3rem] rounded-md px-[1.5rem] text-lg',
        icon: 'h-[2.5rem] w-[2.5rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={clsxm(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
