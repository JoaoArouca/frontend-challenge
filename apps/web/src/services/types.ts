export type HttpGetParams<P extends unknown> = {
  url: string
  signal?: AbortSignal
  params?: P
}

export type HttpPostParams = {
  url: string
  body: unknown
  signal?: AbortSignal
}

export type HttpPutParams = {
  url: string
  body: unknown
  signal?: AbortSignal
}

export type HttpService = {
  get<T, P extends unknown>(params: HttpGetParams<P>): Promise<T>
  post<T>(params: HttpPostParams): Promise<T>
  put<T>(params: HttpPutParams): Promise<T>
  delete<T>(url: string): Promise<T>
}
