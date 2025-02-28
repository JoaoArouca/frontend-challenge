import { CustomProductSort, ProductCategory } from '@/domain/enum/product'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { getProductCategoryLabel, getProductSortLabel } from './utils'

type Option = {
  label: string
  value: string
}

export const useProductFilter = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const sortOptions = useMemo<Option[]>(() => {
    return Object.values(CustomProductSort).map((sort) => ({
      label: getProductSortLabel(sort),
      value: sort,
    }))
  }, [])

  const categoryOptions = useMemo<Option[]>(() => {
    return Object.values(ProductCategory).map((category) => ({
      label: getProductCategoryLabel(category),
      value: category,
    }))
  }, [])

  const onSelectSort = (sort: CustomProductSort) => {
    const params = new URLSearchParams(searchParams.toString())

    if (sort) {
      params.set('customSort', sort)
    } else {
      params.delete('customSort')
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const onSelectCategory = (categories: ProductCategory[]) => {
    const params = new URLSearchParams(searchParams.toString())

    if (categories.length > 0) {
      params.set('categories', JSON.stringify(categories))
    } else {
      params.delete('categories')
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    sortOptions,
    onSelectSort,
    categoryOptions,
    onSelectCategory,
  }
}
