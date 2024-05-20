import { useContext } from 'react'

import { Header } from 'src/components/Header'
import { ContentBox } from 'src/components/ContentBox'
import { SkeletonLoader } from 'src/components/Skeleton/styles'
import {
  Box,
  Content,
  HeaderTitle,
  IconBox,
  SectionBox,
} from 'src/pages/dashboard/styles'
import { DashboardContentHeader } from 'src/pages/dashboard/components/ContentHeader'
import { AssetTree } from 'src/pages/dashboard/components/AssetTree'
import { EmptyState } from 'src/components/EmptyState'
import { AssetTreeContext } from 'src/context/AssetTreeContext'
import { AssetDetails } from 'src/pages/dashboard/components/AssetDetails'
import { getSensorStatus } from './utils/helpers/assetTree'

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const { isLoading, selected } = useContext(AssetTreeContext)

  const hasDetails = !!selected && ['component'].includes(selected.type)
  const sensorData = selected ? getSensorStatus(selected) : null
  const SensorIcon = sensorData?.Status ?? sensorData?.Type

  return (
    <Box>
      <Header />
      <ContentBox>
        {!!isLoading && <SkeletonLoader color="gray500" />}
        {!isLoading && (
          <>
            <DashboardContentHeader />
            <SectionBox>
              <AssetTree />

              <Content
                header={
                  selected?.name ? (
                    <>
                      <HeaderTitle>{selected.name}</HeaderTitle>
                      {!!SensorIcon && <IconBox>{SensorIcon}</IconBox>}
                    </>
                  ) : null
                }
              >
                {hasDetails ? <AssetDetails /> : <EmptyState />}
              </Content>
            </SectionBox>
          </>
        )}
      </ContentBox>
    </Box>
  )
}
