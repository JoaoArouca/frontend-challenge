import { Button } from '@frontend-challenge/ui/components/button'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

type NavigationButtonProps = {
  children: ReactNode
  to: string
}

export const NavigationButton = ({ children, to }: NavigationButtonProps) => {
  const router = useRouter()

  return (
    <Button variant="outline" onClick={() => router.push(to)}>
      {children}
    </Button>
  )
}
