import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './FieldMessage.css'

export type FieldMessageTone = 'default' | 'danger' | 'success'

export type FieldMessageProps = ComponentPropsWithoutRef<'p'> & {
  tone?: FieldMessageTone
}

export const FieldMessage = forwardRef<HTMLParagraphElement, FieldMessageProps>(
  ({ className, tone = 'default', ...props }, ref) => (
    <p
      ref={ref}
      className={cn('ui-field-message', `ui-field-message--${tone}`, className)}
      {...props}
    />
  ),
)

FieldMessage.displayName = 'FieldMessage'
