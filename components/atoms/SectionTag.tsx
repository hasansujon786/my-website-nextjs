interface Props {
  title: string
}

const SectionTag = (props: Props) => {
  return (
    <div className='flex justify-start items-center space-x-2 text-zinc-600'>
      <span className='border-b-[3px] w-5 inline-block border-current'></span>
      <p className='text-base uppercase font-bold'>{props.title}</p>
    </div>
  )
}

export default SectionTag
