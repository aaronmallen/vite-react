import { Util } from '../lib/util'

export interface FullscreenLayoutProps {
  children: React.ReactNode
  className?: string
}

export function FullscreenLayout({ children, className }: FullscreenLayoutProps) {
  return <div className={Util.JSX.mergeClassNames('w-full h-screen', className)}>{children}</div>
}
