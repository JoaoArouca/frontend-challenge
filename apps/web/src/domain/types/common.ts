export type PaginatedRequest = {
  limit?: number
  page: number
}

export type PaginatedResponse<T> = {
  items: T[]
  total: number
  currentPage: number
  limit: number
  totalPages: number
  onPageChange: (page: number) => void
}
