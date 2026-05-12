import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import {
  SelectArrow,
  SelectGroup,
  SelectGroupLabel,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../../headless-primitives'
import { cn } from '../../utils'
import './Select.css'

export const Select = {
  Root: SelectRoot,
  Label: SelectLabel,
  Trigger: forwardRef<
    ComponentRef<typeof SelectTrigger>,
    ComponentPropsWithoutRef<typeof SelectTrigger>
  >(({ className, ...props }, ref) => (
    <SelectTrigger
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-select__trigger', className(state))
          : cn('ui-select__trigger', className)
      }
      {...props}
    />
  )),
  Value: forwardRef<
    ComponentRef<typeof SelectValue>,
    ComponentPropsWithoutRef<typeof SelectValue>
  >(({ className, ...props }, ref) => (
    <SelectValue
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-select__value', className(state))
          : cn('ui-select__value', className)
      }
      {...props}
    />
  )),
  Icon: forwardRef<
    ComponentRef<typeof SelectIcon>,
    ComponentPropsWithoutRef<typeof SelectIcon>
  >(({ className, ...props }, ref) => (
    <SelectIcon
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-select__icon', className(state))
          : cn('ui-select__icon', className)
      }
      {...props}
    />
  )),
  Portal: SelectPortal,
  Positioner: SelectPositioner,
  Popup: forwardRef<
    ComponentRef<typeof SelectPopup>,
    ComponentPropsWithoutRef<typeof SelectPopup>
  >(({ className, ...props }, ref) => (
    <SelectPopup
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-select__popup', className(state))
          : cn('ui-select__popup', className)
      }
      {...props}
    />
  )),
  List: forwardRef<
    ComponentRef<typeof SelectList>,
    ComponentPropsWithoutRef<typeof SelectList>
  >(({ className, ...props }, ref) => (
    <SelectList
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-select__list', className(state))
          : cn('ui-select__list', className)
      }
      {...props}
    />
  )),
  Item: forwardRef<
    ComponentRef<typeof SelectItem>,
    ComponentPropsWithoutRef<typeof SelectItem>
  >(({ className, ...props }, ref) => (
    <SelectItem
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-select__item', className(state))
          : cn('ui-select__item', className)
      }
      {...props}
    />
  )),
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Arrow: SelectArrow,
  ScrollDownArrow: SelectScrollDownArrow,
  ScrollUpArrow: SelectScrollUpArrow,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
  Separator: SelectSeparator,
}

Select.Trigger.displayName = 'Select.Trigger'
Select.Value.displayName = 'Select.Value'
Select.Icon.displayName = 'Select.Icon'
Select.Popup.displayName = 'Select.Popup'
Select.List.displayName = 'Select.List'
Select.Item.displayName = 'Select.Item'
