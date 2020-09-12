import React from 'react'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { Hidden, Drawer, Avatar } from '@material-ui/core'
import { Instagram, GitHub, Home, Person } from '@material-ui/icons'

import { leftBarOpenState } from '~/recoil/leftBarOpenState'
import styles from './LeftBar.module.scss'

export default function LeftBar(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useRecoilState(leftBarOpenState)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div className={styles['drawer-container']}>
      <h1>{`Mickey's Blog`}</h1>
      <Avatar className={styles.avatar} alt="Mickey" src="/Tumurin.png" />
      <p>Hi, my name is Mickey. A fullstack developer.</p>
      <div className={styles['social-btn-group']}>
        <div className={styles['social-btn']}>
          <GitHub />
        </div>
        <div className={styles['social-btn']}>
          <Instagram />
        </div>
      </div>
      <hr />
      <ul className={styles['nav']}>
        <li className={`${styles['nav-link']} ${styles['active']}`}>
          <Link href="/">
            <a>
              <Home />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li className={styles['nav-link']}>
          <Link href="/about">
            <a>
              <Person />
              <span>About</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )

  return (
    <nav aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          // container={container}
          variant="temporary"
          anchor={'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer variant="permanent" open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}
