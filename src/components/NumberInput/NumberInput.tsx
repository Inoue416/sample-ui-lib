import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { Input } from '../Input'
import './NumberInput.css'

export type NumberInputProps = Omit<
  ComponentPropsWithoutRef<typeof Input>,
  'type'
>

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => (
    <Input ref={ref} className='ui-number-input' type='number' {...props} />
  ),
)

NumberInput.displayName = 'NumberInput'
