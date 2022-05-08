import React from 'react'
import { MyButton } from './styles'

interface Props extends React.HTMLAttributes<HTMLElement> {
  label: string
  type?: 'submit' | 'button'
}

export const Button = ({ label, type, ...props }: Props) => {
  return (
    <MyButton type={type} as="button" {...props}>
      {label}
    </MyButton>
  )
}

export const InnerButton = (
  {
    label,
    onClick,
    href,
  }: { label: string; onClick?: () => void; href?: string },
  ref:
    | ((instance: HTMLAnchorElement | null) => void)
    | React.RefObject<HTMLAnchorElement>
    | null
    | undefined
) => {
  return (
    <MyButton href={href} onClick={onClick} ref={ref}>
      {label}
    </MyButton>
  )
}
export const LinkButton = React.forwardRef(InnerButton)
