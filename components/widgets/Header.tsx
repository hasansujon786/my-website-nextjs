import { FiSend } from 'react-icons/fi'
import Button from '../atoms/Button'
import Logo from '../atoms/Logo'
import ToggleTheme from '../core/ToggleTheme'

interface Props {
  children?: React.ReactNode
  path: string
}
const HeaderLink = (props: Props) => {
  return (
    <li>
      <a
        className='text-sm font-semibold tracking-wide hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out'
        href={props.path}
      >
        {props.children}
      </a>
    </li>
  )
}

const Header = (props: {}) => {
  return (
    <header
      className='sticky top-0 z-40 flex-none mx-auto w-full bg-transparent md:backdrop-blur-sm border-b dark:border-b-0'
      id='header'
    >
      <div className='container py-1'>
        <div className='py-3 mx-auto w-full md:flex md:justify-between'>
          <div className='flex justify-between'>
            <a className='flex items-center' href='#'>
              <Logo />
            </a>
            <div className='flex items-center md:hidden'>
              <ToggleTheme />
              {/* <ToggleMenu /> */}
            </div>
          </div>
          <nav
            className='items-center w-full md:w-auto hidden md:flex text-gray-600 dark:text-slate-200 h-screen md:h-auto'
            aria-label='Main navigation'
          >
            <ul className='flex flex-col pt-8 md:pt-0 md:flex-row items-center md:self-center w-full md:w-auto text-xl md:text-base'>
              <HeaderLink path='#'>Projects</HeaderLink>
              <HeaderLink path='#'>Github</HeaderLink>
              <div className='ml-3 flex items-center gap-4'>
                {/* <ToggleTheme /> */}
                <Button varient='translusant' size='sm' icon={<FiSend className='text-xs' />}>
                  Contact me
                </Button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Header
