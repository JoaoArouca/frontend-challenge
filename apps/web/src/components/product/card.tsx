'use client'

import { Product } from '@/domain/types/product'
import { Badge } from '@frontend-challenge/ui/components/badge'
import { Button } from '@frontend-challenge/ui/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@frontend-challenge/ui/components/card'
import { ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

type ProductCardProps = {
  product: Product
  onAddToCart?: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = () => {
    setIsLoading(true)
    setTimeout(() => {
      if (onAddToCart) {
        onAddToCart(product)
      }
      setIsLoading(false)
    }, 600)
  }

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-md">
      <div className="bg-muted relative aspect-square overflow-hidden">
        {product.rating.rate > 4.5 && (
          <Badge className="bg-primary text-primary-foreground absolute right-2 top-2 z-10 flex items-center gap-2 p-2">
            <Star size={16} /> Melhores Avaliados
          </Badge>
        )}
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.title}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-1 text-base">
            {product.title}
          </CardTitle>
        </div>
        <CardDescription className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">★ {product.rating.rate}</span>
            <span className="text-muted-foreground text-xs">
              ({product.rating.count} avaliações)
            </span>
          </div>
          <Badge variant="outline" className="whitespace-nowrap">
            {product.category}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow px-4 pb-0">
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
        <Button onClick={handleAddToCart} disabled={isLoading} size="sm">
          {isLoading ? (
            <span className="flex items-center gap-1">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Adicionando...
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <ShoppingCart className="h-4 w-4" />
              Adicionar ao carrinho
            </span>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
