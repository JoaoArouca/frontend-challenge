import { CustomProductSort, ProductCategory } from '@/domain/enum/product'
import { ProductQueryParams } from '@/queries/useLoadProducts'
import { useSearchParams } from 'next/navigation'
import qs from 'qs'
import { useMemo } from 'react'

const DEFAULT_QUERY_PARAMS: Partial<ProductQueryParams> = {
  categories: [],
  customSort: undefined,
}

const VALID_CATEGORIES = new Set(Object.values(ProductCategory))

export const useInitialProductsPageFilters = () => {
  const searchParams = useSearchParams()

  const queryObject = qs.parse(searchParams.toString(), {
    ignoreQueryPrefix: true,
  })

  const categories = useMemo(() => {
    const rawCategories = queryObject.categories

    if (!rawCategories) return DEFAULT_QUERY_PARAMS.categories

    const parsedCategories = Array.isArray(rawCategories)
      ? rawCategories.map(String)
      : String(rawCategories).split(',')

    return parsedCategories
      .map((c) => c.trim())
      .filter((c) =>
        VALID_CATEGORIES.has(c as ProductCategory)
      ) as ProductCategory[]
    // avoid using includes method here to prevent wrong categories insertion through url params
  }, [queryObject.categories])

  const customSort = queryObject.customSort
    ? (queryObject.customSort as CustomProductSort)
    : DEFAULT_QUERY_PARAMS.customSort

  const initialFilters: Partial<ProductQueryParams> = useMemo(() => {
    return {
      categories,
      customSort,
    }
  }, [categories, customSort])

  return { initialFilters }
}
