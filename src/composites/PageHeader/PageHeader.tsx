import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import './PageHeader.css'

export type PageHeaderProps = ComponentPropsWithoutRef<'header'> & {
  actions?: ReactNode
  description?: ReactNode
  eyebrow?: ReactNode
  title: ReactNode
}

export function PageHeader({
  actions,
  className,
  description,
  eyebrow,
  title,
  ...props
}: PageHeaderProps) {
  return (
    <header className={cn('ui-page-header', className)} {...props}>
      <div className='ui-page-header__content'>
        {eyebrow ? <p className='ui-page-header__eyebrow'>{eyebrow}</p> : null}
        <h1 className='ui-page-header__title'>{title}</h1>
        {description ? (
          <p className='ui-page-header__description'>{description}</p>
        ) : null}
      </div>
      {actions ? (
        <div className='ui-page-header__actions'>{actions}</div>
      ) : null}
    </header>
  )
}
