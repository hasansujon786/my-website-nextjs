import { FiSend } from 'react-icons/fi'
import Button from '../atoms/Button'

const CallToAction = (props: {}) => {
  return (
    <div className='cta-wrapper'>
      <div className='container my-16'>
        {/* <!-- card --> */}
        <div className='px-14 py-12 max-w-4xl mx-auto text-center rounded-3xl'>
          <p className='text-xl uppercase font-bold tracking-wide text-accent'>Have a Project?</p>
          <h2 className='text-white text-[90px] capitalize font-bold mt-6 font-heading' style={{ lineHeight: 0.95 }}>
            Let’s work <br />
            together
          </h2>
          <div className='mt-10'>
            <Button varient='outlined' size='lg' icon={<FiSend className='text-sm' />}>
              Send me an email
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
