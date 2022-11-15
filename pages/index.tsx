import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/widgets/Header'
import Hero from '../components/widgets/Hero'
import Project from '../components/widgets/Project'
import CallToAction from '../components/widgets/CallToAction'
import Footer from '../components/widgets/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <Header />
        <Hero />

        <div className='container divide-y-2 divide-zinc-800 border-y-2 border-zinc-800'>
          <Project />
          <Project />
        </div>

        <CallToAction />
        <Footer />
      </main>
    </div>
  )
}

export default Home
