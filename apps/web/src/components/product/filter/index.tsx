import { ProductCategory } from '@/domain/enum/product'
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
  const { sortOptions, onSelectSort, categoryOptions, onSelectCategory } =
    useProductFilter()

  return (
    <div className="flex justify-start gap-4">
      <div className="w-[240px]">
        <MultiSelect
          placeholder="Filtre por categoria"
          options={categoryOptions}
          selected={filters.categories || []}
          onChange={(selected) =>
            onSelectCategory(selected as ProductCategory[])
          }
          className="w-[240px]"
        />
      </div>
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
