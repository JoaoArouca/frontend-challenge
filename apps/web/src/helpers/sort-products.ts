import { CustomProductSort } from '@/domain/enum/product'
import { Product } from '@/domain/types/product'

export const sortProductsMap: Record<
  CustomProductSort,
  (a: Product, b: Product) => number
> = {
  [CustomProductSort.RELEVANCE]: (a, b) => b.rating.rate - a.rating.rate,
  [CustomProductSort.PRICE_ASC]: (a, b) => a.price - b.price,
  [CustomProductSort.PRICE_DESC]: (a, b) => b.price - a.price,
}
