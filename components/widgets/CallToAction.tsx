const CallToAction = (props: {}) => {
  return (
    <div className='container'>
      <div className='py-12 px-12'>
        {/* <!-- card --> */}
        <div className='px-14 py-12 bg-darker-2 flex justify-between rounded-2xl shadow-xl dark:shadow-none'>
          <section className='max-w-sm'>
            <h2 className='text-4xl md:text-4xl font-bold mb-4 font-heading'>
              Have a Project? <br /> Let’s talk
            </h2>
            <p className='mt-6 mr-24 text-base'>Be very surprised by these huge fake numbers you ara.</p>
          </section>

          <section className='w-full flex justify-center items-center'>{/* <GradientButton /> */}</section>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
