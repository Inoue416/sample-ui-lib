import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

export type TextProps = ComponentPropsWithoutRef<'p'>

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, ...props }, ref) => (
    <p ref={ref} {...props}>
      {children}
    </p>
  ),
)

Text.displayName = 'Text'
