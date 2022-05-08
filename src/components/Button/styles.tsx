import { Theme } from '@/types/Theme'
import styled from 'styled-components'

/* max-width: ${({ maxWidth }) =>
    maxWidth ? `${maxWidth}px` : 'initial'}; */

export const MyButton = styled.a`
  display: inline;
  width: 100%;
  max-height: 60px;
  border-radius: 100px;
  padding: 18px 30px;
  text-align: center;
  background: ${(props: { theme: Theme }) =>
    props.theme.button.primary.idle.background};
  color: ${(props: { theme: Theme }) => props.theme.button.primary.idle.color};
  cursor: pointer;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.9rem;
  text-decoration: none;
  &:hover {
    background: ${(props: { theme: Theme }) =>
      props.theme.button.primary.hover.background};
  }
`
