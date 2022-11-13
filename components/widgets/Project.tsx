import { FiExternalLink, FiGithub } from 'react-icons/fi'
import SectionTag from '../atoms/SectionTag'
import ProjectLink from '../atoms/ProjectLink'

const Project = (props: {}) => {
  return (
    <div className='flex justify-between items-center py-24'>
      <section className=''>
        <div className='max-w-xs space-y-4'>
          <SectionTag title='Project' />
          <div>
            <h1 className='text-5xl font-bold text-zinc-100'>App name</h1>
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
          <div className='pt-5 space-x-5'>
            <ProjectLink icon={<FiGithub />}>View Source</ProjectLink>
            <ProjectLink icon={<FiExternalLink />}>View on Play Store</ProjectLink>
          </div>
        </div>
      </section>
      <section>
        <div className='bg-darker-2 h-96 aspect-video rounded-lg'></div>
      </section>
    </div>
  )
}

export default Project
