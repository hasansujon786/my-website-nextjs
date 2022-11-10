interface Props {
  children?: React.ReactNode
  icon?: React.ReactNode
  href?: string
}

const ProjectLink = ({ href = '#', ...props }: Props) => {
  console.log(props.icon)
  return (
    <a
      href={href}
      className='inline-flex items-center space-x-2.5 text-sm text-zinc-300 decoration-zinc-500
      hover:text-yellow-500 hover:decoration-yellow-600
      underline underline-offset-4 decoration-1 decoration-dotted transition ease-in duration-200'
    >
      {props.icon && <span className='text-sm -mb-0.5'>{props.icon}</span>}
      <span>{props.children}</span>
    </a>
  )
}

export default ProjectLink
