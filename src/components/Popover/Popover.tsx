import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import {
  PopoverBackdrop,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
  PopoverViewport,
} from '../../headless-primitives'
import { cn } from '../../utils'
import './Popover.css'

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Positioner: PopoverPositioner,
  Popup: forwardRef<
    ComponentRef<typeof PopoverPopup>,
    ComponentPropsWithoutRef<typeof PopoverPopup>
  >(({ className, ...props }, ref) => (
    <PopoverPopup
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-popover__popup', className(state))
          : cn('ui-popover__popup', className)
      }
      {...props}
    />
  )),
  Backdrop: PopoverBackdrop,
  Title: forwardRef<
    ComponentRef<typeof PopoverTitle>,
    ComponentPropsWithoutRef<typeof PopoverTitle>
  >(({ className, ...props }, ref) => (
    <PopoverTitle
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-popover__title', className(state))
          : cn('ui-popover__title', className)
      }
      {...props}
    />
  )),
  Description: forwardRef<
    ComponentRef<typeof PopoverDescription>,
    ComponentPropsWithoutRef<typeof PopoverDescription>
  >(({ className, ...props }, ref) => (
    <PopoverDescription
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-popover__description', className(state))
          : cn('ui-popover__description', className)
      }
      {...props}
    />
  )),
  Close: PopoverClose,
  Viewport: PopoverViewport,
}

Popover.Popup.displayName = 'Popover.Popup'
Popover.Title.displayName = 'Popover.Title'
Popover.Description.displayName = 'Popover.Description'
