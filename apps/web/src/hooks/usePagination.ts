import { PaginatedResponse } from '@/domain/types/common'
import { useMemo } from 'react'

type UsePaginationProps<T> = {
  items: T[]
  limit?: number
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const usePagination = <T>(
  props: UsePaginationProps<T>
): PaginatedResponse<T> => {
  const { items, limit = 20, currentPage, setCurrentPage } = props

  const totalPages = useMemo(
    () => Math.ceil(items.length / limit),
    [items, limit]
  )

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * limit
    return items.slice(start, start + limit)
  }, [items, currentPage, limit])

  const onPageChange = (page: number) => setCurrentPage(page)

  return {
    items: paginatedItems,
    total: items.length,
    currentPage,
    limit,
    totalPages,
    onPageChange,
  }
}
