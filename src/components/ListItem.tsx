import React from 'react'

import styles from './ListItem.module.scss'

export default function ListItem(): JSX.Element {
  return (
    <div className={styles['item-container']}>
      <img src="/Tumurin.png" alt="Avatar" />

      <div className={styles['text-container']}>
        <a href="/">Why Every Developer Should Have A Blog</a>
        <div className={styles['meta']}>
          <span className="date">Published 2 days ago</span>
          <span className="time">5 min read</span>
        </div>
        <div className={styles['intro']}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies...
        </div>
      </div>
    </div>
  )
}
