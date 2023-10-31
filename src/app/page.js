import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import  "../styles/button.css"

export default function Home() {
    const welcomeURL  = "/welcome"
  return (
    <main className={styles.main}>
        <Link href={welcomeURL}>
        <button className="button btn-1">
            go to Welcome page
        </button>
        </Link>
        <span className="tip1">Welcome</span>
        <span className="tip2">Bye</span>
    </main>
  )
}
