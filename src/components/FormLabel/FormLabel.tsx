import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './FormLabel.css'

export type FormLabelProps = ComponentPropsWithoutRef<'label'> & {
  required?: boolean
}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, children, required = false, ...props }, ref) => (
    <label ref={ref} className={cn('ui-form-label', className)} {...props}>
      <span>{children}</span>
      {required ? (
        <span aria-hidden='true' className='ui-form-label__required'>
          *
        </span>
      ) : null}
    </label>
  ),
)

FormLabel.displayName = 'FormLabel'
