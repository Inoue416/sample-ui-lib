import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import './Breadcrumb.css'

export type BreadcrumbItem = {
  current?: boolean
  href?: string
  label: ReactNode
}

export type BreadcrumbProps = ComponentPropsWithoutRef<'nav'> & {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ className, items, ...props }: BreadcrumbProps) {
  return (
    <nav
      aria-label='Breadcrumb'
      className={cn('ui-breadcrumb', className)}
      {...props}
    >
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item.current ? (
              <span aria-current='page'>{item.label}</span>
            ) : (
              <a href={item.href ?? '#'}>{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
