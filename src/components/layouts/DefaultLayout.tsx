import React from 'react'
import { NextPage } from 'next'
import { useSetRecoilState } from 'recoil'
import { Container, Hidden } from '@material-ui/core'
import classNames from 'classnames/bind'

import LeftBar from 'components/LeftBar'
import { leftBarOpenState } from '~/recoil/leftBarOpenState'
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)

const DefaultLayout: NextPage = ({ children }) => (
  <div className={styles['main-container']}>
    <LeftBar />
    <MenuBtn />

    <Container maxWidth="md">
      <div className="content-wrapper">{children}</div>
    </Container>
  </div>
)

export default DefaultLayout

const MenuBtn = () => {
  const setIsOpen = useSetRecoilState(leftBarOpenState)

  return (
    <Hidden smUp implementation="css">
      <div className={cx('menu-btn')} onClick={() => setIsOpen(true)}>
        <img src="/Tumurin.png" alt="Mickey" />
      </div>
    </Hidden>
  )
}
