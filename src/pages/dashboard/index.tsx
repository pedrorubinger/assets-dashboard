import { useEffect, useState } from 'react'

import { Header } from 'src/components/Header'
import { getCompanies } from 'src/services/companies'
import { Company } from 'src/interfaces/company'
import { ContentBox } from 'src/components/ContentBox'
import { Box, SectionBox } from 'src/pages/dashboard/styles'
import { ContentHeader } from 'src/components/ContentHeader'
import { useCompanyStore } from 'src/store/company'
import { SkeletonLoader } from 'src/components/Skeleton/styles'
import { ContentSection } from 'src/components/ContentSection'

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isFetching, setisFetching] = useState(false)
  const [companies, setCompanies] = useState<Company[]>([])

  const { company, setCompany } = useCompanyStore()

  const isLoading = !isMounted || isFetching

  const fetchData = async () => {
    setisFetching(true)

    const { data, error } = await getCompanies()

    if (data) {
      setCompanies(data)

      if (!company) setCompany(data[0])
    }

    if (error) {
      /* For future implementations, handle error properly. */
    }

    setisFetching(false)
  }

  useEffect(() => {
    setIsMounted(true)
    fetchData()

    return () => {
      setIsMounted(false)
    }
  }, [])

  return (
    <Box>
      <Header isLoading={isLoading} companies={companies} />
      <ContentBox>
        {!!isLoading && <SkeletonLoader color="blue900" />}
        {!isLoading && (
          <>
            <ContentHeader />
            <SectionBox>
              <ContentSection>
                {/*  */}
                Hello
              </ContentSection>

              <ContentSection title="MOTOR RT COAL AF01">
                {/*  */}
                Hello
              </ContentSection>
            </SectionBox>
          </>
        )}
      </ContentBox>
    </Box>
  )
}
