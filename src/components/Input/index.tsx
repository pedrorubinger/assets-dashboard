import { InputHTMLAttributes } from 'react'

import { Box, IconBox, StyledInput } from 'src/components/Input/styles'
import { InputSize, InputVariant } from 'src/interfaces/input'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  container?: InputHTMLAttributes<HTMLDivElement>
  /** @default 'md' */
  size?: InputSize
  /** @default 'borderless' */
  variant?: InputVariant
  icon?: React.ReactNode
}

export const Input: React.FC<Props> = ({
  container,
  size = 'md',
  variant = 'borderless',
  icon,
  ...rest
}) => {
  const width = icon ? '97%' : '100%'

  return (
    <Box {...container}>
      <StyledInput $size={size} $width={width} $variant={variant} {...rest} />

      {!!icon && <IconBox>{icon}</IconBox>}
    </Box>
  )
}
