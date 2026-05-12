import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import './Stepper.css'

export type StepperItem = {
  label: ReactNode
  status?: 'complete' | 'current' | 'upcoming'
}

export type StepperProps = ComponentPropsWithoutRef<'ol'> & {
  items: StepperItem[]
}

export function Stepper({ className, items, ...props }: StepperProps) {
  return (
    <ol className={cn('ui-stepper', className)} {...props}>
      {items.map((item, index) => (
        <li
          className={cn(
            'ui-stepper__item',
            `ui-stepper__item--${item.status ?? 'upcoming'}`,
          )}
          key={index}
        >
          <span className='ui-stepper__index'>{index + 1}</span>
          <span className='ui-stepper__label'>{item.label}</span>
        </li>
      ))}
    </ol>
  )
}
