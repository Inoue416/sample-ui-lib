import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './Progress.css'

export type ProgressProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
> & {
  label?: string
  max?: number
  value: number
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, label = 'Progress', max = 100, value, ...props }, ref) => {
    const boundedValue = Math.min(Math.max(value, 0), max)
    const percentage = max === 0 ? 0 : (boundedValue / max) * 100

    return (
      <div
        ref={ref}
        aria-label={label}
        aria-valuemax={max}
        aria-valuemin={0}
        aria-valuenow={boundedValue}
        className={cn('ui-progress', className)}
        role='progressbar'
        {...props}
      >
        <span
          className='ui-progress__indicator'
          style={{ width: `${percentage}%` }}
        />
      </div>
    )
  },
)

Progress.displayName = 'Progress'
