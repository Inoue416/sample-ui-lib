import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import {
  DialogBackdrop,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
  DialogClose as HeadlessDialogClose,
  DialogDescription as HeadlessDialogDescription,
  DialogPopup as HeadlessDialogPopup,
  DialogTitle as HeadlessDialogTitle,
} from '../../headless-primitives'
import { cn } from '../../utils'
import './Dialog.css'

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Backdrop: forwardRef<
    ComponentRef<typeof DialogBackdrop>,
    ComponentPropsWithoutRef<typeof DialogBackdrop>
  >(({ className, ...props }, ref) => (
    <DialogBackdrop
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-dialog__backdrop', className(state))
          : cn('ui-dialog__backdrop', className)
      }
      {...props}
    />
  )),
  Popup: forwardRef<
    ComponentRef<typeof HeadlessDialogPopup>,
    ComponentPropsWithoutRef<typeof HeadlessDialogPopup>
  >(({ className, ...props }, ref) => (
    <HeadlessDialogPopup
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-dialog__popup', className(state))
          : cn('ui-dialog__popup', className)
      }
      {...props}
    />
  )),
  Title: forwardRef<
    ComponentRef<typeof HeadlessDialogTitle>,
    ComponentPropsWithoutRef<typeof HeadlessDialogTitle>
  >(({ className, ...props }, ref) => (
    <HeadlessDialogTitle
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-dialog__title', className(state))
          : cn('ui-dialog__title', className)
      }
      {...props}
    />
  )),
  Description: forwardRef<
    ComponentRef<typeof HeadlessDialogDescription>,
    ComponentPropsWithoutRef<typeof HeadlessDialogDescription>
  >(({ className, ...props }, ref) => (
    <HeadlessDialogDescription
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-dialog__description', className(state))
          : cn('ui-dialog__description', className)
      }
      {...props}
    />
  )),
  Close: forwardRef<
    ComponentRef<typeof HeadlessDialogClose>,
    ComponentPropsWithoutRef<typeof HeadlessDialogClose>
  >(({ className, ...props }, ref) => (
    <HeadlessDialogClose
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-dialog__close', className(state))
          : cn('ui-dialog__close', className)
      }
      {...props}
    />
  )),
}

Dialog.Backdrop.displayName = 'Dialog.Backdrop'
Dialog.Popup.displayName = 'Dialog.Popup'
Dialog.Title.displayName = 'Dialog.Title'
Dialog.Description.displayName = 'Dialog.Description'
Dialog.Close.displayName = 'Dialog.Close'
