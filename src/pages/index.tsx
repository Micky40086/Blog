import React from 'react'
import { GetStaticProps } from 'next'
import classNames from 'classnames/bind'

import ListItem from 'components/ListItem'
import styles from './index.module.scss'

const cx = classNames.bind(styles)

export interface PostListProps {
  posts?: Post[]
}

export interface Post {
  id: number
  title: string
  description: string
  image: {
    url: string
  }
  created_at: string
  updated_at: string
  url: string
}

export default function Index({ posts }: PostListProps): JSX.Element {
  return (
    <div className={cx('Tumurin')}>
      {posts?.map((x) => (
        <ListItem key={x.id} post={x} />
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/posts`)
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
