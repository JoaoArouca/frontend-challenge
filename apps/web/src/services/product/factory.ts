import { apiClient } from '@/lib/axios'
import { AxiosHttpService } from '@/services/http-service'
import { ProductService } from '@/services/product'

export const makeProductService = () => {
  const httpService = new AxiosHttpService(apiClient)
  return new ProductService(httpService)
}
