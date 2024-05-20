import {
  Box,
  ButtonText,
  StatusBox,
  SubTitle,
  Title,
  TitleBox,
} from 'src/pages/dashboard/components/ContentHeader/styles'
import { Button } from 'src/components/Button'
import { useCompanyStore } from 'src/store/company'
import { InfoIcon } from 'src/components/Vector/InfoIcon'
import { useContext } from 'react'
import { AssetTreeContext } from 'src/context/AssetTreeContext'
import { Colors } from 'src/styles/tokens/colors'
import { BoltIconOutlined } from 'src/components/Vector/BoltIconOutlined'

interface Props {}

export const DashboardContentHeader: React.FC<Props> = () => {
  const { company } = useCompanyStore()
  const { filters, onFilter } = useContext(AssetTreeContext)

  const companyName = company?.name
  const isEnergySensorTypeFilterActive = filters?.includes('type')
  const isEnergySensorStatusFilterActive = filters?.includes('status')

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
          variant={isEnergySensorTypeFilterActive ? 'primary' : 'outlined'}
          onClick={() => onFilter('type')}
        >
          <BoltIconOutlined
            color={
              isEnergySensorTypeFilterActive
                ? 'white'
                : (Colors.blue500 as keyof typeof Colors)
            }
          />
          <ButtonText>Sensor de energia</ButtonText>
        </Button>

        <Button
          size="md"
          title="Clique para filtrar por componentes cujo sensor está em estado crítico"
          variant={isEnergySensorStatusFilterActive ? 'primary' : 'outlined'}
          onClick={() => onFilter('status')}
        >
          <InfoIcon
            color={
              isEnergySensorStatusFilterActive
                ? 'white'
                : (Colors.blue500 as keyof typeof Colors)
            }
          />
          <ButtonText>Crítico</ButtonText>
        </Button>
      </StatusBox>
    </Box>
  )
}
