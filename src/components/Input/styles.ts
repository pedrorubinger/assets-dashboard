import styled from 'styled-components'

import { InputSize, InputVariant } from 'src/interfaces/input'
import { InputSizes } from 'src/components/Input/variants'
import { Colors } from 'src/styles/tokens/colors'

export const Box = styled.div`
  width: 100%;
`

const getBorder = (_: InputVariant) => {
  return 'none'
}

const getBorderRadius = (size: InputSize, variant: InputVariant) => {
  if (variant === 'borderless') return 0

  return `${InputSizes[size].borderRadius}px`
}

interface InputProps {
  $variant: InputVariant
  $size: InputSize
}

export const StyledInput = styled.input<InputProps>`
  border: ${({ $variant }) => getBorder($variant)};
  border-radius: ${({ $size, $variant }) => getBorderRadius($size, $variant)};

  caret-color: ${Colors.gray600};
  color: ${Colors.gray600};

  width: 100%;
  padding: ${({ $size }) =>
    `${InputSizes[$size].paddingVertical}px ${InputSizes[$size].paddingHorizontal}px`};

  font-size: ${({ $size }) => InputSizes[$size].fontSize}px;

  &::placeholder {
    opacity: 1;
    color: ${Colors.lavenderGray};
  }
`
