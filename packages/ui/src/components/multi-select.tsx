'use client'

import { cn } from '@/lib/utils'

import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'
import { Badge } from './badge'
import { Button } from './button'
import { Command, CommandGroup, CommandItem, CommandList } from './command'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

type Option = {
  value: string
  label: string
}

interface MultiSelectProps {
  options: Option[]
  selected: string[]
  onChange: (selected: string[]) => void
  className?: string
}

export function MultiSelect({
  options,
  selected,
  onChange,
  className,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <div className="flex items-center gap-1 truncate">
            {selected.length > 0 ? (
              <>
                <span className="truncate">
                  {
                    options.find((option) => option.value === selected[0])
                      ?.label
                  }
                </span>
                {selected.length > 1 && (
                  <Badge variant="secondary" className="ml-1">
                    +{selected.length - 1}
                  </Badge>
                )}
              </>
            ) : (
              'Select categories...'
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className={cn('w-full', className)}>
          <CommandList>
            <CommandGroup className="max-h-[300px] overflow-auto">
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => {
                    onChange(
                      selected.includes(option.value)
                        ? selected.filter((item) => item !== option.value)
                        : [...selected, option.value]
                    )
                    setOpen(true)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      selected.includes(option.value)
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
