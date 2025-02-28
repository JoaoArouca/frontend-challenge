'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

/**
 * A hook that extracts URL search parameters and converts them to a typed object
 * @template T The type of filters to extract
 * @returns A Partial<T> object with only the fields that are present in the URL
 */
export function useFilters<T extends Record<string, any>>(): Partial<T> {
  const searchParams = useSearchParams()

  const parseValue = useMemo(
    () =>
      (value: string): any => {
        try {
          return JSON.parse(value)
        } catch (e) {
          return value
        }
      },
    []
  )

  const filters = useMemo(() => {
    const result: Partial<T> = {}

    if (searchParams) {
      searchParams.forEach((value, key) => {
        if (value) {
          result[key as keyof T] = parseValue(value)
        }
      })
    }

    return result
  }, [searchParams, parseValue])

  return filters
}
