import React from 'react'
import { ProgressBar } from '../ProgressBar'
import Image from 'next/image'
import Logo from '../../../public/images/habi_logo.svg'
import { LogoContainer, Label } from './styles'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { progressSelector } from '@/store/stepper'
import { AppState } from '@/store/index'
import { useAppNavigation } from '@/hooks/useAppNavigation'

export const Header = () => {
  const { step } = useAppNavigation()

  const { stepTitle, length, progress } = useAppSelector((state: AppState) =>
    progressSelector(state, step)
  )

  return (
    <header>
      <LogoContainer>
        <Image src={Logo} alt="Logo de Habi" />
      </LogoContainer>
      <Label>
        {step === -1 ? `${stepTitle}` : `${step} de ${length}: ${stepTitle}`}
      </Label>
      <ProgressBar progress={progress} />
    </header>
  )
}
