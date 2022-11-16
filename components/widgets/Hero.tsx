import { FiDownload } from 'react-icons/fi'
import Button from '../atoms/Button'
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
          <div className='-ml-1 mt-3'>
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
          <div className='mt-8 mb-2 space-x-3 flex'>
            <Button size='md' varient='solid-green' icon={<FiDownload />}>
              Download CV
            </Button>
            {/* <Button size='md' varient='translusant' icon={<FiSend className='text-sm' />}> */}
            {/*   Contact me */}
            {/* </Button> */}
          </div>
        </div>
        {/* <!-- right side image --> */}
        <div className=''>{/* <div className='w-72 aspect-square bg-accent'></div> */}</div>
      </div>
    </div>
  )
}

export default Hero
