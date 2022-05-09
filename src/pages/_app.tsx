import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { Provider } from 'react-redux'
import { store } from '@/store/index'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
