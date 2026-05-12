import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import './DescriptionList.css'

export type DescriptionListItem = {
  label: ReactNode
  value: ReactNode
}

export type DescriptionListProps = ComponentPropsWithoutRef<'dl'> & {
  items: DescriptionListItem[]
}

export function DescriptionList({
  className,
  items,
  ...props
}: DescriptionListProps) {
  return (
    <dl className={cn('ui-description-list', className)} {...props}>
      {items.map((item, index) => (
        <div className='ui-description-list__item' key={index}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
