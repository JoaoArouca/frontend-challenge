import { AxiosInstance } from 'axios'
import qs from 'qs'

type HttpGetParams = {
  url: string
  params?: unknown
  signal?: AbortSignal
}

const paramsSerializer = (params: unknown) => {
  return qs.stringify(params, {
    allowEmptyArrays: false,
    skipNulls: true,
    strictNullHandling: true,
    arrayFormat: 'comma',
  })
}
export type HttpService = {
  get<T>(params: HttpGetParams): Promise<T>
  post<T>(url: string, data: unknown): Promise<T>
  put<T>(url: string, data: unknown): Promise<T>
  delete<T>(url: string): Promise<T>
}

export class AxiosHttpService implements HttpService {
  private readonly axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  async get<T>({ url, params, signal }: HttpGetParams): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, {
      params,
      signal,
      paramsSerializer,
    })
    return response.data
  }

  async post<T>(url: string, data: unknown): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data)
    return response.data
  }

  async put<T>(url: string, data: unknown): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data)
    return response.data
  }

  async delete<T>(url: string): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url)
    return response.data
  }
}
