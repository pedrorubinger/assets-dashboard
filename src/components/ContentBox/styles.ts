import styled from 'styled-components'

import { Colors } from 'src/styles/tokens/colors'
import { Sizes } from 'src/styles/tokens/sizes'
import { Radius } from 'src/styles/tokens/radius'

export const Box = styled.div`
  background-color: ${({ theme }) => theme.contentBackgroundColor};

  margin: ${Sizes.sm1}px;
  padding: ${Sizes.md}px;

  border: 1px solid ${Colors.gray200};
  border-radius: ${Radius.xsm1}px;
`
