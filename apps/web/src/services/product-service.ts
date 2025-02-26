import { Product } from '@/domain/types/product'
import { LoadProductsQueryParams } from '@/queries/useLoadProducts'
import { HttpService } from './http-service'

export class ProductService {
  constructor(private readonly http: HttpService) {}

  async getProducts(
    { categories, limit, sort }: LoadProductsQueryParams,
    signal?: AbortSignal
  ): Promise<Product[]> {
    const response = await this.http.get<Product[]>({
      url: '/products',
      params: { categories, limit, sort },
      signal,
    })

    return categories && categories.length > 0
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
