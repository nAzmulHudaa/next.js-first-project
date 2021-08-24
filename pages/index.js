import Link from 'next/link'
import styles from '../styles/Home.module.css'
import  Head  from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name = "keyword" content="ninja" />
      </Head>
      <div>

        <h2 className={styles.title}>Homepage</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam rerum omnis obcaecati nihil placeat pariatur eaque alias cumque, exercitationem sint reprehenderit fuga nulla atque dolorum. Eos autem non ullam culpa placeat! Dignissimos non aspernatur laborum id eos porro labore explicabo accusantium quasi, nostrum qui eligendi placeat impedit doloremque praesentium vero ex. Nisi a, asperiores numquam harum, magni, beatae mollitia reiciendis inventore ex magnam nam est ipsa fugit enim aspernatur.</p>
        <Link href='/ninja'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>


      </div>
    </>

  )
}
