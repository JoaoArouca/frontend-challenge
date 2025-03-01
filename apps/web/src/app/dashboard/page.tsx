'use client'

import { ProductDrawer } from '@/components/dashboard/product-drawer'
import { ProductForm } from '@/components/dashboard/product-form'
import { DashboardTable } from '@/components/dashboard/table'
import { ProductFilter } from '@/components/product/filter'
import { ConfirmDialog } from '@/components/shared/confirm-dialog'
import { Header } from '@/components/shared/header-suffix'
import { NavigationButton } from '@/components/shared/navigation-button'
import { Pagination } from '@/components/shared/pagination'
import { Product } from '@/domain/types/product'
import { Button } from '@frontend-challenge/ui/components/button'
import { ArrowRight, Plus } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { useProductsPage } from '../(app)/useProductsPage'

export default function DashboardPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [productToDelete, setProductToDelete] = useState<Product | null>(null)

  const {
    products,
    isLoading: isLoadingProducts,
    filters,
    handleAddToCart,
    deleteProduct,
    ...pagination
  } = useProductsPage()

  const openDrawer = (product?: Product) => {
    setSelectedProduct(product ?? null)
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedProduct(null)
  }

  const confirmDeleteProduct = (product: Product) => {
    setProductToDelete(product)
  }

  const onDeleteProduct = async () => {
    if (productToDelete) {
      try {
        await deleteProduct(productToDelete)
        toast.success('Produto deletado com sucesso!')
      } catch (error) {
        toast.error('Não foi possível deletar o produto.')
      } finally {
        setProductToDelete(null)
      }
    }
  }
  return (
    <div className="container mx-auto flex flex-col gap-y-4 px-4 py-8">
      <Header>
        <ProductFilter filters={filters} />
        <div className="flex items-center gap-2">
          <Button
            onClick={() => openDrawer()}
            type="button"
            variant="link"
            className="focus:ring-0"
          >
            <Plus size={16} /> Adicionar Produto
          </Button>
          <NavigationButton to="/">
            Ir para Shop
            <ArrowRight size={16} />
          </NavigationButton>
        </div>
      </Header>

      <DashboardTable
        products={products}
        isLoading={isLoadingProducts}
        onRowClick={openDrawer}
        onDeleteAction={confirmDeleteProduct}
      />

      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={pagination.onPageChange}
      />

      <ProductDrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
        <ProductForm
          initialValue={selectedProduct ?? undefined}
          onSuccess={closeDrawer}
        />
      </ProductDrawer>

      <ConfirmDialog
        open={!!productToDelete}
        title="Excluir Produto"
        message={`Tem certeza que deseja excluir o produto "${productToDelete?.title}"?`}
        onConfirm={onDeleteProduct}
        onCancel={() => setProductToDelete(null)}
      />
    </div>
  )
}
