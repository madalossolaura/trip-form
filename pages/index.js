import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alura Viagens</title>
        <meta name="description" content="Alura Viagens - Formulário" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Alura Viagens</h1>
        <h2 className={styles.question}>Quando será a viagem?</h2>
      </main>
    </div>
  )
}
