import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './Input.css'

export type InputSize = 'sm' | 'md' | 'lg'

export type InputProps = ComponentPropsWithoutRef<'input'> & {
  invalid?: boolean
  size?: InputSize
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid = false, size = 'md', ...props }, ref) => (
    <input
      ref={ref}
      aria-invalid={invalid || props['aria-invalid']}
      className={cn(
        'ui-input',
        `ui-input--${size}`,
        invalid && 'ui-input--invalid',
        className,
      )}
      {...props}
    />
  ),
)

Input.displayName = 'Input'
