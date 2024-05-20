import { ButtonHTMLAttributes } from 'react'

import { ButtonSize, ButtonVariant } from 'src/interfaces/button'
import { IconBox, StyledButton } from 'src/components/Button/styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  /** @default 'sm' */
  size?: ButtonSize
  /** @default 'primary' */
  variant?: ButtonVariant
  Icon?: React.ElementType
}

export const Button: React.FC<Props> = ({
  children,
  Icon,
  size = 'sm',
  variant = 'primary',
  ...rest
}) => {
  return (
    <StyledButton $variant={variant} $size={size} {...rest}>
      {!!Icon && (
        <IconBox>
          <Icon />
        </IconBox>
      )}
      {children}
    </StyledButton>
  )
}
