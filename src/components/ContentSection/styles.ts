import styled from 'styled-components'

import { Colors } from 'src/styles/tokens/colors'
import { Sizes } from 'src/styles/tokens/sizes'
import { Radius } from 'src/styles/tokens/radius'

interface Props {
  width?: string
}

export const Box = styled.div<Props>`
  background-color: ${({ theme }) => theme.contentSectionBackgroundColor};

  margin-top: ${Sizes.sm3}px;

  border: 1px solid ${Colors.gray150};
  border-radius: ${Radius.xsm}px;

  width: ${({ width = 'auto' }) => width};
`

export const TitleBox = styled.div`
  padding: ${Sizes.sm2}px ${Sizes.md}px;
  border-bottom: 1px solid ${Colors.gray150};
`

export const ContentBox = styled.div`
  width: 100%;
  padding: ${Sizes.md}px;
`

export const Title = styled.span`
  font-size: ${Sizes.md1}px;
  font-weight: 600;

  color: ${Colors.gray950};
`
