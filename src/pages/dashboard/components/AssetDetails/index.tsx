import { useContext } from 'react'

import MotorImg from 'src/assets/motor-image.png'
import { ReceiverIcon } from 'src/components/Vector/ReceiverIcon'
import { SensorIcon } from 'src/components/Vector/SensorIcon'
import { AssetTreeContext } from 'src/context/AssetTreeContext'
import {
  AccountableInfoBadge,
  AccountableInfoBox,
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
  const { selected } = useContext(AssetTreeContext)

  return (
    <Box>
      <PrimaryInfoBox>
        {/* Mocked image */}
        <img src={MotorImg} />

        <PrimaryInfoDetailsBox>
          <InfoBox $useBorder>
            <InfoBoxTitle>Tipo de equipamento</InfoBoxTitle>
            {/* Mocked information */}
            <InfoBoxText>Motor Elétrico (Trifásico)</InfoBoxText>
          </InfoBox>

          <InfoBox>
            <InfoBoxTitle>Responsáveis</InfoBoxTitle>
            {/* Mocked information */}
            <InfoBoxText>
              <AccountableInfoBox>
                <AccountableInfoBadge>E</AccountableInfoBadge>
                &nbsp;
                <span>Elétrica</span>
              </AccountableInfoBox>
            </InfoBoxText>
          </InfoBox>
        </PrimaryInfoDetailsBox>
      </PrimaryInfoBox>

      <SecondaryInfoDetailsBox>
        <InfoBox>
          <InfoBoxTitle>Sensor</InfoBoxTitle>
          <InfoBoxText>
            <SensorIcon />
            <span>{selected?.sensorId ?? '-'}</span>
          </InfoBoxText>
        </InfoBox>

        <InfoBox>
          <InfoBoxTitle>Receptor</InfoBoxTitle>
          <InfoBoxText $alignment="baseline">
            <ReceiverIcon />
            <span>{selected?.gatewayId ?? '-'}</span>
          </InfoBoxText>
        </InfoBox>
      </SecondaryInfoDetailsBox>
    </Box>
  )
}
