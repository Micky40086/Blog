import { NextPage } from 'next'

import LeftBar from '../LeftBar'
import styles from './default.module.scss'

const DefaultLayout: NextPage = ({ children }) => (
  <div className={styles['main-container']}>
    <LeftBar />

    <div className="content-wrapper">{children}</div>

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default DefaultLayout
