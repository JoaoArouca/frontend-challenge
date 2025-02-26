export type HttpGetParams = {
  url: string
  signal?: AbortSignal
}

export type HttpPostParams = {
  url: string
  body: unknown
  signal?: AbortSignal
}

export type HttpService = {
  get<T>(params: HttpGetParams): Promise<T>
  post<T>(params: HttpPostParams): Promise<T>
  put<T>(url: string, data: unknown): Promise<T>
  delete<T>(url: string): Promise<T>
}
