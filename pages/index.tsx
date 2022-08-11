import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useStore from '../store/store'
import Wave from "../components/elements/Wave"
import 'twin.macro'

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>
          Test
        </title>
        <link rel="icon" href='/favicon.ico'/>
      </Head>
      <main>
        <h1 tw='bg-gray-100 rounded-x1["0.75rem"] p-8'>Wave</h1>
        <Wave/>
      </main>
    </div>
  )
}

