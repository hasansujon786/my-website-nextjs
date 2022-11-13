const varients = {
  gradient: { bu: 'gradient-bg', sp: 'bg-darker-1 bg-opacity-95 group-hover:bg-opacity-80 ' },
  solid: { bu: 'bg-black hover:bg-gray-900', sp: 'bg-transparent' },
}

const sizes = {
  base: { bu: '', sp: 'px-10 py-3' },
  md: { bu: '', sp: 'px-12 py-4' },
}

interface Props {
  children: React.ReactNode
  varient?: keyof typeof varients
  size?: keyof typeof sizes
}

const Button = ({ children, varient = 'gradient', size = 'base' }: Props) => {
  return (
    <button
      className={`group p-0.5 rounded-full
      uppercase text-base font-semibold tracking-wide text-zinc-100
      transform duration-300 ease-out active:scale-95 ${varients[varient].bu}`}
    >
      <span
        className={`block rounded-full
        transition-colors duration-300 ease-out
        ${sizes[size].sp} ${varients[varient].sp}`}
      >
        {children}
      </span>
    </button>
  )
}
export default Button
