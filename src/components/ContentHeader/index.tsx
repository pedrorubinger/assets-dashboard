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
import { useCompanyStore } from 'src/store/company'

interface Props {}

export const ContentHeader: React.FC<Props> = () => {
  const { company } = useCompanyStore()

  const companyName = company?.name

  return (
    <Box>
      <TitleBox>
        <Title>Ativos</Title>
        {!!companyName && <SubTitle>/ {companyName} Unit</SubTitle>}
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
