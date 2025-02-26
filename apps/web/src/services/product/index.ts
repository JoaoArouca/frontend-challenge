import { Product } from '@/domain/types/product'
import { ProductQueryParams } from '@/queries/useLoadProducts'
import { HttpService } from '../types'

export type LoadProductsQueryParams = {
  limit?: number
  sort?: 'asc' | 'desc'
}

export class ProductService {
  constructor(private readonly http: HttpService) {}

  async getProducts(
    filters: ProductQueryParams,
    signal?: AbortSignal
  ): Promise<Product[]> {
    const { categories = [], customSort, ...queryParams } = filters

    const response = await this.http.get<Product[], LoadProductsQueryParams>({
      url: '/products',
      params: queryParams,
      signal,
    })

    return categories.length > 0
      ? response.filter((p) => categories.includes(p.category))
      : response
  }

  async getProductsCategories(signal?: AbortSignal): Promise<string[]> {
    return await this.http.get({
      url: '/products/categories',
      signal,
    })
  }
}
