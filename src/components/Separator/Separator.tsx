import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './Separator.css'

export type SeparatorOrientation = 'horizontal' | 'vertical'

export type SeparatorProps = ComponentPropsWithoutRef<'div'> & {
  orientation?: SeparatorOrientation
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => (
    <div
      ref={ref}
      aria-orientation={orientation}
      className={cn('ui-separator', `ui-separator--${orientation}`, className)}
      role='separator'
      {...props}
    />
  ),
)

Separator.displayName = 'Separator'
