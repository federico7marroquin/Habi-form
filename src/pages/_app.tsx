import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { Layout } from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
