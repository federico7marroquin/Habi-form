import { Theme } from '@/types/Theme'
import styled from 'styled-components'

export const Title = styled.h1`
  margin-block-start: 0;
  margin-inline: 0;
  margin-block-end: 2rem;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  & a {
    color: ${({ theme }: { theme: Theme }) =>
      theme.button.primary.idle.background};
    text-decoration: none;
  }
  & a:hover,
  & a:focus,
  & a:active {
    text-decoration: underline;
  }
`

export const Description = styled.p`
  text-align: center;
  margin: 1rem 0 1rem;
  line-height: 1.5;
  font-size: 1.5rem;
`

export const Grid = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

export const Card = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.input.idle.border};
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }: { theme: Theme }) =>
      theme.button.primary.idle.background};
    border-color: ${({ theme }: { theme: Theme }) =>
      theme.button.primary.idle.background};
  }

  & h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  & p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  min-width: 280px;
`
