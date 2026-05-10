import type { ComponentPropsWithoutRef, CSSProperties } from 'react'
import { forwardRef } from 'react'

export type FlexProps = ComponentPropsWithoutRef<'div'> & {
  align?: CSSProperties['alignItems']
  direction?: CSSProperties['flexDirection']
  gap?: CSSProperties['gap']
  justify?: CSSProperties['justifyContent']
  wrap?: CSSProperties['flexWrap']
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    { align, direction = 'row', gap, justify, style, wrap, children, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      style={{
        alignItems: align,
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap,
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

Flex.displayName = 'Flex'
