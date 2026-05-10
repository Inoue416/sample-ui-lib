import type { ComponentPropsWithoutRef } from 'react'
import { Button, Input } from '../../components'
import { cn } from '../../utils'
import './SearchCombobox.css'

export type SearchComboboxProps = ComponentPropsWithoutRef<'form'> & {
  inputProps?: ComponentPropsWithoutRef<typeof Input>
  submitLabel?: string
}

export function SearchCombobox({
  className,
  inputProps,
  submitLabel = 'Search',
  ...props
}: SearchComboboxProps) {
  return (
    <form className={cn('ui-search-combobox', className)} {...props}>
      <Input type='search' {...inputProps} />
      <Button type='submit'>{submitLabel}</Button>
    </form>
  )
}
