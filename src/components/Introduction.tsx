import styles from '../styles/introduction.module.css'
import Image from 'next/image'

function Introduction() {
  return (
    <div className={styles.intro}>
      <div className={styles.inner}>
        <div className={styles.intro_img}>
          <Image src="" alt="モノクロmacの画像" layout="fill" />
        </div>
        <div className={styles.intro_title}>
          <h3>Notionで人生をアウトプットする</h3>
          <p className={styles.intro_link1}>About me</p>
          <p className={styles.intro_link2}>bookshelf</p>
          <p className={styles.intro_link3}>movies</p>
        </div>
      </div>
    </div>
  )
}

export default Introduction
