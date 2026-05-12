import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import './Timeline.css'

export type TimelineItem = {
  content: ReactNode
  title: ReactNode
}

export type TimelineProps = ComponentPropsWithoutRef<'ol'> & {
  items: TimelineItem[]
}

export function Timeline({ className, items, ...props }: TimelineProps) {
  return (
    <ol className={cn('ui-timeline', className)} {...props}>
      {items.map((item, index) => (
        <li className='ui-timeline__item' key={index}>
          <span aria-hidden='true' className='ui-timeline__marker' />
          <div>
            <strong className='ui-timeline__title'>{item.title}</strong>
            <div className='ui-timeline__content'>{item.content}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}
