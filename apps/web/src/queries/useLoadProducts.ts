import { PaginatedRequest } from '@/domain/types/common'
import { Product, ProductFilters } from '@/domain/types/product'
import { sortProductsMap } from '@/helpers/sort-products'
import { makeProductService } from '@/services/product/factory'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { PRODUCTS_QUERY_KEY } from './constants'

const productService = makeProductService()

export type ProductQueryParams = ProductFilters & PaginatedRequest

export const useLoadProducts = (params: ProductQueryParams) => {
  const { data: products, ...queryResult } = useQuery<Product[]>({
    queryKey: PRODUCTS_QUERY_KEY.filtered(params),
    queryFn: ({ signal }) => productService.getProducts(signal),
    enabled: params.limit !== 0,
  })

  const resolvedProducts = useResolveProducts({
    filters: { categories: params.categories, customSort: params.customSort },
    products: products ?? [],
  })

  return {
    ...queryResult,
    data: resolvedProducts,
  }
}

type UseResolveProductsProps = {
  filters: ProductFilters
  products: Product[]
}

const useResolveProducts = (props: UseResolveProductsProps) => {
  const {
    filters: { categories = [], customSort },
    products,
  } = props

  return useMemo(() => {
    let filteredProducts = products

    if (categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        categories.includes(product.category)
      )
    }

    if (customSort) {
      filteredProducts = filteredProducts.sort(sortProductsMap[customSort])
    }

    return filteredProducts
  }, [categories, customSort, products])
}
