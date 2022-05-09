import { Variant } from '@/types/ButtonVariant'
import { Theme } from '@/types/Theme'
import styled from 'styled-components'

/* max-width: ${({ maxWidth }) =>
    maxWidth ? `${maxWidth}px` : 'initial'}; */

export const MyButton = styled.a<{ variant?: Variant; maxWidth?: string }>`
  display: inline;
  width: 100%;
  max-width: ${(props: { maxWidth?: string }) =>
    props.maxWidth ? props.maxWidth : 'initial'};
  max-height: 60px;
  border-radius: 100px;
  padding: 18px 30px;
  text-align: center;
  background: ${(props: { variant?: Variant; theme: Theme }) => {
    return props.variant === 'primary'
      ? props.theme.button.primary.idle.background
      : props.theme.button.secondary.idle.background
  }};
  color: ${(props: { variant?: Variant; theme: Theme }) => {
    return props.variant === 'primary'
      ? props.theme.button.primary.idle.color
      : props.theme.button.secondary.idle.color
  }};
  border: ${(props: { variant?: Variant; theme: Theme }) => {
    return props.variant === 'primary'
      ? 'none'
      : `2px solid ${props.theme.button.secondary.hover.background}`
  }};
  cursor: pointer;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.9rem;
  text-decoration: none;
  &:hover {
    background: ${(props: { variant?: Variant; theme: Theme }) => {
      return props.variant === 'primary'
        ? props.theme.button.primary.hover.background
        : props.theme.button.secondary.hover.background
    }};
  }
  &:focus {
    background: ${(props: { variant?: Variant; theme: Theme }) => {
      return props.variant === 'primary'
        ? props.theme.button.primary.hover.background
        : props.theme.button.secondary.hover.background
    }};
  }
`
