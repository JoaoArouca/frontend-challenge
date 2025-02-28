import { Button } from '@frontend-challenge/ui/components/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@frontend-challenge/ui/components/drawer'
import { Plus } from 'lucide-react'
import { CreateProductForm } from '../create-product-form'

export const CreateProductDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="link" className="focus:ring-0">
          <Plus size={16} /> Adicionar Produto
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="overflow-y-auto px-8 py-4">
          <DrawerHeader className="mb-4 flex items-center justify-center">
            <DrawerTitle className="text-lg font-semibold">
              Adicionar Produto
            </DrawerTitle>
          </DrawerHeader>
          <div className="mt-4">
            <CreateProductForm />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
