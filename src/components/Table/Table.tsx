import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../utils'
import './Table.css'

export function Table({
  className,
  ...props
}: ComponentPropsWithoutRef<'table'>) {
  return <table className={cn('ui-table', className)} {...props} />
}

export function TableHead(props: ComponentPropsWithoutRef<'thead'>) {
  return <thead {...props} />
}

export function TableBody(props: ComponentPropsWithoutRef<'tbody'>) {
  return <tbody {...props} />
}

export function TableRow(props: ComponentPropsWithoutRef<'tr'>) {
  return <tr {...props} />
}

export function TableHeader(props: ComponentPropsWithoutRef<'th'>) {
  return <th scope='col' {...props} />
}

export function TableCell(props: ComponentPropsWithoutRef<'td'>) {
  return <td {...props} />
}
