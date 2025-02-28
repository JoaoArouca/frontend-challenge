import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export function useFilters<T extends Record<string, any>>() {
  const searchParams = useSearchParams()

  return useMemo<Partial<T>>(() => {
    const params = new URLSearchParams(searchParams)

    if (!params.toString()) return {}

    return Array.from(params.entries()).reduce((acc, [key, value]) => {
      if (value.includes(',')) {
        acc[key as keyof T] = value.split(',') as T[keyof T]
      } else if (!isNaN(Number(value))) {
        acc[key as keyof T] = Number(value) as T[keyof T]
      } else {
        acc[key as keyof T] = value as T[keyof T]
      }

      return acc
    }, {} as Partial<T>)
  }, [searchParams])
}
