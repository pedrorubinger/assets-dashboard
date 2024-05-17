import { Colors } from 'src/styles/tokens/colors'
import { Sizes } from 'src/styles/tokens/sizes'
import styled from 'styled-components'

export const Box = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  min-height: 100vh;
`

export const SectionBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  gap: ${Sizes.sm}px;

  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 0;
  }
`

export const HeaderTitle = styled.span`
  font-size: ${Sizes.md1}px;
  font-weight: 600;

  color: ${Colors.gray950};
`
