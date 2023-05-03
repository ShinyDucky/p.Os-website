import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>p.OS</title>
    </Head>
    <main className={styles.installnotice}>
      <a
      href='https://discord.com/api/oauth2/authorize?client_id=1070552116650840124&permissions=8&scope=applications.commands%20bot'
      target='_blank'
      >
      <div className={styles.description}>
        <p>Install p.OS</p>
      </div>
      </a>
    </main>
    </>
  )
}
