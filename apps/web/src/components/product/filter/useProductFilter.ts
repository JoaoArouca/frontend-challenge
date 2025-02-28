import { CustomProductSort } from '@/domain/enum/product'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { getProductSortLabel } from './utils'

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

  const onSelectSort = (sort: CustomProductSort) => {
    const params = new URLSearchParams(searchParams.toString())

    if (sort) {
      params.set('customSort', sort)
    } else {
      params.delete('customSort')
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    sortOptions,
    onSelectSort,
  }
}
