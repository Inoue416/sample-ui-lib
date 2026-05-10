import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

export type BoxProps = ComponentPropsWithoutRef<'div'>

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  ),
)

Box.displayName = 'Box'
