import { Colors } from 'src/styles/tokens/colors'
import { Sizes } from 'src/styles/tokens/sizes'
import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 510px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${Sizes.sm}px;
  }
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${Sizes.sm}px;
`

export const Title = styled.span`
  font-size: ${Sizes.md2}px;
  font-weight: 500;

  color: ${Colors.gray950};
`

export const SubTitle = styled.span`
  font-size: ${Sizes.sm3}px;
  font-weight: 400;

  color: ${Colors.gray600};
`

export const StatusBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${Sizes.sm}px;
`

export const ButtonText = styled.span`
  margin-left: ${Sizes.sm}px;
`
