import React from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import ClassNames from 'classnames/bind'
import ReactMarkdown from 'react-markdown'

import { Post as PostType } from '../index'
import styles from './[id].module.scss'

const cx = ClassNames.bind(styles)

export interface PostProps {
  post: PostType
}

export default function Post({ post }: PostProps): JSX.Element {
  return (
    <div className={cx('container')}>
      <h2>{post.title}</h2>

      <div className={cx('content')}>
        <ReactMarkdown source={post.description} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  if (ctx.params) {
    const res = await fetch(`${process.env.API_HOST}/posts/${ctx.params?.id}`)
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
  const res = await fetch(`${process.env.API_HOST}/posts`)
  const posts = await res.json()
  const paths = posts.map((x: PostType) => {
    return { params: { id: x.id.toString() } }
  })

  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  }
}
