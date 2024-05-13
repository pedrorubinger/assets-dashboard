import RayIcon from 'src/assets/ray-icon.svg'
import InfoIcon from 'src/assets/info-icon.svg'
import {
  Box,
  StatusBox,
  SubTitle,
  Title,
  TitleBox,
} from 'src/components/ContentHeader/styles'
import { Button } from 'src/components/Button'

interface Props {}

export const ContentHeader: React.FC<Props> = () => {
  return (
    <Box>
      <TitleBox>
        <Title>Ativos</Title>
        <SubTitle>/ Apex Unit</SubTitle>
      </TitleBox>

      <StatusBox>
        <Button size="md" iconSrc={RayIcon}>
          Sensor de energia
        </Button>

        <Button size="md" iconSrc={InfoIcon} variant="outlined">
          Crítico
        </Button>
      </StatusBox>
    </Box>
  )
}
