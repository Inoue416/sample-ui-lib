import type { ReactNode } from 'react'
import { cn } from '../../utils'
import './DataTable.css'

export type DataTableColumn<TRow> = {
  header: ReactNode
  key: keyof TRow
  render?: (row: TRow) => ReactNode
}

export type DataTableProps<TRow extends Record<string, ReactNode>> = {
  caption?: string
  className?: string
  columns: Array<DataTableColumn<TRow>>
  rows: TRow[]
}

export function DataTable<TRow extends Record<string, ReactNode>>({
  caption,
  className,
  columns,
  rows,
}: DataTableProps<TRow>) {
  return (
    <table className={cn('ui-data-table', className)}>
      {caption ? <caption>{caption}</caption> : null}
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={String(column.key)} scope='col'>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={String(column.key)}>
                {column.render ? column.render(row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
