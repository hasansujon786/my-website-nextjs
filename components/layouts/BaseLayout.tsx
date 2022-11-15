interface LayoutProps {
  children?: React.ReactNode
}

const BaseLayout = (props: LayoutProps) => {
  return (
    <div className='min-h-screen antialiased text-zinc-900 dark:text-zinc-300 tracking-tight landingpage'>
    {/* <div className='min-h-screen antialiased text-zinc-900 dark:text-zinc-300 tracking-tight bg-white dark:bg-darker-1'> */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap'
        rel='stylesheet'
      />
      {props.children}
    </div>
  )
}

export default BaseLayout
