import DefaultLayout from '../components/layouts/default'
import '../styles/main.scss'

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
