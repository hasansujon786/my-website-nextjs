const varients = {
  // gradient: { bu: 'gradient-bg', sp: 'bg-darker-1 bg-opacity-95 group-hover:bg-opacity-80 transition-colors duration-300 ease-out', },
  outlined: { bu: 'bg-transparent text-zinc-300 border-zinc-300 hover:bg-zinc-300 hover:text-black' },
  translusant: { bu: 'bg-[#282537] border-gray-700 hover:bg-gray-700/50 hover:border-gray-700' },
  solid: { bu: 'bg-black border-black hover:bg-gray-900 hover:border-gray-900' },
  'solid-green': { bu: 'text-gray-800 bg-accent border-accent hover:bg-accent-light hover:border-accent-light' },
}

const sizes = {
  sm: { bu: 'px-5 py-2 text-sm' },
  base: { bu: 'px-6 py-2.5 text-base' },
  md: { bu: 'px-7 py-3.5 text-base' },
  lg: { bu: 'px-8 py-4 text-base' },
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
      border rounded-full font-semibold capitalize tracking-wide
      transform ease-out transition-transform active:scale-95
      ${varients[varient].bu} ${sizes[size].bu}`}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  )
}
export default Button
