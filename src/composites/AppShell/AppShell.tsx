import type { ReactNode } from 'react'
import { cn } from '../../utils'
import './AppShell.css'

export type AppShellProps = {
  children: ReactNode
  className?: string
  header?: ReactNode
  sidebar?: ReactNode
}

export function AppShell({
  children,
  className,
  header,
  sidebar,
}: AppShellProps) {
  return (
    <div className={cn('ui-app-shell', className)}>
      {header ? (
        <header className='ui-app-shell__header'>{header}</header>
      ) : null}
      <div className='ui-app-shell__body'>
        {sidebar ? (
          <aside className='ui-app-shell__sidebar'>{sidebar}</aside>
        ) : null}
        <main className='ui-app-shell__main'>{children}</main>
      </div>
    </div>
  )
}
