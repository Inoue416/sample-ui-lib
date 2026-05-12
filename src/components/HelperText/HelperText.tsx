import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './HelperText.css'

export type HelperTextProps = ComponentPropsWithoutRef<'p'>

export const HelperText = forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('ui-helper-text', className)} {...props} />
  ),
)

HelperText.displayName = 'HelperText'
