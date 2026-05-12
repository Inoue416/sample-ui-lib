import { CheckboxGroup as HeadlessCheckboxGroup } from '@base-ui/react/checkbox-group'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils'
import { Checkbox } from '../Checkbox'
import './CheckboxGroup.css'

export type CheckboxGroupOption = {
  label: ReactNode
  value: string
}

export type CheckboxGroupProps = ComponentPropsWithoutRef<'fieldset'> & {
  groupProps?: ComponentPropsWithoutRef<typeof HeadlessCheckboxGroup>
  legend?: ReactNode
  options: CheckboxGroupOption[]
}

export function CheckboxGroup({
  className,
  groupProps,
  legend,
  options,
  ...props
}: CheckboxGroupProps) {
  const groupClassName = groupProps?.className

  return (
    <fieldset className={cn('ui-checkbox-group', className)} {...props}>
      {legend ? <legend>{legend}</legend> : null}
      <HeadlessCheckboxGroup
        {...groupProps}
        className={
          typeof groupClassName === 'function'
            ? (state) => cn('ui-checkbox-group__options', groupClassName(state))
            : cn('ui-checkbox-group__options', groupClassName)
        }
      >
        {options.map((option) => (
          <Checkbox key={option.value} value={option.value}>
            {option.label}
          </Checkbox>
        ))}
      </HeadlessCheckboxGroup>
    </fieldset>
  )
}
