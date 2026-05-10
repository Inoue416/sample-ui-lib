import { describe, expect, it } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  it('joins truthy class names', () => {
    expect(cn('base', false, undefined, 'active')).toBe('base active')
  })

  it('returns undefined for empty class names', () => {
    expect(cn(false, null, undefined)).toBeUndefined()
  })
})
