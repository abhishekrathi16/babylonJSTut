import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useStore from '../store/store'

const Home: NextPage = () => {
  //still learning Zustand with TypeScript
  const color = useStore((state)=>state.color)
  const changeColor = useStore((state)=>state.changeColor)
  return (
    <div className={styles.container}>
      <div onClick={changeColor} className="iconBox">..reset code..</div>
      <h1>{color}</h1>
    </div>
  )
}

export default Home
