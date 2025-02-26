import { Product } from '@/domain/types/product'
import { LoadProductsQueryParams } from '@/queries/useLoadProducts'
import { HttpService } from './http-service'

export class ProductService {
  constructor(private readonly http: HttpService) {}

  async getProducts(
    params: LoadProductsQueryParams,
    signal?: AbortSignal
  ): Promise<Product[]> {
    return await this.http.get({
      url: '/products',
      params,
      signal,
    })
  }
}
