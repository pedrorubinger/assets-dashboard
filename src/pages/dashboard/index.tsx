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

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const { company } = useCompanyStore()
  const { isLoading, data } = useFetchAssetTreeData({
    companyId: company?.id,
  })

  const tree = useMemo(() => buildTree(data), [data])

  return (
    <Box>
      <Header />
      <ContentBox>
        {!!isLoading && <SkeletonLoader color="gray500" />}
        {!isLoading && (
          <>
            <DashboardContentHeader />
            <SectionBox>
              <AssetTree tree={tree} />

              <ContentSection
                header={<HeaderTitle>MOTOR RT COAL AF01</HeaderTitle>}
              >
                <span></span>
              </ContentSection>
            </SectionBox>
          </>
        )}
      </ContentBox>
    </Box>
  )
}
