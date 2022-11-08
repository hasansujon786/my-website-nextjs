// import { Icon } from 'astro-icon'

interface Props {
  name: string
  ariaLabel?: string
  href?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export const IconBtn = (props: Props) => {
  return (
    <a
      className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center'
      // aria-label='Twitter'
      onClick={props.onClick}
      href={props.href}
    >
      <p className='w-5 h-5 bg-red-500'></p>
      {/* <Icon name={name} className='w-5 h-5' /> */}
    </a>
  )
}
