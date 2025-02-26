import { AxiosInstance } from 'axios'
import { HttpGetParams, HttpService } from './types'
import { paramsSerializer } from './utils'
export class AxiosHttpService implements HttpService {
  private readonly axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  async get<T, P extends unknown>({
    url,
    params,
    signal,
  }: HttpGetParams<P>): Promise<T> {
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
