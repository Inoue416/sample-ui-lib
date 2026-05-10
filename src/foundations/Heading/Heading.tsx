import type { ComponentPropsWithoutRef } from 'react'
import { createElement, forwardRef } from 'react'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export type HeadingProps = ComponentPropsWithoutRef<'h2'> & {
  level?: HeadingLevel
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, children, ...props }, ref) =>
    createElement(`h${level}`, { ref, ...props }, children),
)

Heading.displayName = 'Heading'
