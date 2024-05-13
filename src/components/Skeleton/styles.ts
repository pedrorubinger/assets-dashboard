import { Colors } from 'src/styles/tokens/colors'
import styled, { keyframes } from 'styled-components'

const loaderAnimation = keyframes`
  0% {
    background-position: 0 50%, 50% 50%, 100% 50%;
  }
  20% {
    background-position: 0 0, 50% 50%, 100% 50%;
  }
  40% {
    background-position: 0 100%, 50% 0, 100% 50%;
  }
  60% {
    background-position: 0 50%, 50% 100%, 100% 0;
  }
  80% {
    background-position: 0 50%, 50% 50%, 100% 100%;
  }
  100% {
    background-position: 0 50%, 50% 50%, 100% 50%;
  }
`

interface Props {
  color?: keyof typeof Colors
}

export const SkeletonLoader = styled.div<Props>`
  width: 60px;
  height: 40px;
  --g: radial-gradient(
      farthest-side,
      #0000 calc(95% - 3px),
      ${({ color = 'white' }) => Colors[color]} calc(100% - 3px) 98%,
      #0000 101%
    )
    no-repeat;
  background: var(--g), var(--g), var(--g);
  background-size: 15px 15px;
  animation: ${loaderAnimation} 1s infinite alternate;
`
