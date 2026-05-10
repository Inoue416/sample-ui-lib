import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { SwitchRoot, SwitchThumb } from '../../headless-primitives'
import { cn } from '../../utils'
import './Switch.css'

export type SwitchProps = ComponentPropsWithoutRef<typeof SwitchRoot> & {
  label?: string
}

export const Switch = forwardRef<HTMLElement, SwitchProps>(
  ({ className, label, children, ...props }, ref) => (
    <label className='ui-switch__label'>
      <SwitchRoot
        ref={ref}
        className={
          typeof className === 'function'
            ? (state) => cn('ui-switch', className(state))
            : cn('ui-switch', className)
        }
        {...props}
      >
        <SwitchThumb className='ui-switch__thumb' />
      </SwitchRoot>
      {label ? <span>{label}</span> : children}
    </label>
  ),
)

Switch.displayName = 'Switch'
