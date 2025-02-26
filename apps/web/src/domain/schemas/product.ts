import { z } from 'zod'
import { ProductCategory } from '../enum/product'

export const productRatingSchema = z.object({
  rate: z.number().min(0).max(5),
  count: z.number().int().nonnegative(),
})

export const productSchema = z.object({
  id: z.number().int().positive(),
  title: z
    .string()
    .min(1)
    .max(30, { message: 'O Nome do produto deve ter no máximo 30 caracteres' }),
  price: z.number().min(0),
  description: z.string().min(1),
  category: z.nativeEnum(ProductCategory),
  image: z.string().url(),
  rating: productRatingSchema,
})
