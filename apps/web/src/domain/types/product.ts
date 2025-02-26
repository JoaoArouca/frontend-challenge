import { ProductCategory } from '../enum/product'

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: ProductCategory
  image: string
  rating: ProductRating
}

export type ProductRating = {
  rate: number
  count: number
}
