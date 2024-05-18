import { useCompanyStore } from 'src/store/company'
import { buildTree } from 'src/utils/helpers/tree'
import { Header } from 'src/components/Header'
import { ContentBox } from 'src/components/ContentBox'
import { SkeletonLoader } from 'src/components/Skeleton/styles'
import { ContentSection } from 'src/components/ContentSection'
import { useFetchAssetTreeData } from 'src/pages/dashboard/hooks/useFetchAssetTreeData'
import { Box, HeaderTitle, SectionBox } from 'src/pages/dashboard/styles'
import { DashboardContentHeader } from 'src/pages/dashboard/components/ContentHeader'
import { AssetTree } from 'src/pages/dashboard/components/AssetTree'
import { useMemo } from 'react'
import { EmptyState } from 'src/components/EmptyState'

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const { company } = useCompanyStore()
  const { isFetching, data } = useFetchAssetTreeData({
    companyId: company?.id,
  })

  const base = useMemo(() => buildTree(data), [data])

  const isBuildingTree = !!data && !base.length
  const isLoading = isFetching || isBuildingTree

  return (
    <Box>
      <Header />
      <ContentBox>
        {!!isLoading && <SkeletonLoader color="gray500" />}
        {!isLoading && (
          <>
            <DashboardContentHeader />
            <SectionBox>
              <AssetTree base={base} />

              <ContentSection
                header={<HeaderTitle>MOTOR RT COAL AF01</HeaderTitle>}
              >
                <EmptyState />
              </ContentSection>
            </SectionBox>
          </>
        )}
      </ContentBox>
    </Box>
  )
}
