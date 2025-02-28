'use client'

import { CreateProductDrawer } from '@/components/dashboard/create-product-drawer'
import { DashboardTable } from '@/components/dashboard/table'
import { ProductFilter } from '@/components/product/filter'
import { Header } from '@/components/shared/header-suffix'
import { NavigationButton } from '@/components/shared/navigation-button'
import { Pagination } from '@/components/shared/pagination'
import { ArrowRight } from 'lucide-react'
import { useProductsPage } from '../(app)/useProductsPage'

export default function DashboardPage() {
  const {
    products,
    isLoading: isLoadingProducts,
    filters,
    handleAddToCart,
    ...pagination
  } = useProductsPage()

  return (
    <div className="container mx-auto flex flex-col gap-y-4 px-4 py-8">
      <Header>
        <ProductFilter filters={filters} />
        <div className="flex items-center gap-2">
          <CreateProductDrawer />
          <NavigationButton to="/">
            Ir para Shop
            <ArrowRight size={16} />
          </NavigationButton>
        </div>
      </Header>

      <DashboardTable products={products} isLoading={isLoadingProducts} />

      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={pagination.onPageChange}
      />
    </div>
  )
}
