import { Theme } from '@/types/Theme'
import styled from 'styled-components'

export const LogoContainer = styled.div`
  padding: 26px 0 24px;
`

export const Label = styled.p`
  color: ${({ theme }: { theme: Theme }) => theme.text.primary};
  font-weight: 600;
  margin-bottom: 0.2rem;
  font-size: 1.2rem;
  line-height: 16px;
`
