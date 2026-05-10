import type { Ref } from 'react'
import { useMemo } from 'react'
import { composeRefs } from '../utils'

export function useMergedRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return useMemo(() => composeRefs(...refs), [refs])
}
