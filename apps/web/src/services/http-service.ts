import { AxiosInstance } from 'axios'
import { HttpGetParams, HttpService } from './types'
import { paramsSerializer } from './utils'
export class AxiosHttpService implements HttpService {
  private readonly axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  async get<T>({ url, signal }: HttpGetParams): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, {
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
