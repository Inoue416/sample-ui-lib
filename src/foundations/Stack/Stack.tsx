import type { ComponentPropsWithoutRef, CSSProperties } from 'react'
import { forwardRef } from 'react'

export type StackProps = ComponentPropsWithoutRef<'div'> & {
  align?: CSSProperties['alignItems']
  gap?: CSSProperties['gap']
  justify?: CSSProperties['justifyContent']
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ align, gap = 16, justify, style, children, ...props }, ref) => (
    <div
      ref={ref}
      style={{
        alignItems: align,
        display: 'flex',
        flexDirection: 'column',
        gap,
        justifyContent: justify,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  ),
)

Stack.displayName = 'Stack'
