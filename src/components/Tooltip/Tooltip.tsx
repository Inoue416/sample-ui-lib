import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import {
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipViewport,
} from '../../headless-primitives'
import { cn } from '../../utils'
import './Tooltip.css'

export const Tooltip = {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Positioner: TooltipPositioner,
  Popup: forwardRef<
    ComponentRef<typeof TooltipPopup>,
    ComponentPropsWithoutRef<typeof TooltipPopup>
  >(({ className, ...props }, ref) => (
    <TooltipPopup
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-tooltip__popup', className(state))
          : cn('ui-tooltip__popup', className)
      }
      {...props}
    />
  )),
  Arrow: TooltipArrow,
  Viewport: TooltipViewport,
}

Tooltip.Popup.displayName = 'Tooltip.Popup'
