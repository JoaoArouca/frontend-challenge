import { Product } from '@/domain/types/product'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@frontend-challenge/ui/components/form'
import { Input } from '@frontend-challenge/ui/components/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@frontend-challenge/ui/components/select'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@frontend-challenge/ui/components/tooltip'
import { AlertCircle } from 'lucide-react'
import { JSX } from 'react'
import { FieldType, FormFieldType } from './constants'

type ProductFormFieldProps = {
  form: any
  fieldKey: keyof Product
  config: FormFieldType
}

export const ProductFormField = ({
  form,
  fieldKey,
  config,
}: ProductFormFieldProps) => {
  const fieldRenderers: Record<
    FieldType,
    (field: any, config: FormFieldType, fieldState: any) => JSX.Element
  > = {
    text: (field, config, fieldState) => (
      <Input
        type="text"
        placeholder={config.placeholder}
        {...field}
        className={`${fieldState.error && 'border-none ring-1 ring-red-500 focus-visible:ring-1 focus-visible:ring-red-500'}`}
      />
    ),
    number: (field, config, fieldState) => (
      <Input
        type="number"
        placeholder={config.placeholder}
        {...field}
        value={field.value || ''}
        min={0}
        step="any"
        onChange={(e) =>
          field.onChange(
            e.target.value === '' ? '' : parseFloat(e.target.value)
          )
        }
        className={`${fieldState.error && 'border-none ring-1 ring-red-500 focus-visible:ring-1 focus-visible:ring-red-500'}`}
      />
    ),
    select: (field, config) => (
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <SelectTrigger>
          <SelectValue placeholder={config.placeholder} />
        </SelectTrigger>
        <SelectContent>
          {config.options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    ),
  }

  return (
    <FormField
      control={form.control}
      name={fieldKey}
      render={({ field, fieldState }) => (
        <FormItem className="relative">
          <div className="flex items-center gap-2">
            <FormLabel className="text-gray-600">{config.label}</FormLabel>
            {fieldState.error && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <AlertCircle size={16} className="text-red-500" />
                  </TooltipTrigger>
                  <TooltipContent>{fieldState.error.message}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <FormControl>
            {fieldRenderers[config.type]?.(field, config, fieldState)}
          </FormControl>
        </FormItem>
      )}
    />
  )
}
