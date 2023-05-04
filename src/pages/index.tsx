import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>p.OS official website - a bot by pirate_zip</title>
      <link rel="icon" href="/pirate-zip_pfp.ico"/>
    </Head>
    <main className={styles.main}>
      <a
      href='/install'/*'https://discord.com/api/oauth2/authorize?client_id=1070552116650840124&permissions=8&scope=applications.commands%20bot'*/
      target='_self'
      >
      <div className={styles.description}>
        <p>Install p.OS</p>
      </div>
      </a>
      </main>
      <main className={styles.tempdescription}>
      <a
      href='/starter_index'
      target='_self'>
        <div className={styles.tempdescription}>
        <p>return to original index.tsx (dev tool)</p>
      </div>
      </a>
    </main>
    </>
  )
}
