import { Header } from 'src/components/Header'
import { ContentBox } from 'src/components/ContentBox'
import { SkeletonLoader } from 'src/components/Skeleton/styles'
import { ContentSection } from 'src/components/ContentSection'
import { useFetchAssetTreeData } from 'src/pages/dashboard/hooks/useFetchAssetTreeData'
import { Box, SectionBox } from 'src/pages/dashboard/styles'
import { DashboardContentHeader } from 'src/pages/dashboard/components/ContentHeader'
import { AssetTree } from 'src/pages/dashboard/components/AssetTree'
import { useCompanyStore } from 'src/store/company'

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const { company } = useCompanyStore()
  const { isLoading, companyLocations } = useFetchAssetTreeData({
    companyId: company?.id,
  })

  console.log('companyLocations', companyLocations)

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

              <ContentSection title="MOTOR RT COAL AF01">
                <span></span>
              </ContentSection>
            </SectionBox>
          </>
        )}
      </ContentBox>
    </Box>
  )
}
