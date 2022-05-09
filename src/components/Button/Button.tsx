import { Variant } from '@/types/ButtonVariant'
import React from 'react'
import { MyButton } from './styles'

interface Props extends React.HTMLAttributes<HTMLElement> {
  label: string
  variant?: Variant
  maxWidth?: string
  type?: 'submit' | 'button'
}

export const Button = ({
  variant = 'primary',
  maxWidth,
  label,
  type,
  ...props
}: Props) => {
  return (
    <MyButton
      tabIndex={0}
      maxWidth={maxWidth}
      variant={variant}
      type={type}
      as="button"
      {...props}
    >
      {label}
    </MyButton>
  )
}

export const InnerButton = (
  {
    variant = 'primary',
    label,
    onClick,
    href,
  }: { variant?: Variant; label: string; onClick?: () => void; href?: string },
  ref:
    | ((instance: HTMLAnchorElement | null) => void)
    | React.RefObject<HTMLAnchorElement>
    | null
    | undefined
) => {
  return (
    <MyButton variant={variant} href={href} onClick={onClick} ref={ref}>
      {label}
    </MyButton>
  )
}
export const LinkButton = React.forwardRef(InnerButton)
