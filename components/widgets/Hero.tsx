import { FiDownload } from 'react-icons/fi'
import Button from '../atoms/Button'
import ScrollDown from '../atoms/ScrollDown'
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

          <div className='mt-1 mb-4'>
            {/* <p className='text-xl font-bold tracking-wide text-accent'>Full Stack Developer</p> */}
            <p className='text-xl font-semibold tracking-wide text-accent'>Mobile Application + Web Developer</p>
            {/* <ul className='dot-list text-sm flex space-x-2 fontsemibold tracking-wide'> */}
            {/*   <li>Web Developer</li> */}
            {/*   <li>Software Engineer</li> */}
            {/*   <li>Programmer</li> */}
            {/*   {/1* <li className='dot'>Software Engineer</li> *1/} */}
            {/* </ul> */}
          </div>

          <div className='max-w-md space-y-3 tracking-wide'>
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
        <div className='relative'>
          <div className='absolute -bottom-16 right-0'>
            <ScrollDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
