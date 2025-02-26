import { usePagination } from '@/hooks/usePagination'
import { useLoadProducts } from '@/queries/useLoadProducts'
import { useInitialProductsPageFilters } from './useInitialProductsPageFilters'

export const useProductsPage = () => {
  const { initialFilters } = useInitialProductsPageFilters()

  const { data: products, isLoading, isError } = useLoadProducts(initialFilters)

  const { items: paginatedProducts, ...pagination } = usePagination({
    items: products ?? [],
    limit: initialFilters.limit,
  })

  return {
    products: paginatedProducts,
    isLoading,
    isError,
    ...pagination,
  }
}
