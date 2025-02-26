import { PaginatedResponse } from '@/domain/types/common'
import { useMemo, useState } from 'react'

type UsePaginationProps<T> = {
  items: T[]
  limit?: number
}

export const usePagination = <T>(
  props: UsePaginationProps<T>
): PaginatedResponse<T> => {
  const { items, limit = 20 } = props

  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = useMemo(
    () => Math.ceil(items.length / limit),
    [items, limit]
  )

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * limit
    return items.slice(start, start + limit)
  }, [items, currentPage, limit])

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))

  return {
    items: paginatedItems,
    total: items.length,
    currentPage,
    limit,
    totalPages,
    nextPage,
    prevPage,
  }
}
