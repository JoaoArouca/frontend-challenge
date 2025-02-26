import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import { Providers } from './provider'

export const metadata: Metadata = {
  title: 'Frontend Challenge',
  description: 'Frontend Challenge',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
