import { ReactNode } from 'react'

type HeaderProps = {
  children: ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between">{children}</header>
  )
}
