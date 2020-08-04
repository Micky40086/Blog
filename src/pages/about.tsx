import React from 'react'
import Container from '@material-ui/core/Container'

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

export default function About({ posts }: PostListProps): JSX.Element {
  return (
    <Container maxWidth="md">
      <div></div>
    </Container>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
