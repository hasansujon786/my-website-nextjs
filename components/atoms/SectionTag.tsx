interface Props {
  title: string
  uppercase?: boolean
}

const SectionTag = ({ title, uppercase = true }: Props) => {
  return (
    <div className='flex justify-start items-center space-x-2 text-accent'>
      <span className='border-b-[3px] w-4 inline-block border-current'></span>
      <p className={`text-base font-extrabold ${uppercase && 'uppercase'}`}>{title}</p>
    </div>
  )
}

export default SectionTag
