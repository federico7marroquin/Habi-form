import { Button } from '@/components/Button'
import { Resume } from '@/components/Resume'
import { useAppDispatch } from '@/hooks/useReduxHooks'
import { ButtonGroup } from '@/styles/Form'
import { useRouter } from 'next/router'
import React from 'react'

export const ResumeContainer = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const goToHome = () => {
    router.push('/')
    dispatch({ type: 'RESET' })
  }
  return (
    <>
      <Resume />
      <ButtonGroup justifyContent="center">
        <Button maxWidth="300px" label="Volver al inicio" onClick={goToHome} />
      </ButtonGroup>
    </>
  )
}
