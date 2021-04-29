import Image from 'next/image'
import styles from '../styles/hero.module.css'

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_title}>
        <div className={styles.right_title}>Notion</div>
        <div className={styles.left_title}>
          fuuuu's <span>Blog</span>
        </div>
      </div>

      <div className={styles.hero_image}>
        <Image src="/clock.jpg" alt="notion" layout="fill" />
      </div>
    </div>
  )
}

export default Hero
