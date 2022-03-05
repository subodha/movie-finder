import type { NextPage } from 'next'
import Head from 'next/head'

import TestComp from '@/components/test'
import styles from '@/styles/Home.module.css'

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Movie Finder</title>
      <meta name="description" content="Find movie details" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to Movie Finder !</h1>
      <TestComp />
    </main>
  </div>
)

export default Home
