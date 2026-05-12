import type { FormEventHandler, ReactNode } from 'react'
import { Button, Dialog } from '../../components'
import { cn } from '../../utils'
import './ModalForm.css'

export type ModalFormProps = {
  children: ReactNode
  className?: string
  description?: ReactNode
  footer?: ReactNode
  onSubmit?: FormEventHandler<HTMLFormElement>
  submitLabel?: string
  title: ReactNode
  trigger: ReactNode
}

export function ModalForm({
  children,
  className,
  description,
  footer,
  onSubmit,
  submitLabel = 'Save',
  title,
  trigger,
}: ModalFormProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger render={<Button />}>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup className={cn('ui-modal-form', className)}>
          <form className='ui-modal-form__form' onSubmit={onSubmit}>
            <div className='ui-modal-form__header'>
              <Dialog.Title>{title}</Dialog.Title>
              {description ? (
                <Dialog.Description>{description}</Dialog.Description>
              ) : null}
            </div>
            <div className='ui-modal-form__body'>{children}</div>
            <div className='ui-modal-form__footer'>
              {footer ?? (
                <>
                  <Dialog.Close render={<Button variant='ghost' />}>
                    Cancel
                  </Dialog.Close>
                  <Button type='submit'>{submitLabel}</Button>
                </>
              )}
            </div>
          </form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
