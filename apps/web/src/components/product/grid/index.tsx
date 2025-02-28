import { SkeletonGrid } from '@/components/shared/skeleton-grid'
import { Product } from '@/domain/types/product'
import { ProductCard } from '../card'
type ProductGridProps = {
  products: Product[]
  onAddToCart: (product: Product) => void
  isLoading: boolean
}

export const ProductGrid = ({
  products,
  onAddToCart,
  isLoading,
}: ProductGridProps) => {
  if (isLoading) return <SkeletonGrid />

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}
