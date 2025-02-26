import { Product } from '@/domain/types/product'
import { HttpService } from '../types'

export class ProductService {
  constructor(private readonly http: HttpService) {}

  async getProducts(signal?: AbortSignal): Promise<Product[]> {
    const response = await this.http.get<Product[]>({
      url: '/products',
      signal,
    })

    return response
  }

  async getProductsCategories(signal?: AbortSignal): Promise<string[]> {
    return await this.http.get({
      url: '/products/categories',
      signal,
    })
  }
}
