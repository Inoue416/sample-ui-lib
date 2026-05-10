import type { ComponentPropsWithoutRef, CSSProperties } from 'react'
import { forwardRef } from 'react'

export type GridProps = ComponentPropsWithoutRef<'div'> & {
  columns?: CSSProperties['gridTemplateColumns']
  gap?: CSSProperties['gap']
  rows?: CSSProperties['gridTemplateRows']
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ columns, gap, rows, style, children, ...props }, ref) => (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gap,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  ),
)

Grid.displayName = 'Grid'
