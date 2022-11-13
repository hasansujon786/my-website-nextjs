interface Props {
  icon: React.ReactNode
  ariaLabel?: string
  href?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export const IconBtn = ({ href = '#', ...props }: Props) => {
  return (
    <a
      className='p-2.5 text-base inline-flex items-center text-gray-500 rounded-lg
      dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700
      focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700'
      // aria-label='Twitter'
      onClick={props.onClick}
      href={href}
    >
      {props.icon}
    </a>
  )
}
