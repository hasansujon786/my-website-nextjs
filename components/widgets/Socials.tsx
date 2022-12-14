import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Socials = (props: {}) => {
  return (
    <div className='flex flex-col justify-between items-center h-full text-zinc-700'>
      <div className='flex flex-col gap-5 text-2xl'>
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
      <div className='border-l-[3px] h-32 mb-5 mt-auto border-current opacity-40' />
      <p
        className='opacity-90 cursor-default uppercase font-extrabold italic tracking-widest rotate-180'
        style={{ writingMode: 'vertical-rl' }}
      >
        Follow Me
      </p>
    </div>
  )
}
export default Socials
