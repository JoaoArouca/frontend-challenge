import { getProductCategoryLabel } from '@/components/product/filter/utils'
import { Product } from '@/domain/types/product'
import { Button } from '@frontend-challenge/ui/components/button'
import { Skeleton } from '@frontend-challenge/ui/components/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@frontend-challenge/ui/components/table'
import { PencilIcon, Trash } from 'lucide-react'

type DashboardTableProps = {
  products: Product[]
  isLoading: boolean
  onRowClick: (product: Product) => void
  onDeleteAction: (product: Product) => void
}

export const DashboardTable = ({
  products,
  isLoading,
  onRowClick,
  onDeleteAction,
}: DashboardTableProps) => {
  if (isLoading) {
    return (
      <div className="w-full rounded-lg border p-4 shadow-sm">
        <div className="flex items-center justify-between border-b pb-3">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-24" />
        </div>
        <div className="mt-3 space-y-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 rounded-md bg-gray-50 p-2"
            >
              <Skeleton className="h-5 w-8" />
              <Skeleton className="h-5 flex-1" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-12" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full overflow-hidden rounded-lg border shadow-sm">
      <Table className="w-full border-collapse">
        <TableHeader className="bg-gray-100">
          <TableRow className="border-b">
            <TableHead className="p-2 text-left font-medium text-gray-600">
              Nome
            </TableHead>
            <TableHead className="p-2 text-left font-medium text-gray-600">
              Categoria
            </TableHead>
            <TableHead className="p-2 text-left font-medium text-gray-600">
              Preço
            </TableHead>
            <TableHead className="p-2 text-left font-medium text-gray-600">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              className="border-b transition-all hover:bg-gray-50"
            >
              <TableCell
                onClick={() => onRowClick(product)}
                className="flex cursor-pointer items-center justify-start gap-4 p-2 text-gray-700"
              >
                {product.title} <PencilIcon size={12} />
              </TableCell>
              <TableCell className="p-2 font-semibold text-gray-700">
                {getProductCategoryLabel(product.category)}
              </TableCell>
              <TableCell className="justify-end p-2 font-semibold text-gray-700">
                ${product.price.toFixed(2)}
              </TableCell>
              <TableCell className="p-2">
                <Button
                  size="icon"
                  className="bg-red-600 outline-none transition hover:bg-red-700 focus-visible:ring-0"
                  variant="destructive"
                  onClick={() => onDeleteAction(product)}
                >
                  <Trash size={14} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
