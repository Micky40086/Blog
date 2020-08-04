import React from 'react'
import Link from 'next/link'

import styles from './ListItem.module.scss'
import { Post as PostType } from '~/pages/index'

export default function ListItem({ post }: { post: PostType }): JSX.Element {
  return (
    <div className={styles['item-container']}>
      <img src="/Tumurin.png" alt="Avatar" />

      <div className={styles['text-container']}>
        <Link href={`/posts/${post.id}`}>
          <a>{post.title}</a>
        </Link>
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
