import type { ReactNode } from 'react'
import { cloneElement, isValidElement, useId } from 'react'
import { FieldMessage, FormLabel } from '../../components'
import './FormField.css'

export type FormFieldProps = {
  children: ReactNode
  error?: string
  helperText?: string
  id?: string
  label: string
}

type ControlProps = {
  'aria-describedby'?: string
  'aria-invalid'?: boolean | 'false' | 'true'
  id?: string
}

export function FormField({
  children,
  error,
  helperText,
  id,
  label,
}: FormFieldProps) {
  const generatedId = useId()
  const fieldId = id ?? generatedId
  const message = error ?? helperText
  const messageId = message ? `${fieldId}-message` : undefined
  const control = isValidElement<ControlProps>(children)
    ? cloneElement(children, {
        'aria-describedby': [children.props['aria-describedby'], messageId]
          .filter(Boolean)
          .join(' '),
        'aria-invalid': error ? true : children.props['aria-invalid'],
        id: children.props.id ?? fieldId,
      })
    : children

  return (
    <div className='ui-form-field'>
      <FormLabel className='ui-form-field__label' htmlFor={fieldId}>
        {label}
      </FormLabel>
      <div className='ui-form-field__control'>{control}</div>
      {message ? (
        <FieldMessage
          id={messageId}
          className='ui-form-field__message'
          tone={error ? 'danger' : 'default'}
        >
          {message}
        </FieldMessage>
      ) : null}
    </div>
  )
}
