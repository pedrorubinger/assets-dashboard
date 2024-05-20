import MotorImg from 'src/assets/motor-image.png'

import {
  Box,
  InfoBox,
  InfoBoxText,
  InfoBoxTitle,
  PrimaryInfoBox,
  PrimaryInfoDetailsBox,
  SecondaryInfoDetailsBox,
} from 'src/pages/dashboard/components/AssetDetails/styles'

interface Props {}

export const AssetDetails: React.FC<Props> = () => {
  return (
    <Box>
      <PrimaryInfoBox>
        <img src={MotorImg} />

        <PrimaryInfoDetailsBox>
          <InfoBox $useBorder>
            <InfoBoxTitle>Nome</InfoBoxTitle>
            <InfoBoxText>Motor elétrico</InfoBoxText>
          </InfoBox>

          <InfoBox>
            <InfoBoxTitle>Responsáveis</InfoBoxTitle>
            <InfoBoxText>Elétrica</InfoBoxText>
          </InfoBox>
        </PrimaryInfoDetailsBox>
      </PrimaryInfoBox>

      <SecondaryInfoDetailsBox>
        <InfoBox>
          <InfoBoxTitle>Sensor</InfoBoxTitle>
          <InfoBoxText>HIO4510</InfoBoxText>
        </InfoBox>

        <InfoBox>
          <InfoBoxTitle>Receptor</InfoBoxTitle>
          <InfoBoxText>EUH4R27</InfoBoxText>
        </InfoBox>
      </SecondaryInfoDetailsBox>
    </Box>
  )
}
