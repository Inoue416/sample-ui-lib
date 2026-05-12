import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './Slider.css'

export type SliderProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'>

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn('ui-slider', className)}
      type='range'
      {...props}
    />
  ),
)

Slider.displayName = 'Slider'
