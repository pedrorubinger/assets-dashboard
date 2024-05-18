import { InputHTMLAttributes } from 'react'

import { Box, StyledInput } from 'src/components/Input/styles'
import { InputSize, InputVariant } from 'src/interfaces/input'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  container?: InputHTMLAttributes<HTMLDivElement>
  /** @default 'md' */
  size?: InputSize
  /** @default 'borderless' */
  variant?: InputVariant
}

export const Input: React.FC<Props> = ({
  container,
  size = 'md',
  variant = 'borderless',
  ...rest
}) => {
  return (
    <Box {...container}>
      <StyledInput $size={size} $variant={variant} {...rest} />
    </Box>
  )
}
