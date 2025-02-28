'use client'
import { ProductFilter } from '@/components/product/filter'
import { ProductGrid } from '@/components/product/grid'
import { Pagination } from '@/components/shared/pagination'
import { useProductsPage } from './useProductsPage'

export default function ProductPage() {
  const {
    products,
    isLoading: isLoadingProducts,
    filters,
    handleAddToCart,
    ...pagination
  } = useProductsPage()

  return (
    <div className="container mx-auto flex flex-col gap-y-4 px-4 py-8">
      <ProductFilter filters={filters} />

      <ProductGrid
        products={products}
        onAddToCart={handleAddToCart}
        isLoading={isLoadingProducts}
      />

      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={pagination.onPageChange}
      />
    </div>
  )
}
