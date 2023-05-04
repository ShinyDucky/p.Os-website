import Link from 'next/link';
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

const NotFoundPage = () => {
  return <>
  <Head>
<title>Error 404 - Page Not Found</title>
<link rel="icon" href="/pirate-zip_pfp.ico"/>
</Head>
    <div1 className={styles.errorbkg}><div className={styles.errorhead}>
      <h1>Error 404 - Page Not Found</h1>
      {/* </div> */}
      <a href='/' target='_self'>
      <div className={styles.errorsub}>return to main
</div>
    </a></div>
    <div className={styles.errorpic}><Image
                src="/pirate-zip_pfp.png"
                alt="pirate-zip's pfp"
                className={styles.vercelLogo}
                width={100}
                height={100}
                priority
              />
</div>
</div1>
</>
}

export default NotFoundPage