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
        className='flex items-center px-4 py-2
        text-sm font-semibold tracking-wide transition duration-150 ease-in-out hover:text-accent-light'
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
      className='sticky top-0 z-40 mx-auto w-full flex-none border-b bg-ground/80 dark:border-b-0 md:backdrop-blur-sm'
      id='header'
    >
      <div className='container py-1'>
        <div className='mx-auto w-full py-3 md:flex md:justify-between'>
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
            className='hidden h-screen w-full items-center dark:text-slate-200 md:flex md:h-auto md:w-auto'
            aria-label='Main navigation'
          >
            <ul className='flex w-full flex-col items-center pt-8 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base'>
              <HeaderLink path='#'>Projects</HeaderLink>
              <HeaderLink path='#'>Github</HeaderLink>
              <div className='ml-3 flex items-center gap-4'>
                <ToggleTheme />
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
