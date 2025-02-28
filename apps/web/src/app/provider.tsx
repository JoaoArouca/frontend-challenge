'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, Suspense } from 'react'

import { queryClient } from '@/lib/react-query'
import { Toaster } from 'sonner'

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" richColors />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </QueryClientProvider>
  )
}
