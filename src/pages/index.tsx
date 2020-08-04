import React from 'react'
import Container from '@material-ui/core/Container'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import ListItem from 'components/ListItem'

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
      <div>
        {posts?.map((x) => (
          <Link key={x.id} href={`/posts/${x.id}`}>
            <a>
              <ListItem />
            </a>
          </Link>
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
