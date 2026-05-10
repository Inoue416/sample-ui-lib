import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './Badge.css'

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'danger'

export type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  variant?: BadgeVariant
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'neutral', children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('ui-badge', `ui-badge--${variant}`, className)}
      {...props}
    >
      {children}
    </span>
  ),
)

Badge.displayName = 'Badge'
