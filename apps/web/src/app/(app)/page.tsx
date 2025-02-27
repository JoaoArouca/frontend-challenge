'use client'
import { ProductCard } from '@/components/product/card'
import { Pagination } from '@/components/shared/pagination'
import { SkeletonGrid } from '@/components/shared/skeleton-grid'
import { Product } from '@/domain/types/product'
import { useState } from 'react'
import { useProductsPage } from './useProductsPage'

export default function ProductPage() {
  const [cart, setCart] = useState<Product[]>([])

  const { products, isLoading, currentPage, totalPages, onPageChange } =
    useProductsPage()

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  if (isLoading)
    return (
      <div className="container mx-auto py-8">
        <SkeletonGrid />
      </div>
    )

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  )
}
