import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import './EmptyState.css'

export type EmptyStateProps = ComponentPropsWithoutRef<'section'> & {
  action?: ReactNode
  description?: ReactNode
  icon?: ReactNode
  title: ReactNode
}

export function EmptyState({
  action,
  className,
  description,
  icon,
  title,
  ...props
}: EmptyStateProps) {
  return (
    <section className={cn('ui-empty-state', className)} {...props}>
      {icon ? <div className='ui-empty-state__icon'>{icon}</div> : null}
      <h3 className='ui-empty-state__title'>{title}</h3>
      {description ? (
        <p className='ui-empty-state__description'>{description}</p>
      ) : null}
      {action ? <div className='ui-empty-state__action'>{action}</div> : null}
    </section>
  )
}
