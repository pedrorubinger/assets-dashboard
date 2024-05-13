import styled from 'styled-components'

import { Sizes } from 'src/styles/tokens/sizes'
import { ButtonSizes } from 'src/components/Button/variants'
import { ButtonSize, ButtonVariant } from 'src/interfaces/button'
import { Theme } from 'src/interfaces/theme'

export const Box = styled.div`
  background-color: ${({ theme }) => theme.headerBackgroundColor};

  display: flex;
  justify-content: space-between;

  padding: ${Sizes.md}px;
`

interface ButtonProps {
  size: ButtonSize
  variant: ButtonVariant
}

const getBackgroundColor = (theme: Theme, variant: ButtonVariant) => {
  if (variant === 'outlined') return theme.buttonOutlinedBackgroundColor
  if (variant === 'secondary') return theme.buttonSecondaryBackgroundColor

  return theme.buttonPrimaryBackgroundColor
}

const getBorderColor = (theme: Theme, variant: ButtonVariant) => {
  if (variant === 'outlined') return theme.buttonOutlinedBorderColor
}

const getBorderWidth = (variant: ButtonVariant) => {
  if (variant === 'outlined') return '1px'

  return '0px'
}

const getColor = (theme: Theme, variant: ButtonVariant) => {
  if (variant === 'outlined') return theme.buttonOutlinedColor
  if (variant === 'secondary') return theme.buttonSecondaryColor

  return theme.buttonPrimaryColor
}

const getBackgroundColorHover = (theme: Theme, variant: ButtonVariant) => {
  if (variant === 'outlined') return theme.buttonBackgroundColorOutlinedHover

  return theme.buttonBackgroundColorHover
}

export const StyledButton = styled.button<ButtonProps>`
  font-size: ${({ size = 'sm' }) => ButtonSizes[size].fontSize}px;

  display: flex;
  align-items: center;

  padding: ${({ size = 'sm' }) =>
    `${ButtonSizes[size].paddingVertical}px ${ButtonSizes[size].paddingHorizontal}px`};

  border: none;
  border-style: solid;
  border-color: ${({ theme, variant }) => getBorderColor(theme, variant)};
  border-radius: ${({ size = 'sm' }) => ButtonSizes[size].borderRadius}px;
  border-width: ${({ variant }) => getBorderWidth(variant)};

  color: ${({ theme, variant }) => getColor(theme, variant)};
  background-color: ${({ theme, variant }) =>
    getBackgroundColor(theme, variant)};

  transition: 0.6s;

  &:hover {
    cursor: pointer;

    background-color: ${({ theme, variant }) =>
      getBackgroundColorHover(theme, variant)};
  }
`

export const IconImg = styled.img`
  margin-right: ${Sizes.sm}px;
`
