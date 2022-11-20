import { FiDownload } from 'react-icons/fi'
import Button from '../atoms/Button'
import ScrollDown from '../atoms/ScrollDown'
import SectionTag from '../atoms/SectionTag'
import BongoCat from './BongoCat'
import Socials from './Socials'

const GradientText = (props: {}) => {
  return (
    <h1 className='gradient-text text-8xl uppercase font-extrabold leading-[.77] tracking-[-0.06em]'>
      Hasan <br /> Mahmud
    </h1>
  )
}

const Hero = (props: {}) => {
  return (
    <div className='container pb-16 pt-8'>
      <div className='flex relative'>
        <div className='absolute -bottom-16 -right-6 -translate-x-1/2'>
          <ScrollDown />
        </div>

        <div className='mr-10 pt-1'>
          <Socials />
        </div>
        {/* <!-- left side contetn --> */}
        <div className='mr-auto'>
          <SectionTag uppercase={false} title="Hello, I'm" />
          <div className='-ml-1.5 mt-3'>
            <GradientText />
          </div>

          <div className='mt-2 mb-4'>
            <p className='text-xl font-semibold tracking-wide text-accent'>Mobile Application + Web Developer</p>
          </div>

          <div className='max-w-md space-y-3 text-zinc-200 text-lg'>
            <p>A multidisciplinary developer with a passion for creating engaging, entertaining user experiences. ✨</p>
            {/* <p>Currently working as freelance developer.</p> */}
            <p>
              I am available for any kind of job opportunity <br /> that suits my interests. 👩🏻‍💻
            </p>
          </div>
          <div className='mt-6 mb-2 space-x-3 flex'>
            <Button size='md' varient='solid-green' icon={<FiDownload />}>
              Download CV
            </Button>
            {/* <Button size='md' varient='translusant' icon={<FiSend className='text-sm' />}> */}
            {/*   Contact me */}
            {/* </Button> */}
          </div>
        </div>
        {/* <!-- right side image --> */}
        <div className='w-1/2 order flex justify-center items-center'>
          <div className='w-4/5 mt-28 mr-14'>
            <BongoCat />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
