import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = (props: {}) => {
  return (
    <div
      className='py-10 px-12 flex flex-col gap-3 items-center justify-center
      text-zinc-600 bg-darker-2 border-t border-t-zinc-800 border-opacity-50'
    >
      <div className='flex gap-6 text-xl'>
        <a href='#'>
          <FiGithub />
        </a>
        <a href='#'>
          <FiLinkedin />
        </a>
        <a href='#'>
          <FiTwitter />
        </a>
      </div>

      <div
        className='flex items-center gap-3
        before:relative before:border-b-2 before:w-5 before:border-current
        after:relative after:border-b-2 after:w-5 after:border-current'
      >
        <p className='uppercase text-xs font-bold italic tracking-widest'>Find me on</p>
      </div>
    </div>
  )
}

export default Footer
