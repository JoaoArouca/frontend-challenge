import { ProductCategory } from '@/domain/enum/product'
import { ProductFilters } from '@/domain/types/product'
import { Button } from '@frontend-challenge/ui/components/button'
import { MultiSelect } from '@frontend-challenge/ui/components/multi-select'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@frontend-challenge/ui/components/select'
import { X } from 'lucide-react'
import { useProductFilter } from './useProductFilter'

type ProductFilterProps = {
  filters: ProductFilters
}

export const ProductFilter = ({ filters }: ProductFilterProps) => {
  const {
    sortOptions,
    onSelectSort,
    categoryOptions,
    onSelectCategory,
    hadActiveFilters,
    resetFilters,
  } = useProductFilter({ filters })

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

      {hadActiveFilters && (
        <Button variant="default" onClick={resetFilters}>
          <span className="flex items-center gap-2">
            <X size={16} />
            Remover filtros
          </span>
        </Button>
      )}
    </div>
  )
}
