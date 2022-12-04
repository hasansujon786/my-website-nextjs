import { FiExternalLink, FiGithub } from 'react-icons/fi'
import SectionTag from '../atoms/SectionTag'
import ProjectLink from '../atoms/ProjectLink'

const Project = (props: {}) => {
  return (
    <div className='flex flex-col gap-8 lg:flex-row _justify-between _items-center py-24'>
      <section className=''>
        <div className='w-4/5 lg:max-w-md space-y-4'>
          <SectionTag title='Project' />
          <div>
            <h2 className='text-5xl font-semibold text-white'>App name</h2>
            <p className='text-base text-zinc-600 mt-1'>UX/UI Design. App Development</p>
          </div>
          <p className=''>
            Fuape is a collection of 1000 funny ape NFTs - unique digital collectibles living on the Ethereum
            blockchain.
          </p>
          <div className='flex space-x-10'>
            <p className='text-base text-zinc-600'>react</p>
            <p className='text-base text-zinc-600'>typescript</p>
            <p className='text-base text-zinc-600'>express</p>
          </div>
          <div className='pt-5 flex gap-5'>
            <ProjectLink icon={<FiGithub />}>View Source</ProjectLink>
            <ProjectLink icon={<FiExternalLink />}>View on Play Store</ProjectLink>
          </div>
        </div>
      </section>
      <section className='flex-grow outline lg:flex justify-end'>
        <div className='bg-level-100 w-full md:w-auto lg:h-96 aspect-video rounded-lg'></div>
      </section>
    </div>
  )
}

export default Project
