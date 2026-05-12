import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import './SettingsSection.css'

export type SettingsSectionProps = ComponentPropsWithoutRef<'section'> & {
  actions?: ReactNode
  children: ReactNode
  description?: ReactNode
  title: ReactNode
}

export function SettingsSection({
  actions,
  children,
  className,
  description,
  title,
  ...props
}: SettingsSectionProps) {
  return (
    <section className={cn('ui-settings-section', className)} {...props}>
      <div className='ui-settings-section__header'>
        <div>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        {actions ? (
          <div className='ui-settings-section__actions'>{actions}</div>
        ) : null}
      </div>
      <div className='ui-settings-section__body'>{children}</div>
    </section>
  )
}
