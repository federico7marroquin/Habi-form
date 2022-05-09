import { Theme } from '@/types/Theme'
import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  padding: 0 10px;
  align-items: center;
`
export const FormControl = styled.div`
  width: 100%;
`

export const Label = styled.label<{ textAlign?: string }>`
  display: block;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin-bottom: 0.8rem;
  text-align: ${(props) => props.textAlign};
`

export const Input = styled.input`
  width: 100%;
  line-height: 1.6rem;
  font-size: 1.6rem;
  font-weight: bold;
  height: 5.6rem;
  padding: 6px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.input.idle.border};
  outline: none;

  &:focus,
  &:focus-within {
    border: 1px solid
      ${({ theme }: { theme: Theme }) => theme.input.focus.border};
    background: ${({ theme }: { theme: Theme }) =>
      theme.input.focus.background};
  }
  &::placeholder {
  }
`
export const CheckboxGroup = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.3rem;
`
export const Checkbox = styled.input`
  -webkit-appearance: none;
  height: 2.4rem;
  cursor: pointer;
  border-radius: 3px;
  width: 2.4rem;
  border: 1px solid
    ${({ theme }: { theme: Theme }) => theme.button.primary.idle.background};
  background-color: #fafafa;
  position: relative;

  &:checked {
    background: ${({ theme }: { theme: Theme }) =>
      theme.button.primary.idle.background};
  }
`

export const ErrorLabel = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.error};
`

export const ButtonGroup = styled.div<{ justifyContent?: string }>`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: ${({ justifyContent }: { justifyContent?: string }) =>
    justifyContent ? justifyContent : ' space-between'};
  gap: 20px;
`
