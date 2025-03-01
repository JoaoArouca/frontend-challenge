'use client'
import { ProductFilter } from '@/components/product/filter'
import { ProductGrid } from '@/components/product/grid'
import { Header } from '@/components/shared/header-suffix'
import { NavigationButton } from '@/components/shared/navigation-button'
import { Pagination } from '@/components/shared/pagination'
import { ArrowRight } from 'lucide-react'
import { useProductsPage } from './useProductsPage'

export default function ProductPage() {
  const {
    products,
    isLoading: isLoadingProducts,
    filters,
    handleAddToCart,
    deleteProduct,
    ...pagination
  } = useProductsPage()

  return (
    <div className="container mx-auto flex flex-col gap-y-4 px-4 py-8">
      <Header>
        <ProductFilter filters={filters} />
        <NavigationButton to="/dashboard">
          Ir para Dashboard
          <ArrowRight size={16} />
        </NavigationButton>
      </Header>

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
