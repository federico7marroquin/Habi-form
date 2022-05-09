import { Theme } from '@/types/Theme'
import styled from 'styled-components'

export const Subtitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;

  & p {
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 600;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
  gap: 1.2rem;
  & p {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2rem;
    color: ${({ theme }: { theme: Theme }) => theme.text.primary};
  }
`
export const Main = styled.main`
  & ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & li {
      color: ${({ theme }: { theme: Theme }) => theme.text.primary};
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.6rem;
    }

    & span {
      font-weight: 600;
    }
  }
`
