import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { RadioIndicator, RadioRoot } from '../../headless-primitives'
import { cn } from '../../utils'
import './Radio.css'

export type RadioProps = ComponentPropsWithoutRef<typeof RadioRoot> & {
  label?: string
}

export const Radio = forwardRef<HTMLElement, RadioProps>(
  ({ className, label, children, ...props }, ref) => (
    <label className='ui-radio__label'>
      <RadioRoot
        ref={ref}
        className={
          typeof className === 'function'
            ? (state) => cn('ui-radio', className(state))
            : cn('ui-radio', className)
        }
        {...props}
      >
        <RadioIndicator className='ui-radio__indicator' />
      </RadioRoot>
      {label ? <span>{label}</span> : children}
    </label>
  ),
)

Radio.displayName = 'Radio'
