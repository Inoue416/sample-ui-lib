import type { ReactNode } from 'react'
import { forwardRef } from 'react'
import type { ButtonProps } from '../Button'
import { Button } from '../Button'

export type IconButtonProps = Omit<ButtonProps, 'children'> & {
  icon: ReactNode
  label: string
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, label, ...props }, ref) => (
    <Button ref={ref} aria-label={label} {...props}>
      {icon}
    </Button>
  ),
)

IconButton.displayName = 'IconButton'
