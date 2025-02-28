import { getProductCategoryLabel } from '@/components/product/filter/utils'
import { ProductCategory } from '@/domain/enum/product'
import { Product } from '@/domain/types/product'

type ProductForm = Omit<Product, 'id' | 'rating'>

export type FieldType = 'text' | 'select' | 'number'

export type FormFieldType = {
  placeholder: string
  label: string
  type: FieldType
  options?: {
    label: string
    value: string
  }[]
}

export const PRODUCT_FORM_FIELDS: Record<keyof ProductForm, FormFieldType> = {
  title: {
    label: 'Nome do Produto',
    type: 'text',
    placeholder: 'Digite o nome do produto',
  },
  description: {
    label: 'Descrição',
    type: 'text',
    placeholder: 'Uma breve descrição do produto',
  },
  category: {
    label: 'Categoria',
    type: 'select',
    placeholder: 'Selecione uma categoria',
    options: Object.values(ProductCategory).map((category) => {
      return {
        label: getProductCategoryLabel(category),
        value: category,
      }
    }),
  },
  price: {
    label: 'Preço',
    placeholder: 'Digite o preço',
    type: 'number',
  },
  image: {
    label: 'Imagem do Produto',
    placeholder: 'Cole a URL da imagem do produto',
    type: 'text',
  },
}
