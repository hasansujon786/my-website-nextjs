import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = (props: {}) => {
  return (
    <div
      className='py-10 px-12 flex flex-col gap-3 items-center justify-center
      bg-level-100 border-t border-t-zinc-800 border-opacity-50'
    >
      <div className='flex gap-6 text-xl text-zinc-600'>
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
        className='flex items-center gap-3 text-zinc-700
        before:relative before:border-b-2 before:w-4 before:border-current
        after:relative after:border-b-2 after:w-4 after:border-current'
      >
        <p className='cursor-default text-zinc-600 text-xs uppercase font-extrabold tracking-widest'>Find me here</p>
      </div>
    </div>
  )
}

export default Footer
