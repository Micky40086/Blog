import React from 'react'
import { NextPage } from 'next'

import LeftBar from 'components/LeftBar'
import styles from './DefaultLayout.module.scss'

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
