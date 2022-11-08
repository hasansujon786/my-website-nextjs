import { ReactNode } from 'react'
type LayoutProps = { children?: ReactNode }

const BaseLayout = (props: LayoutProps) => {
  return (
    <div className='min-h-screen antialiased text-zinc-900 dark:text-zinc-300 tracking-tight bg-white dark:bg-darker-1'>
      {props.children}
    </div>
  )
}

export default BaseLayout
