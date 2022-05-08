import React from 'react'
import { ProgressBar } from '../ProgressBar'
import Image from 'next/image'
import Logo from '../../../public/images/habi_logo.svg'
import { Progress } from '@/types/Progress'
import { LogoContainer, Label } from './styles'

export const Header = ({ progress }: { progress: Progress }) => {
  return (
    <header>
      <LogoContainer>
        <Image src={Logo} alt="Logo de Habi" />
      </LogoContainer>
      <Label>Analicemos este inmueble</Label>
      <ProgressBar progress={progress} />
    </header>
  )
}
