import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
} from '../../headless-primitives'
import { cn } from '../../utils'
import './Accordion.css'

export const Accordion = {
  Root: forwardRef<
    ComponentRef<typeof AccordionRoot>,
    ComponentPropsWithoutRef<typeof AccordionRoot>
  >(({ className, ...props }, ref) => (
    <AccordionRoot
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-accordion', className(state))
          : cn('ui-accordion', className)
      }
      {...props}
    />
  )),
  Item: forwardRef<
    ComponentRef<typeof AccordionItem>,
    ComponentPropsWithoutRef<typeof AccordionItem>
  >(({ className, ...props }, ref) => (
    <AccordionItem
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-accordion__item', className(state))
          : cn('ui-accordion__item', className)
      }
      {...props}
    />
  )),
  Header: AccordionHeader,
  Trigger: forwardRef<
    ComponentRef<typeof AccordionTrigger>,
    ComponentPropsWithoutRef<typeof AccordionTrigger>
  >(({ className, ...props }, ref) => (
    <AccordionTrigger
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-accordion__trigger', className(state))
          : cn('ui-accordion__trigger', className)
      }
      {...props}
    />
  )),
  Panel: forwardRef<
    ComponentRef<typeof AccordionPanel>,
    ComponentPropsWithoutRef<typeof AccordionPanel>
  >(({ className, ...props }, ref) => (
    <AccordionPanel
      ref={ref}
      className={
        typeof className === 'function'
          ? (state) => cn('ui-accordion__panel', className(state))
          : cn('ui-accordion__panel', className)
      }
      {...props}
    />
  )),
}

Accordion.Root.displayName = 'Accordion.Root'
Accordion.Item.displayName = 'Accordion.Item'
Accordion.Trigger.displayName = 'Accordion.Trigger'
Accordion.Panel.displayName = 'Accordion.Panel'
