import Logo from '../atoms/Logo'
import ToggleTheme from '../core/ToggleTheme'

const Header = (props: {}) => {
  return (
    <header
      className='sticky top-0 z-40 flex-none mx-auto w-full bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-darker-1/80 md:backdrop-blur-sm border-b dark:border-b-0'
      id='header'
    >
      <div className='container'>
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
            <ul className='flex flex-col pt-8 md:pt-0 md:flex-row md:self-center w-full md:w-auto text-xl md:text-base'>
              <li>
                <a
                  className='font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out'
                  href='#'
                >
                  Pages
                </a>
              </li>
              <li>
                <a
                  className='font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out'
                  href='#'
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  className='font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out'
                  href='#'
                >
                  Blog
                </a>
              </li>
              <li className='md:hidden'>
                <a
                  className='font-bold hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out'
                  href='#'
                >
                  Github
                </a>
              </li>
            </ul>
            <div className='md:self-center flex items-center mb-4 md:mb-0 ml-2'>
              <div className='hidden items-center md:flex'>
                <ToggleTheme iconClass='w-5 h-5' />
                {/* <a */}
                {/*   href='https://github.com/onwidget/astrowind' */}
                {/*   className='inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5' */}
                {/*   aria-label='Astrowind Github' */}
                {/* > */}
                {/*   {/1* <Icon name='tabler:brand-github' className='w-5 h-5' /> *1/} */}
                {/* </a> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Header
