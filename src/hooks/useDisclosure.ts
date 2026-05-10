import { useCallback, useState } from 'react'

export type UseDisclosureOptions = {
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  open?: boolean
}

export function useDisclosure({
  defaultOpen = false,
  onOpenChange,
  open,
}: UseDisclosureOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const isControlled = open !== undefined
  const currentOpen = isControlled ? open : uncontrolledOpen

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen)
      }

      onOpenChange?.(nextOpen)
    },
    [isControlled, onOpenChange],
  )

  const close = useCallback(() => setOpen(false), [setOpen])
  const openDisclosure = useCallback(() => setOpen(true), [setOpen])
  const toggle = useCallback(
    () => setOpen(!currentOpen),
    [currentOpen, setOpen],
  )

  return {
    close,
    isOpen: currentOpen,
    open: openDisclosure,
    setOpen,
    toggle,
  }
}
