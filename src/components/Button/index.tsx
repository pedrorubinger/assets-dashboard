import { ButtonHTMLAttributes } from 'react'

import { ButtonSize, ButtonVariant } from 'src/interfaces/button'
import { IconImg, StyledButton } from 'src/components/Button/styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  /** @default 'sm' */
  size?: ButtonSize
  /** @default 'primary' */
  variant?: ButtonVariant
  iconSrc?: string
}

export const Button: React.FC<Props> = ({
  children,
  iconSrc,
  size = 'sm',
  variant = 'primary',
  ...rest
}) => {
  return (
    <StyledButton $variant={variant} $size={size} {...rest}>
      {!!iconSrc && <IconImg src={iconSrc} />}
      {children}
    </StyledButton>
  )
}
