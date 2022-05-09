import React from 'react'
import { Container, Progression } from './styles'
export const ProgressBar = ({ progress }: { progress: string }) => {
  return (
    <Container>
      <Progression progress={progress}></Progression>
    </Container>
  )
}
