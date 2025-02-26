import { z } from 'zod'
import { CustomProductSort, ProductCategory } from '../enum/product'
import { productRatingSchema, productSchema } from '../schemas/product'

export type Product = z.infer<typeof productSchema>
export type ProductRating = z.infer<typeof productRatingSchema>

export type ProductFilters = {
  categories?: ProductCategory[]
  customSort?: CustomProductSort
}
