import { productSchema } from '@/domain/schemas/product'
import { Product } from '@/domain/types/product'
import { Button } from '@frontend-challenge/ui/components/button'
import { Form } from '@frontend-challenge/ui/components/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { PRODUCT_FORM_FIELDS } from './constants'
import { ProductFormField } from './form-field'

export const CreateProductForm = () => {
  const form = useForm<Product>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: '',
      price: 0,
      description: '',
      category: undefined,
      image: '',
      rating: { rate: 0, count: 0 },
    },
  })

  const onSubmit = (data: Product) => {
    console.log('Produto enviado:', data)
  }
  console.log(form.formState.errors)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {Object.entries(PRODUCT_FORM_FIELDS).map(([key, fieldConfig]) => (
            <ProductFormField
              key={key}
              form={form}
              fieldKey={key as keyof Product}
              config={fieldConfig}
            />
          ))}
        </div>

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Cancelar
          </Button>
          <Button type="submit">
            <PlusCircle size={16} /> Adicionar Produto
          </Button>
        </div>
      </form>
    </Form>
  )
}
