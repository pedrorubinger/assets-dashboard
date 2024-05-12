import styled from 'styled-components'

import { Sizes } from 'src/styles/tokens/sizes'

export const Box = styled.div`
  background-color: ${({ theme }) => theme.headerBackgroundColor};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${Sizes.sm1}px ${Sizes.md}px;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  gap: ${Sizes.sm}px;
  margin-left: ${Sizes.sm}px;

  @media (max-width: 540px) {
    margin-top: ${Sizes.sm}px;
    margin-left: 0;
  }
`
