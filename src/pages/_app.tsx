import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { Provider } from 'react-redux'
import { store } from '@/store/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
