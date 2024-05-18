import styled from 'styled-components'

import { InputSize, InputVariant } from 'src/interfaces/input'
import { Colors } from 'src/styles/tokens/colors'
import { Sizes } from 'src/styles/tokens/sizes'
import { InputSizes } from 'src/components/Input/variants'

export const Box = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
  $width?: string
}

export const StyledInput = styled.input<InputProps>`
  border: ${({ $variant }) => getBorder($variant)};
  border-radius: ${({ $size, $variant }) => getBorderRadius($size, $variant)};

  caret-color: ${Colors.gray600};
  color: ${Colors.gray600};

  width: ${({ $width = '100%' }) => $width};
  padding: ${({ $size }) =>
    `${InputSizes[$size].paddingVertical}px ${InputSizes[$size].paddingHorizontal}px`};

  font-size: ${({ $size }) => InputSizes[$size].fontSize}px;

  &::placeholder {
    opacity: 1;
    color: ${Colors.lavenderGray};
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`

export const IconBox = styled.div`
  margin-right: ${Sizes.sm3}px;
`
