import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './Textarea.css'

export type TextareaProps = ComponentPropsWithoutRef<'textarea'> & {
  invalid?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid = false, rows = 4, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={rows}
      aria-invalid={invalid || props['aria-invalid']}
      className={cn(
        'ui-textarea',
        invalid && 'ui-textarea--invalid',
        className,
      )}
      {...props}
    />
  ),
)

Textarea.displayName = 'Textarea'
