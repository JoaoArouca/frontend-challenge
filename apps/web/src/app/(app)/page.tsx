'use client'

import { useProductsPage } from './useProductsPage'

export default function Home() {
  const { products, isLoading, isError, ...pagination } = useProductsPage()

  return (
    <main>
      <div>Hello world!</div>
    </main>
  )
}
