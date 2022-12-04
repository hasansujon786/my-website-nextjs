
export const TwCurrentScreenName = (props: {}) => {
  return (
    <div className='fixed bg-red-500 text-white rounded-sm bottom-3 right-3 w-8 h-8 grid place-items-center'>
      <p style={{ fontSize: '16px' }}>
        <span className='sm:hidden'>xs</span>
        <span className='hidden sm:block md:hidden'>sm</span>
        <span className='hidden md:block lg:hidden'>md</span>
        <span className='hidden lg:block xl:hidden'>lg</span>
        <span className='hidden xl:block 2xl:hidden'>xl</span>
        <span className='hidden 2xl:block'>2xl</span>
      </p>
    </div>
  )
}
