import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { cn } from '../../lib/utils'

const SocialIcon = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <a
      href='#'
      className={cn(
        'group/icon relative rounded-sm p-2 ring-white focus-visible:outline-none focus-visible:ring-2',
        'transition-colors duration-1000 hover:!text-accent hover:!duration-150'
      )}
    >
      <div
        className={cn(
          'absolute left-[calc(100%_+_.2rem)] top-3 -translate-y-1/2 -skew-y-6 scale-0 border-2 border-white/70 text-white',
          'transition-transform group-hover/icon:scale-100 group-focus-visible/icon:scale-100'
        )}
      >
        <div className='bg-accent-dark py-0.5 px-1 text-base capitalize leading-none'>{title}</div>
      </div>
      {children}
    </a>
  )
}

const Socials = () => {
  return (
    <div className='flex h-full flex-col items-center justify-between text-zinc-600 hover:text-accent-dark'>
      <div className='flex flex-col gap-1 text-2xl'>
        <SocialIcon title='github'>
          <FiGithub />
        </SocialIcon>
        <SocialIcon title='Linkedin'>
          <FiLinkedin />
        </SocialIcon>
        <SocialIcon title='Twitter'>
          <FiTwitter />
        </SocialIcon>
      </div>
      <div className='mb-5 mt-auto h-32 border-l-[3px] border-current opacity-60 transition-colors' />
      <p
        className='rotate-180 cursor-default font-extrabold uppercase italic tracking-widest opacity-90 transition-colors'
        style={{ writingMode: 'vertical-rl' }}
      >
        find me on
      </p>
    </div>
  )
}
export default Socials
