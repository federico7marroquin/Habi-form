import styled from 'styled-components'

export const AppContainer = styled.div`
  padding: 0 2rem;
`

export const Main = styled.main`
  padding: 4rem 0 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FlexContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

export const ResumeWrapper = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`
