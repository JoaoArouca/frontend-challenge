import { productSchema } from '@/domain/schemas/product'
import { Product } from '@/domain/types/product'
import { useCreateProduct } from '@/queries/useCreateProduct'
import { Button } from '@frontend-challenge/ui/components/button'
import { Form } from '@frontend-challenge/ui/components/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { PRODUCT_FORM_FIELDS } from './constants'
import { ProductFormField } from './form-field'

type ProductFormProps = {
  initialValue?: Product
  onSuccess: () => void
}

export const ProductForm = ({ onSuccess, initialValue }: ProductFormProps) => {
  const isEditing = !!initialValue

  const { isPending: isCreatingProduct, mutateAsync: createProduct } =
    useCreateProduct()

  const form = useForm<Product>({
    resolver: zodResolver(productSchema),
    defaultValues: initialValue || {
      title: '',
      price: 0,
      description: '',
      category: undefined,
      image: '',
      rating: { rate: 0, count: 0 },
    },
  })

  const onSubmit = async (data: Product) => {
    try {
      if (isEditing) {
        await createProduct({ ...initialValue, ...data })
      } else {
        await createProduct(data)
      }
      toast.success('Produto salvo com sucesso! 🎉')
      onSuccess()
      form.reset()
    } catch (error) {
      toast.error('Erro ao salvar produto. Tente novamente.')
    }
  }

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
              isEditing={isEditing}
            />
          ))}
        </div>

        <div className="flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            disabled={isCreatingProduct}
          >
            Cancelar
          </Button>
          <Button type="submit" disabled={isCreatingProduct}>
            {isEditing ? 'Salvar Alterações' : 'Criar Produto'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
