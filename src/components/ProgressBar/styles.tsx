import { Theme } from '@/types/Theme'
import styled from 'styled-components'

export const Container = styled.div`
  height: 10px;
  line-height: 1;
  width: 100%;
  background: #e6e5e7;
  border-radius: 10px;
`

export const Progression = styled.div<{ progress: string; theme: Theme }>`
  border-radius: 10px;
  height: 10px;
  width: ${({ progress }) => progress};
  overflow: hidden;
  background: ${({ theme }: { theme: Theme }) => theme.success};
`
