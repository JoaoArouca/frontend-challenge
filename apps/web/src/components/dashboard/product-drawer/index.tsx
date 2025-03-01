import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@frontend-challenge/ui/components/drawer'

type ProductDrawerProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const ProductDrawer = ({
  children,
  isOpen,
  onClose,
}: ProductDrawerProps) => {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent>
        <div className="overflow-y-auto border-none px-8 py-4">
          <DrawerHeader className="mb-4 flex items-center justify-center">
            <DrawerTitle className="text-lg font-semibold">Produto</DrawerTitle>
          </DrawerHeader>
          <div className="mt-4">{children}</div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
