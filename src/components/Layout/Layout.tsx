import React from 'react'
import { Header } from '@/components/Header'
import { Main, AppContainer } from '@/styles/AppStyles'
export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <AppContainer>
      <Header />
      <Main>{children}</Main>
    </AppContainer>
  )
}
