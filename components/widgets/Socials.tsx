import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { ProspWithClassName } from '../../lib/types'
import { cn } from '../../lib/utils'

const SocialIcon = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <a
      href='#'
      className={cn(
        'group/icon relative rounded-sm p-2 ring-white focus-visible:outline-none focus-visible:ring-2',
        'transition-colors hover:text-accent'
      )}
    >
      <div
        className={cn(
          'absolute left-[calc(100%_+_.2rem)] top-3 bg-white p-0.5 text-white',
          'origin-left -translate-y-1/2 -translate-x-2 -skew-y-6 scale-0',
          'transition-transform group-hover/icon:translate-x-0 group-hover/icon:scale-100'
        )}
      >
        <div className='bg-accent-dark py-0.5 px-[5px] text-base capitalize leading-none'>{title}</div>
      </div>
      {children}
    </a>
  )
}

const Socials = (props: ProspWithClassName) => {
  return (
    <div className={cn('flex h-full flex-col items-center justify-between pb-2 text-zinc-600/80', props.className)}>
      <div className='flex flex-col gap-1 text-2xl'>
        <SocialIcon title='github'>
          <FiGithub size={26} />
        </SocialIcon>
        <SocialIcon title='Linkedin'>
          <FiLinkedin size={26} />
        </SocialIcon>
        <SocialIcon title='Gmail'>
          <FiMail size={26} />
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
