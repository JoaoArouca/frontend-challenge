import { CustomProductSort } from '@/domain/enum/product'

export const getProductSortLabel = (sort: CustomProductSort) =>
  ({
    [CustomProductSort.RELEVANCE]: 'Relevância',
    [CustomProductSort.PRICE_ASC]: 'Preço: Menor para maior',
    [CustomProductSort.PRICE_DESC]: 'Preço: Maior para menor',
  })[sort]
