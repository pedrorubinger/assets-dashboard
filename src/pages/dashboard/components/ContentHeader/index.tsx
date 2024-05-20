import {
  Box,
  StatusBox,
  SubTitle,
  Title,
  TitleBox,
} from 'src/pages/dashboard/components/ContentHeader/styles'
import { Button } from 'src/components/Button'
import { useCompanyStore } from 'src/store/company'
import { BoltIcon } from 'src/components/Vector/BoltIcon'
import { InfoIcon } from 'src/components/Vector/InfoIcon'

interface Props {}

export const DashboardContentHeader: React.FC<Props> = () => {
  const { company } = useCompanyStore()

  const companyName = company?.name

  return (
    <Box>
      <TitleBox>
        <Title>Ativos</Title>
        {!!companyName && <SubTitle>/ {companyName} Unit</SubTitle>}
      </TitleBox>

      <StatusBox>
        <Button
          size="md"
          title="Clique para filtrar por componentes com sensor de energia"
          Icon={<BoltIcon color="white" />}
        >
          Sensor de energia
        </Button>

        <Button
          size="md"
          title="Clique para filtrar por componentes cujo sensor está em estado crítico"
          Icon={<InfoIcon />}
          variant="outlined"
        >
          Crítico
        </Button>
      </StatusBox>
    </Box>
  )
}
