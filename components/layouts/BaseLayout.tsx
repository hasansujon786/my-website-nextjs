interface LayoutProps {
  children?: React.ReactNode
}

const BaseLayout = (props: LayoutProps) => {
  return (
    <div
      className='min-h-screen landingpage selection:bg-red-500/80 selection:text-white
      antialiased text-zinc-900 dark:text-zinc-300 tracking-tight'
    >
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      <link href='https://fonts.googleapis.com/css2?family=Karla:wght@400;600;800&display=swap' rel='stylesheet' />
      {/* <link */}
      {/*   href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap' */}
      {/*   rel='stylesheet' */}
      {/* /> */}
      {/* <link href='https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap' rel='stylesheet' /> */}
      {props.children}
    </div>
  )
}

export default BaseLayout
