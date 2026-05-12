import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import {
  MenuBackdrop,
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuLinkItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
  MenuViewport,
} from '../../headless-primitives'
import { cn } from '../../utils'
import './DropdownMenu.css'

export const DropdownMenu = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Portal: MenuPortal,
  Positioner: MenuPositioner,
  Popup: forwardRef<
    ComponentRef<typeof MenuPopup>,
    ComponentPropsWithoutRef<typeof MenuPopup>
  >(({ className, ...props }, ref) => (
    <MenuPopup
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-dropdown-menu__popup', className(state))
          : cn('ui-dropdown-menu__popup', className)
      }
      {...props}
    />
  )),
  Item: forwardRef<
    ComponentRef<typeof MenuItem>,
    ComponentPropsWithoutRef<typeof MenuItem>
  >(({ className, ...props }, ref) => (
    <MenuItem
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-dropdown-menu__item', className(state))
          : cn('ui-dropdown-menu__item', className)
      }
      {...props}
    />
  )),
  CheckboxItem: MenuCheckboxItem,
  CheckboxItemIndicator: MenuCheckboxItemIndicator,
  RadioGroup: MenuRadioGroup,
  RadioItem: MenuRadioItem,
  RadioItemIndicator: MenuRadioItemIndicator,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  LinkItem: MenuLinkItem,
  Backdrop: MenuBackdrop,
  Viewport: MenuViewport,
  Separator: MenuSeparator,
}

DropdownMenu.Popup.displayName = 'DropdownMenu.Popup'
DropdownMenu.Item.displayName = 'DropdownMenu.Item'
