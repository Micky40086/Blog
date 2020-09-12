import React from 'react'
import { NextPage } from 'next'
import Container from '@material-ui/core/Container'

import LeftBar from 'components/LeftBar'
import styles from './DefaultLayout.module.scss'

const DefaultLayout: NextPage = ({ children }) => (
  <div className={styles['main-container']}>
    <LeftBar />

    <Container maxWidth="md">
      <div className="content-wrapper">{children}</div>
    </Container>

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
