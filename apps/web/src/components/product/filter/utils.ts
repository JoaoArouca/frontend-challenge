import { CustomProductSort, ProductCategory } from '@/domain/enum/product'

export const getProductSortLabel = (sort: CustomProductSort) =>
  ({
    [CustomProductSort.RELEVANCE]: 'Relevância',
    [CustomProductSort.PRICE_ASC]: 'Preço: Menor para maior',
    [CustomProductSort.PRICE_DESC]: 'Preço: Maior para menor',
  })[sort]

export const getProductCategoryLabel = (category: ProductCategory) =>
  ({
    [ProductCategory.ELECTRONICS]: 'Eletrônicos',
    [ProductCategory.JEWELRY]: 'Joias',
    [ProductCategory.MENS_CLOTHING]: 'Roupas masculinas',
    [ProductCategory.WOMENS_CLOTHING]: 'Roupas femininas',
  })[category]
