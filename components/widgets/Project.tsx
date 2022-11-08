// import { Icon } from 'astro-icon'
import SectionTag from '../atoms/SectionTag'

const Project = (props: {}) => {
  return (
    <div className='flex justify-between items-center py-24'>
      <section className=''>
        <div className='max-w-xs space-y-5'>
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
          <div className='pt-5'>
            <a
              className='inline-flex space-x-2 text-sm text-zinc-300 decoration-zinc-500 hover:text-yellow-500 hover:decoration-yellow-600 underline underline-offset-4 decoration-1 decoration-dotted transition ease-in duration-200'
              href='#'
            >
              <span>View on Play Store</span>
              {/* <Icon name='heroicons-outline:arrow-narrow-right' className='w-5 h-5 mt-0.5 text-current' /> */}
            </a>
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
