import { Colors } from 'src/styles/tokens/colors'
import { Sizes } from 'src/styles/tokens/sizes'
import styled from 'styled-components'

export const Box = styled.div``

export const PrimaryInfoBox = styled.div`
  display: flex;
  gap: ${Sizes.lg}px;

  padding-bottom: ${Sizes.lg}px;

  border-bottom: 1px solid ${Colors.gray150};
`

export const PrimaryInfoDetailsBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: ${Sizes.md}px;
  width: 100%;
`

export const SecondaryInfoDetailsBox = styled.div`
  display: flex;

  margin-top: ${Sizes.md}px;
  width: 100%;
`

interface InfoBoxProps {
  $useBorder?: boolean
}

export const InfoBox = styled.div<InfoBoxProps>`
  display: flex;
  flex-direction: column;
  gap: ${Sizes.sm}px;

  height: fit-content;
  width: 100%;

  border-bottom: ${({ $useBorder }) =>
    $useBorder ? `1px solid ${Colors.gray150}` : 'none'};

  padding: ${Sizes.md3}px 0;
`

export const InfoBoxTitle = styled.span`
  font-size: ${Sizes.md}px;
  font-weight: 600;
  text-align: left;

  color: ${Colors.gray950};
`

interface InfoBoxTextProps {
  $alignment?: 'baseline' | 'center'
}

export const InfoBoxText = styled.span<InfoBoxTextProps>`
  font-size: ${Sizes.md}px;
  font-weight: 300;
  text-align: left;

  display: flex;
  align-items: ${({ $alignment = 'center' }) => $alignment};
  gap: ${Sizes.sm}px;

  color: ${Colors.gray500};
`

export const AccountableInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`

export const AccountableInfoBadge = styled.span`
  border-radius: 50%;

  padding: ${Sizes.xsm}px ${Sizes.xsm2}px;

  background-color: ${Colors.blue500};

  color: ${Colors.white};
  font-size: ${Sizes.sm3}px;
`
