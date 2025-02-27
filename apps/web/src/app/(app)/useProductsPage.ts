import { usePagination } from '@/hooks/usePagination'
import { useLoadProducts } from '@/queries/useLoadProducts'
import { useState } from 'react'
import { useInitialProductsPageFilters } from './useInitialProductsPageFilters'

export const useProductsPage = () => {
  const [limit, setLimit] = useState<number>(8)
  const [page, setPage] = useState<number>(1)

  const { initialFilters } = useInitialProductsPageFilters()

  const {
    data: products,
    isLoading,
    isError,
  } = useLoadProducts({
    ...initialFilters,
    page,
    limit,
  })

  const { items: paginatedProducts, ...pagination } = usePagination({
    items: products ?? [],
    limit,
    currentPage: page,
    setCurrentPage: setPage,
  })

  return {
    products: paginatedProducts,
    isLoading,
    isError,
    ...pagination,
  }
}
