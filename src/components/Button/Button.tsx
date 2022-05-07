import React from 'react'
import { MyButton } from './styles'
export const Button = ({ label }: { label: string }) => {
  return <MyButton>{label}</MyButton>
}
