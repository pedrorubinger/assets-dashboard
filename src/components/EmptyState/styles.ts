import { Colors } from 'src/styles/tokens/colors'
import { Sizes } from 'src/styles/tokens/sizes'
import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.span`
  margin-top: ${Sizes.sm1}px;

  font-size: ${Sizes.md2}px;
  font-weight: 600;

  color: ${Colors.gray600};
`

export const Message = styled.span`
  margin-top: ${Sizes.sm}px;

  font-size: ${Sizes.sm2}px;
  font-weight: 300;

  color: ${Colors.gray600};
`
