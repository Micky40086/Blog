import React from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Container from '@material-ui/core/Container'

import { Post as PostType } from '../index'

export interface PostProps {
  post: PostType
}

export default function Post({ post }: PostProps): JSX.Element {
  return (
    <Container maxWidth="md">
      <div>{post.title}</div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  if (ctx.params) {
    const res = await fetch(`http://localhost:1337/posts/${ctx.params?.id}`)
    const post = await res.json()

    return {
      props: {
        post,
      },
    }
  }

  return { props: {} }
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/posts`)
  const posts = await res.json()
  const paths = posts.map((x: PostType) => {
    return { params: { id: x.id.toString() } }
  })

  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // See the "fallback" section below
  }
}
