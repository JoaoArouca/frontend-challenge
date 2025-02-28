import { Product } from '@/domain/types/product'
import { Skeleton } from '@frontend-challenge/ui/components/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@frontend-challenge/ui/components/table'

type DashboardTableProps = {
  products: Product[]
  isLoading: boolean
}

export const DashboardTable = ({
  products,
  isLoading,
}: DashboardTableProps) => {
  if (isLoading) return <Skeleton className="h-[500px] w-full" />

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Quantidade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.rating.count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
