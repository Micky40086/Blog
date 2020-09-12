import React from 'react'
import { RecoilRoot } from 'recoil'

import DefaultLayout from '../components/layouts/DefaultLayout'
import '../styles/main.scss'

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout

  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}
