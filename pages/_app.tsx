import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout'
import Material from 'common/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Material>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Material>
  )
}

export default MyApp
