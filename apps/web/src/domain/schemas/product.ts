import { z } from 'zod'
import { ProductCategory } from '../enum/product'

export const productRatingSchema = z.object({
  rate: z.number().min(0).max(5),
  count: z.number().int().nonnegative(),
})

export const productSchema = z.object({
  id: z.number().int().positive().default(1),
  title: z
    .string()
    .min(1, 'Campo obrigatório')
    .max(30, 'O Nome do produto deve ter no máximo 30 caracteres'),
  price: z
    .number()
    .nonnegative('O preço não pode ser negativo')
    .gt(0, { message: 'Preço deve ser maior que 0' }),
  description: z.string().default(''),
  category: z.nativeEnum(ProductCategory, {
    errorMap: () => ({ message: 'Categoria obrigatória' }),
  }),
  image: z.string().url('URL inválida'),
  rating: productRatingSchema.default({ rate: 0, count: 0 }),
})
