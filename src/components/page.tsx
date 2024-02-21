import { useEffect } from 'react'

export interface PageProps {
  children: React.ReactNode
  title?: string
}

export function Page({ children, title }: PageProps) {
  useEffect(() => {
    document.title = title || ''
  }, [title])
  return children
}
