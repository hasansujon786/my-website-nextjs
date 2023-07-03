import { FiExternalLink, FiGithub } from 'react-icons/fi'
import ProjectLink from '../atoms/ProjectLink'
import SectionTag from '../atoms/SectionTag'

const Project = (props: {}) => {
  return (
    <div className='flex flex-col gap-8 py-24 lg:flex-row'>
      <section className=''>
        <div className='w-4/5 space-y-4 lg:max-w-md'>
          <SectionTag title='Project' />
          <div>
            <h2 className='text-5xl font-semibold text-white'>App name</h2>
            <p className='mt-1 text-base text-zinc-600'>UX/UI Design. App Development</p>
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
          <div className='flex gap-5 pt-5'>
            <ProjectLink icon={<FiGithub />}>View Source</ProjectLink>
            <ProjectLink icon={<FiExternalLink />}>View on Play Store</ProjectLink>
          </div>
        </div>
      </section>
      <section className='flex-grow justify-end lg:flex'>
        <div className='aspect-video w-full rounded-lg bg-level-100 ring ring-white/10'></div>
      </section>
    </div>
  )
}

export default Project
