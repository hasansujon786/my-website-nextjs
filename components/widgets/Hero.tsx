import { FiPaperclip } from 'react-icons/fi'
import { ProspWithClassName } from '../../lib/types'
import { cn } from '../../lib/utils'
import Button from '../atoms/Button'
import ScrollDown from '../atoms/ScrollDown'
import SectionTag from '../atoms/SectionTag'
import BongoCat from './BongoCat'
import Socials from './Socials'

export const Intro = (props: ProspWithClassName) => {
  return (
    <div className={cn(props.className)}>
      <SectionTag uppercase={false} title="Hello, I'm" />
      <h1
        className='gradient-text -ml-1.5 text-7xl font-extrabold uppercase tracking-[-0.06em] sm:text-8xl md:text-7xl lg:text-8xl'
        style={{ lineHeight: 0.77 }}
      >
        Hasan <br /> Mahmud
      </h1>

      <div className='mt-1 flex items-end gap-1.5'>
        <p className='text-3xl font-semibold tracking-wide text-accent'>Softwere Developer</p>
        <div className='mb-2 h-1 w-1 bg-accent/70'></div>
      </div>
    </div>
  )
}
const Description = (props: ProspWithClassName) => {
  return (
    <div className={cn(props.className)}>
      <div className='mt-4 max-w-md space-y-2 text-white lg:max-w-lg'>
        <p>A multidisciplinary developer with a passion for creating engaging, entertaining user experiences. ✨</p>
        {/* <p>Currently working as freelance developer.</p> */}
        <p>
          I am available for any kind of job opportunity <br className='hidden sm:inline' /> that suits my interests. 👩🏻‍💻{' '}
        </p>
      </div>
      <div className='mt-6 mb-2 flex space-x-3'>
        <Button className='px-7' varient='solid-green' icon={<FiPaperclip size={16} />}>
          Download CV
        </Button>
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <section className='container relative py-6 pb-12 lg:pt-8 lg:pb-16'>
      <div className='mr-auto flex gap-8 md:gap-10'>
        <Socials className='hidden lg:flex' />

        <div className='grid flex-1 grid-cols-1 md:grid-cols-[5fr_4fr] lg:grid-cols-2 '>
          <Intro />
          <Description className='col-start-1 row-start-2' />
          <BongoCat className='hidden md:row-span-2 md:block' />
        </div>
      </div>

      <div className='absolute bottom-0 right-0 hidden -translate-x-1/2 lg:block'>
        <ScrollDown />
      </div>
    </section>
  )
}

export default Hero
