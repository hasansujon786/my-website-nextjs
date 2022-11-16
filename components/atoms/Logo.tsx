const Logo = (props: {}) => {
  return (
    <span className='flex items-center font-semibold pl-1'>
      <span className='mr-1 -mt-0.5 w-1 h-[18px] transform -skew-x-[10deg] bg-red-500 block'/>
      <span className='uppercase tracking-wide text-base whitespace-nowrap text-gray-900 dark:text-white'>
        Hasan Mahmud
      </span>
    </span>
  )
}

export default Logo
