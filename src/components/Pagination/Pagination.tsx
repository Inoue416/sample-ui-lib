import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../utils'
import './Pagination.css'

export type PaginationProps = ComponentPropsWithoutRef<'nav'> & {
  currentPage: number
  onPageChange?: (page: number) => void
  totalPages: number
}

export function Pagination({
  className,
  currentPage,
  onPageChange,
  totalPages,
  ...props
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav
      aria-label='Pagination'
      className={cn('ui-pagination', className)}
      {...props}
    >
      <button
        disabled={currentPage <= 1}
        type='button'
        onClick={() => onPageChange?.(currentPage - 1)}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          aria-current={page === currentPage ? 'page' : undefined}
          className={cn(page === currentPage && 'ui-pagination__page--active')}
          key={page}
          type='button'
          onClick={() => onPageChange?.(page)}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage >= totalPages}
        type='button'
        onClick={() => onPageChange?.(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  )
}
