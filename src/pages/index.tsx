import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img src="/notion.png" height="55" width="50" alt="Notion" />
        <h1>fuuuu's Blog</h1>
      </div>
    </>
  )
}
