import { Theme } from '@/types/Theme'
import styled from 'styled-components'

export const MyButton = styled.button`
  width: 100%;
  max-height: 60px;
  border-radius: 100px;
  padding: 18px 30px;
  background: ${(props: { theme: Theme }) =>
    props.theme.button.primary.idle.background};
  color: ${(props: { theme: Theme }) => props.theme.button.primary.idle.color};
  cursor: pointer;
  font-weight: 600;
  font-size: 1.6rem;
  &:hover {
    background: ${(props: { theme: Theme }) =>
      props.theme.button.primary.hover.background};
  }
`
