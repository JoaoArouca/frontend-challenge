import { ProductFilters } from '@/domain/types/product'
import { MultiSelect } from '@frontend-challenge/ui/components/multi-select'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@frontend-challenge/ui/components/select'
import { useProductFilter } from './useProductFilter'

type ProductFilterProps = {
  filters: ProductFilters
}

export const ProductFilter = ({ filters }: ProductFilterProps) => {
  const { sortOptions, onSelectSort } = useProductFilter()

  return (
    <div className="flex gap-4">
      <MultiSelect
        placeholder="Filtre por categoria"
        options={[]}
        selected={[]}
        onChange={() => {}}
      />
      <Select onValueChange={onSelectSort} value={filters.customSort || ''}>
        <SelectTrigger className="w-[240px] bg-white">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
