import SectionTag from '../atoms/SectionTag'

const Hero = (props: {}) => {
  return (
    <div className='container pb-20 pt-16'>
      <div className='flex justify-between px-'>
        {/* <!-- left side contetn --> */}
        <div className=''>
          <SectionTag title="Hello, I'm" />
          <h1 className='text-5xl md:text-[3.50rem] font-bold leading-tighter tracking-tighter mb-4 font-heading'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500'>
              Hasan
            </span>
            <br />
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 sm:whitespace-nowrap'>
              Mahmud
            </span>
          </h1>
          <div className='max-w-md'>
            <p className='text-xl text-gray-600 mb-8 dark:text-slate-400'>
              AstroWind is a production ready template to start your new website using Astro + Tailwind CSS. It has been
              designed following Best Practices, SEO, Accessibility, <span className='inline sm:hidden'>...</span>
              <span className='hidden sm:inline'>
                Dark Mode, Great Page Speed, image optimization, sitemap generation and more.
              </span>
            </p>
          </div>
          <div>{/* <GradientButton /> */}</div>
        </div>
        {/* <!-- right side image --> */}
        <div className=''>
          <div className='w-72 aspect-square bg-red-200'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
