import { RadioGroup as HeadlessRadioGroup } from '@base-ui/react/radio-group'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import { Radio } from '../Radio'
import './RadioGroup.css'

export type RadioGroupOption = {
  label: ReactNode
  value: string
}

export type RadioGroupProps = ComponentPropsWithoutRef<
  typeof HeadlessRadioGroup
> & {
  legend?: ReactNode
  options: RadioGroupOption[]
}

export function RadioGroup({
  className,
  legend,
  options,
  ...props
}: RadioGroupProps) {
  return (
    <fieldset className='ui-radio-group__fieldset'>
      {legend ? <legend>{legend}</legend> : null}
      <HeadlessRadioGroup
        className={
          typeof className === 'function'
            ? (state) => cn('ui-radio-group', className(state))
            : cn('ui-radio-group', className)
        }
        {...props}
      >
        {options.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </HeadlessRadioGroup>
    </fieldset>
  )
}
