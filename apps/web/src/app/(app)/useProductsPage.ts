import { Product, ProductFilters } from '@/domain/types/product'
import { useFilters } from '@/hooks/useFilters'
import { usePagination } from '@/hooks/usePagination'
import { useLoadProducts } from '@/queries/useLoadProducts'
import { useCallback, useState } from 'react'

export const useProductsPage = () => {
  const [cart, setCart] = useState<Product[]>([])

  const [limit, setLimit] = useState<number>(8)
  const [page, setPage] = useState<number>(1)

  const filters = useFilters<ProductFilters>()

  const { data: products, isLoading } = useLoadProducts({
    ...filters,
    page,
    limit,
  })

  const { items: paginatedProducts, ...pagination } = usePagination({
    items: products ?? [],
    limit,
    currentPage: page,
    setCurrentPage: setPage,
  })

  const handleAddToCart = useCallback((product: Product) => {
    setCart((prevCart) => [...prevCart, product])
  }, [])

  return {
    products: paginatedProducts,
    isLoading,
    filters,
    handleAddToCart,
    ...pagination,
  }
}
