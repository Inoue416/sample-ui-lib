import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './Spinner.css'

export type SpinnerSize = 'sm' | 'md' | 'lg'

export type SpinnerProps = ComponentPropsWithoutRef<'span'> & {
  label?: string
  size?: SpinnerSize
}

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, label = 'Loading', size = 'md', ...props }, ref) => (
    <span
      ref={ref}
      aria-label={label}
      role='status'
      className={cn('ui-spinner', `ui-spinner--${size}`, className)}
      {...props}
    />
  ),
)

Spinner.displayName = 'Spinner'
