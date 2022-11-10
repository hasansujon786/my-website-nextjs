import GradientBtn from '../atoms/GradientBtn'
import SectionTag from '../atoms/SectionTag'
import Socials from './Socials'

const GradientText = (props: {}) => {
  return (
    <div className=''>
      <h1 className='gradient-text text-8xl uppercase font-bold leading-[.80] tracking-tighter'>
        Hasan <br /> Mahmud
      </h1>
    </div>
  )
}

const Hero = (props: {}) => {
  return (
    <div className='container pb-20 pt-8'>
      <div className='flex'>
        <div className='mr-10 pt-1'>
          <Socials />
        </div>
        {/* <!-- left side contetn --> */}
        <div className='mr-auto'>
          <SectionTag uppercase={false} title="Hello, I'm" />
          <div className='-ml-2 mt-3'>
            <GradientText />
          </div>
          <div className='max-w-md mt-3 space-y-3'>
            <p className=''>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              Lorem ipsum dolor sit amet, qui minim labore adipisicing.
            </p>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </p>
          </div>
          <div className='mt-12'>
            <GradientBtn />
          </div>
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
