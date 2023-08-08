import { TwCurrentScreenName } from '../widgets/utils'

interface LayoutProps {
  children?: React.ReactNode
}

const BaseLayout = (props: LayoutProps) => {
  return (
    <div className='landingpage min-h-screen tracking-tight text-zinc-900 antialiased dark:text-slate-200'>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      <link href='https://fonts.googleapis.com/css2?family=Karla:wght@400;600;800&display=swap' rel='stylesheet' />
      {/* <link */}
      {/*   href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap' */}
      {/*   rel='stylesheet' */}
      {/* /> */}
      {/* <link href='https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap' rel='stylesheet' /> */}
      {props.children}

      <TwCurrentScreenName />
    </div>
  )
}

export default BaseLayout
