import { useContext } from 'react'

import { Header } from 'src/components/Header'
import { ContentBox } from 'src/components/ContentBox'
import { SkeletonLoader } from 'src/components/Skeleton/styles'
import { ContentSection } from 'src/components/ContentSection'
import { Box, HeaderTitle, SectionBox } from 'src/pages/dashboard/styles'
import { DashboardContentHeader } from 'src/pages/dashboard/components/ContentHeader'
import { AssetTree } from 'src/pages/dashboard/components/AssetTree'
import { EmptyState } from 'src/components/EmptyState'
import { AssetTreeContext } from 'src/context/AssetTreeContext'

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const { isLoading, selected } = useContext(AssetTreeContext)

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

              <ContentSection
                header={
                  selected?.name ? (
                    <HeaderTitle>{selected.name}</HeaderTitle>
                  ) : null
                }
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
