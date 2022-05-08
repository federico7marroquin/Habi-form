import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Main, AppContainer } from './styles'
export const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <AppContainer>
      <Header progress={0} />
      <Main>{children}</Main>
      <Footer />
    </AppContainer>
  )
}
