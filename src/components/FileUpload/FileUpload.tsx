import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './FileUpload.css'

export type FileUploadProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'>

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn('ui-file-upload', className)}
      type='file'
      {...props}
    />
  ),
)

FileUpload.displayName = 'FileUpload'
