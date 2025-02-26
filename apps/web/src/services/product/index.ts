import { productSchema } from '@/domain/schemas/product'
import { Product } from '@/domain/types/product'
import { HttpService } from '../types'

export class ProductService {
  constructor(private readonly http: HttpService) {}

  async getProducts(signal?: AbortSignal): Promise<Product[]> {
    const response = await this.http.get<Product[], undefined>({
      url: '/products',
      signal,
    })

    return response
  }

  async getProductById(id: number, signal?: AbortSignal): Promise<Product> {
    return await this.http.get<Product, { id: number }>({
      url: `/products/${id}`,
      params: { id },
      signal,
    })
  }

  async getProductsCategories(signal?: AbortSignal): Promise<string[]> {
    return await this.http.get({
      url: '/products/categories',
      signal,
    })
  }

  async createProduct(
    product: Product,
    signal?: AbortSignal
  ): Promise<Product> {
    const parsedProduct = productSchema.parse(product)

    return await this.http.post<Product>({
      url: '/products',
      body: parsedProduct,
      signal,
    })
  }
}
