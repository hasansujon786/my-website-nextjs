import Button from '../atoms/Button'

const CallToAction = (props: {}) => {
  return (
    <div className=''>
      {/* <!-- card --> */}
      <div className='px-14 py-14 max-w-4xl mx-auto gradient-bg text-center rounded-3xl'>
        <p className='text-xl uppercase font-bold tracking-wide text-black'>Have a Project?</p>
        <h2 className='text-6xl capitalize font-bold mt-4 font-heading' style={{ lineHeight: 0.95 }}>
          Let’s work <br />
          together
        </h2>
        <div className='mt-8'>
          <Button varient='solid' size='md'>
            Send me an email
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
