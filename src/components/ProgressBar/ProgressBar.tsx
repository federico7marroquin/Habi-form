import { Progress } from '@/types/Progress'
import React from 'react'
import { Container, Progression } from './styles'
export const ProgressBar = ({ progress }: { progress: Progress }) => {
  return (
    <Container>
      <Progression progress={`${progress * 20}%`}></Progression>
    </Container>
  )
}
