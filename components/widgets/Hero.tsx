import { FiDownload } from 'react-icons/fi'
import Button from '../atoms/Button'
import ScrollDown from '../atoms/ScrollDown'
import SectionTag from '../atoms/SectionTag'
import BongoCat from './BongoCat'
import Socials from './Socials'

const HeroContent = () => {
  return (
    <div>
      <SectionTag uppercase={false} title="Hello, I'm" />
      <div className='-ml-1.5 mt-3'>
        <h1
          className='gradient-text text-7xl font-extrabold uppercase tracking-[-0.06em] sm:text-[7rem]'
          style={{ lineHeight: 0.77 }}
        >
          Hasan <br /> Mahmud
        </h1>
      </div>

      <div className='mt-2 mb-1 flex items-end gap-2'>
        <p className='text-3xl font-semibold tracking-wide text-accent'>Fullstack Developer</p>
        <div className='mb-2 h-1 flex-1 bg-accent/60'></div>
      </div>

      <div className='max-w-md space-y-3 text-lg text-zinc-200'>
        <p>A multidisciplinary developer with a passion for creating engaging, entertaining user experiences. ✨</p>
        {/* <p>Currently working as freelance developer.</p> */}
        <p>
          I am available for any kind of job opportunity <br className='hidden sm:inline' /> that suits my interests. 👩🏻‍💻{' '}
        </p>
      </div>
      <div className='mt-6 mb-2 flex space-x-3'>
        <Button size='lg' varient='translusant' icon={<FiDownload />}>
          Download CV
        </Button>
      </div>
    </div>
  )
}

const Hero = (props: {}) => {
  return (
    <div className='container pb-8 pt-4 lg:pb-16 lg:pt-8'>
      <div className='relative flex flex-col gap-12 lg:flex-row'>
        <section className='mr-auto flex gap-8 md:gap-10'>
          <div className='hidden pt-1 sm:flex'>
            <Socials />
          </div>
          <HeroContent />
        </section>

        {/* <!-- right side image --> */}
        <section className='flex flex-1 items-center justify-end'>
          <div className='w-full py-4 pr-4 sm:w-4/5 lg:w-full'>
            <BongoCat />
          </div>
        </section>

        <div className='absolute -bottom-16 -right-6 hidden -translate-x-1/2 lg:block'>
          <ScrollDown />
        </div>
      </div>
    </div>
  )
}

export default Hero
