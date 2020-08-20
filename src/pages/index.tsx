import React from 'react'
import Container from '@material-ui/core/Container'
import { GetStaticProps } from 'next'
import classNames from 'classnames/bind'

import ListItem from 'components/ListItem'
import { Divider } from '@material-ui/core'
import styles from './index.module.scss'

const cx = classNames.bind(styles)

export interface PostListProps {
  posts?: Post[]
}

export interface Post {
  id: number
  title: string
  desc: string
  image: {
    url: string
  }
  created_at: string
  updated_at: string
  url: string
}

export default function Index({ posts }: PostListProps): JSX.Element {
  return (
    <Container maxWidth="md">
      <div className={cx('Tumurin')}>
        {posts?.map((x) => (
          <ListItem key={x.id} post={x} />
        ))}
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:1337/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
