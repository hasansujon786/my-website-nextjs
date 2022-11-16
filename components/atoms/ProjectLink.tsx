interface Props {
  children?: React.ReactNode
  icon?: React.ReactNode
  href?: string
}

const ProjectLink = ({ href = '#', ...props }: Props) => {
  // aria-label='Astrowind Github'
  return (
    <a
      href={href}
      className='inline-flex items-center space-x-2 text-sm text-zinc-300
      underline underline-offset-4 decoration-1 decoration-dotted decoration-zinc-500
      hover:text-accent hover:decoration-accent-dark transition-colors ease-out duration-200'
    >
      {props.icon && <span className='text-sm -mb-0.5'>{props.icon}</span>}
      <span>{props.children}</span>
    </a>
  )
}

export default ProjectLink
