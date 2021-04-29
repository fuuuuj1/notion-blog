import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'
import Hero from '../components/hero'
import Band from '../components/band'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img src="/notion.png" height="55" width="50" alt="Notion" />
      </div>
      <Hero />
      <Band />
    </>
  )
}
