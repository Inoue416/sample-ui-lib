import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import './Toast.css'

export type ToastTone = 'info' | 'success' | 'danger'

export type ToastProps = ComponentPropsWithoutRef<'aside'> & {
  action?: ReactNode
  description?: ReactNode
  title: ReactNode
  tone?: ToastTone
}

export function Toast({
  action,
  className,
  description,
  title,
  tone = 'info',
  ...props
}: ToastProps) {
  return (
    <aside
      aria-live='polite'
      className={cn('ui-toast', `ui-toast--${tone}`, className)}
      role='status'
      {...props}
    >
      <div>
        <strong className='ui-toast__title'>{title}</strong>
        {description ? (
          <p className='ui-toast__description'>{description}</p>
        ) : null}
      </div>
      {action ? <div className='ui-toast__action'>{action}</div> : null}
    </aside>
  )
}
