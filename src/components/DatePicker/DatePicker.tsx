import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { Input } from '../Input'

export type DatePickerProps = Omit<
  ComponentPropsWithoutRef<typeof Input>,
  'type'
>

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props, ref) => <Input ref={ref} type='date' {...props} />,
)

DatePicker.displayName = 'DatePicker'
