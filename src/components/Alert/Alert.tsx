import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './Alert.css'

export type AlertVariant = 'info' | 'success' | 'danger'

export type AlertProps = ComponentPropsWithoutRef<'div'> & {
  variant?: AlertVariant
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { className, role = 'status', variant = 'info', children, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      role={role}
      className={cn('ui-alert', `ui-alert--${variant}`, className)}
      {...props}
    >
      {children}
    </div>
  ),
)

Alert.displayName = 'Alert'
