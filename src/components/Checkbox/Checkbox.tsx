import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { CheckboxIndicator, CheckboxRoot } from '../../headless-primitives'
import { cn } from '../../utils'
import './Checkbox.css'

export type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxRoot> & {
  label?: string
}

export const Checkbox = forwardRef<HTMLElement, CheckboxProps>(
  ({ className, label, children, ...props }, ref) => (
    <label className='ui-checkbox__label'>
      <CheckboxRoot
        ref={ref}
        className={
          typeof className === 'function'
            ? (state) => cn('ui-checkbox', className(state))
            : cn('ui-checkbox', className)
        }
        {...props}
      >
        <CheckboxIndicator className='ui-checkbox__indicator'>
          <span aria-hidden='true'>✓</span>
        </CheckboxIndicator>
      </CheckboxRoot>
      {label ? <span>{label}</span> : children}
    </label>
  ),
)

Checkbox.displayName = 'Checkbox'
