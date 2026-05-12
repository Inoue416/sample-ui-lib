import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import './FilterBar.css'

export type FilterBarProps = ComponentPropsWithoutRef<'section'> & {
  actions?: ReactNode
  children: ReactNode
}

export function FilterBar({
  actions,
  children,
  className,
  ...props
}: FilterBarProps) {
  return (
    <section className={cn('ui-filter-bar', className)} {...props}>
      <div className='ui-filter-bar__controls'>{children}</div>
      {actions ? <div className='ui-filter-bar__actions'>{actions}</div> : null}
    </section>
  )
}
