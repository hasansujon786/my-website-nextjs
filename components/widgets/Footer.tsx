import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <div
      className='flex flex-col items-center justify-center gap-3 border-t border-t-zinc-800
      border-opacity-50 bg-level-100 py-10 px-12'
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
        before:relative before:w-4 before:border-b-2 before:border-current
        after:relative after:w-4 after:border-b-2 after:border-current'
      >
        <p className='cursor-default text-xs font-extrabold uppercase tracking-widest text-zinc-600'>Find me here</p>
      </div>
    </div>
  )
}

export default Footer
