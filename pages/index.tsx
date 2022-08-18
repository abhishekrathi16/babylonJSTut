import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import 'twin.macro'

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>
          Intro to BabylonJS
        </title>
        <link rel="icon" href='/favicon.ico'/>
      </Head>
      <main>
        <Navbar/>
        <div className='flex items-center justify-center flex-col font-bold mt-32'>
          <div>Welcome To My Project!!</div>
          <div>Please go to Cubes for a set of beautiful spinning cubes and to Waves for a sight of flowing waves.</div>
          <div>Redirect using back button on browser tab.</div>
        </div>
      </main>
    </div>
  )
}

