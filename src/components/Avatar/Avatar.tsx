import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import './Avatar.css'

export type AvatarSize = 'sm' | 'md' | 'lg'

export type AvatarProps = ComponentPropsWithoutRef<'span'> & {
  alt?: string
  fallback?: string
  size?: AvatarSize
  src?: string
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ alt = '', className, fallback, size = 'md', src, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('ui-avatar', `ui-avatar--${size}`, className)}
      {...props}
    >
      {src ? (
        <img alt={alt} className='ui-avatar__image' src={src} />
      ) : (
        <span>{fallback}</span>
      )}
    </span>
  ),
)

Avatar.displayName = 'Avatar'
