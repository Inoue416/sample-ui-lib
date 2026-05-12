import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './Skeleton.css'

export type SkeletonProps = ComponentPropsWithoutRef<'div'>

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden='true'
      className={cn('ui-skeleton', className)}
      {...props}
    />
  ),
)

Skeleton.displayName = 'Skeleton'
