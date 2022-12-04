// import { FiSend } from 'react-icons/fi'
// import Button from '../atoms/Button'

const CallToAction = (props: {}) => {
  return (
    <div className='cta-wrapper'>
      <div className='container my-16'>
        {/* <!-- card --> */}
        <div className='py-12 max-w-4xl mx-auto text-center rounded-3xl'>
          <p className='text-xl uppercase font-extrabold tracking-wide text-accent'>Have a Project?</p>
          <h3 className='font-semibold text-5xl sm:text-7xl uppercase font mt-6 font-heading' style={{ lineHeight: 0.95 }}>
            LET‘S W🚀RK <br /> T_G_TH_R
          </h3>
          <div className='mt-10'>
            <a href='#' className='text-xl text-zinc-300/80 hover:text-accent underline underline-offset-2'>
              hasansujon786@gmail.com
            </a>
            {/* <Button varient='outlined' size='md' icon={<FiSend className='text-sm' />}> */}
            {/*   Send me an email */}
            {/* </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
