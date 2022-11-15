const varients = {
  // gradient: { bu: 'gradient-bg', sp: 'bg-darker-1 bg-opacity-95 group-hover:bg-opacity-80 transition-colors duration-300 ease-out', },
  outlined: { bu: 'bg-transparent text-zinc-300 border-zinc-300 hover:bg-zinc-300 hover:text-black' },
  solid: { bu: 'bg-black border-black hover:bg-gray-900 hover:border-gray-900' },
  'solid-green': { bu: 'text-gray-800 bg-accent border-accent hover:bg-accent-light hover:border-accent-light' },
}

const sizes = {
  base: { bu: 'px-6 py-2.5' },
  md: { bu: 'px-7 py-3.5' },
  lg: { bu: 'px-8 py-4' },
}

interface Props {
  children: React.ReactNode
  icon?: React.ReactNode
  varient?: keyof typeof varients
  size?: keyof typeof sizes
}

const Button = ({ children, varient = 'solid-green', size = 'base', icon }: Props) => {
  return (
    <button
      className={`group inline-flex items-center space-x-2
      border rounded-full text-base font-semibold capitalize tracking-wide
      transform ease-out transition-transform active:scale-95
      ${varients[varient].bu} ${sizes[size].bu}`}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  )
}
export default Button
