import type { ReactNode } from 'react'
import { createContext as createReactContext, useContext } from 'react'

export function createContext<T>(name: string) {
  const Context = createReactContext<T | undefined>(undefined)

  function useScopedContext() {
    const value = useContext(Context)

    if (value === undefined) {
      throw new Error(`${name} must be used within ${name}.Provider`)
    }

    return value
  }

  function Provider({ children, value }: { children: ReactNode; value: T }) {
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  return [Provider, useScopedContext] as const
}
