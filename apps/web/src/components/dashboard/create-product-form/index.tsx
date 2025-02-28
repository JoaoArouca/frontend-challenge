import { productSchema } from '@/domain/schemas/product'
import { Product } from '@/domain/types/product'
import { useCreateProduct } from '@/queries/useCreateProduct'
import { Button } from '@frontend-challenge/ui/components/button'
import { Form } from '@frontend-challenge/ui/components/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, PlusCircle } from 'lucide-react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { PRODUCT_FORM_FIELDS } from './constants'
import { ProductFormField } from './form-field'

export const CreateProductForm = () => {
  const { isPending: isCreatingProduct, mutateAsync: createProduct } =
    useCreateProduct()

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

  const onSubmit = async (data: Product) => {
    try {
      await createProduct(data)
      toast.success('Produto adicionado com sucesso! 🎉')
      form.reset()
    } catch (error) {
      toast.error('Erro ao adicionar o produto. Tente novamente.')
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
            {isCreatingProduct ? (
              <Fragment>
                <Loader className="animate-spin" size={16} /> Adicionando
                Produto
              </Fragment>
            ) : (
              <Fragment>
                <PlusCircle size={16} /> Adicionar Produto
              </Fragment>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
