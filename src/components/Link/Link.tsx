import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './Link.css'

export type LinkVariant = 'default' | 'muted'

export type LinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: LinkVariant
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, variant = 'default', ...props }, ref) => (
    <a
      ref={ref}
      className={cn('ui-link', `ui-link--${variant}`, className)}
      {...props}
    >
      {children}
    </a>
  ),
)

Link.displayName = 'Link'
