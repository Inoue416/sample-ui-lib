import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import {
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsRoot,
  TabsTab,
} from '../../headless-primitives'
import { cn } from '../../utils'
import './Tabs.css'

export const Tabs = {
  Root: forwardRef<
    ComponentRef<typeof TabsRoot>,
    ComponentPropsWithoutRef<typeof TabsRoot>
  >(({ className, ...props }, ref) => (
    <TabsRoot
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-tabs', className(state))
          : cn('ui-tabs', className)
      }
      {...props}
    />
  )),
  List: forwardRef<
    ComponentRef<typeof TabsList>,
    ComponentPropsWithoutRef<typeof TabsList>
  >(({ className, ...props }, ref) => (
    <TabsList
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-tabs__list', className(state))
          : cn('ui-tabs__list', className)
      }
      {...props}
    />
  )),
  Tab: forwardRef<
    ComponentRef<typeof TabsTab>,
    ComponentPropsWithoutRef<typeof TabsTab>
  >(({ className, ...props }, ref) => (
    <TabsTab
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-tabs__tab', className(state))
          : cn('ui-tabs__tab', className)
      }
      {...props}
    />
  )),
  Indicator: TabsIndicator,
  Panel: forwardRef<
    ComponentRef<typeof TabsPanel>,
    ComponentPropsWithoutRef<typeof TabsPanel>
  >(({ className, ...props }, ref) => (
    <TabsPanel
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-tabs__panel', className(state))
          : cn('ui-tabs__panel', className)
      }
      {...props}
    />
  )),
}

Tabs.Root.displayName = 'Tabs.Root'
Tabs.List.displayName = 'Tabs.List'
Tabs.Tab.displayName = 'Tabs.Tab'
Tabs.Panel.displayName = 'Tabs.Panel'
