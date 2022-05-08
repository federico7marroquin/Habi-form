import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Main, AppContainer } from '@/styles/AppStyles'
export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <AppContainer>
      <Header progress={0} />
      <Main>{children}</Main>
      <Footer />
    </AppContainer>
  )
}
