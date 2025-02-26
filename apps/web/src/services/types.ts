export type HttpGetParams<P extends unknown> = {
  url: string
  params?: P
  signal?: AbortSignal
}

export type HttpService = {
  get<T, P extends unknown>(params: HttpGetParams<P>): Promise<T>
  post<T>(url: string, data: unknown): Promise<T>
  put<T>(url: string, data: unknown): Promise<T>
  delete<T>(url: string): Promise<T>
}
