import Link from 'next/link';
import styles from '@/styles/Home.module.css'

const NotFoundPage = () => {
  return <>
    <div className={styles.errorhead}>
      <h1>404 - Page Not Found</h1>
      </div>
      <a href='/' target='_self'>
      <div className={styles.errorsub}>return to main</div>
      <link></link>
    </a>
</>
}

export default NotFoundPage