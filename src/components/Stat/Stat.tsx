import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import './Stat.css'

export type StatProps = ComponentPropsWithoutRef<'section'> & {
  helper?: ReactNode
  label: ReactNode
  value: ReactNode
}

export function Stat({ className, helper, label, value, ...props }: StatProps) {
  return (
    <section className={cn('ui-stat', className)} {...props}>
      <p className='ui-stat__label'>{label}</p>
      <strong className='ui-stat__value'>{value}</strong>
      {helper ? <p className='ui-stat__helper'>{helper}</p> : null}
    </section>
  )
}

export const Metric = Stat
