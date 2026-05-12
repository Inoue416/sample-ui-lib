import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import './Toolbar.css'

export type ToolbarProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode
  label?: string
}

export function Toolbar({
  children,
  className,
  label = 'Toolbar',
  ...props
}: ToolbarProps) {
  return (
    <div
      aria-label={label}
      className={cn('ui-toolbar', className)}
      role='toolbar'
      {...props}
    >
      {children}
    </div>
  )
}
