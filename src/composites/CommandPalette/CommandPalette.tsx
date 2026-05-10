import type { ReactNode } from 'react'
import { Dialog, Input } from '../../components'
import './CommandPalette.css'

export type CommandPaletteProps = {
  children: ReactNode
  description?: string
  inputLabel?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
}

export function CommandPalette({
  children,
  description,
  inputLabel = 'Search commands',
  title = 'Command palette',
  ...props
}: CommandPaletteProps) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup className='ui-command-palette'>
          <Dialog.Title>{title}</Dialog.Title>
          {description ? (
            <Dialog.Description>{description}</Dialog.Description>
          ) : null}
          <Input aria-label={inputLabel} placeholder={inputLabel} />
          <div className='ui-command-palette__content'>{children}</div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
