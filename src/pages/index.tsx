import React from 'react'
import styles from './index.scss'

import LeftBar from '../components/LeftBar'

export default function Index(): JSX.Element {
  return (
    <div className={styles.container}>
      <LeftBar />
    </div>
  )
}
