import { BsMouse } from 'react-icons/bs'
import { FiChevronDown } from 'react-icons/fi'

const ScrollDown = (props: {}) => {
  return (
    <div className='animate-bounce flex flex-col items-center justify-center'>
      <span className='text-sm'>Scroll</span>
      <BsMouse className='text-xl mt-1.5' />
      <FiChevronDown className='text-xl mt-0.5' />
    </div>
  )
}
export default ScrollDown
