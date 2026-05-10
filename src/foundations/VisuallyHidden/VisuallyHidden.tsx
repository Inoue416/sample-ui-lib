import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

export type VisuallyHiddenProps = ComponentPropsWithoutRef<'span'>

export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ style, children, ...props }, ref) => (
    <span
      ref={ref}
      style={{
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: 1,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  ),
)

VisuallyHidden.displayName = 'VisuallyHidden'
