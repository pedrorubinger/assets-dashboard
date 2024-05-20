import { useCallback, useEffect, useState } from 'react'

import Logo from 'src/assets/logo-tractian.svg'
import { Box, ButtonBox } from 'src/components/Header/styles'
import { Button } from 'src/components/Button'
import { SkeletonLoader } from 'src/components/Skeleton/styles'
import { Company } from 'src/interfaces/company'
import { useCompanyStore } from 'src/store/company'
import { ButtonVariant } from 'src/interfaces/button'
import { WindowEvent } from 'src/utils/constants/windowEvent'
import { getCompanies } from 'src/services/companies'
import { GoldIcon } from 'src/components/Vector/GoldIcon'

interface Props {}

export const Header: React.FC<Props> = ({}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [isFetching, setisFetching] = useState(false)
  const [companies, setCompanies] = useState<Company[]>([])

  const { company, setCompany } = useCompanyStore()

  const isLoading = !isMounted || isFetching

  const onSelectCompany = (company: Company) => {
    setCompany(company)
    window.dispatchEvent(
      new CustomEvent(WindowEvent.COMPANY_CHANGED, { detail: { company } }),
    )
  }

  const fetchData = useCallback(async () => {
    setisFetching(true)

    const { data: companiesData, error: errorOnFetchCompanies } =
      await getCompanies()

    if (companiesData) setCompanies(companiesData)

    if (errorOnFetchCompanies) {
      /* For future implementations, handle error properly. */
    }

    setisFetching(false)
  }, [])

  useEffect(() => {
    setIsMounted(true)

    return () => {
      setIsMounted(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    if (!company && companies.length) setCompany(companies[0])
  }, [company, companies])

  return (
    <Box>
      <div>
        <img src={Logo} />
      </div>

      <ButtonBox>
        {!!isLoading && <SkeletonLoader />}
        {!isLoading &&
          companies.map(({ id, name }) => {
            const isSelected = id === company?.id
            const variant: ButtonVariant = isSelected ? 'secondary' : 'primary'

            return (
              <Button
                key={id}
                variant={variant}
                Icon={<GoldIcon />}
                title="Clique para selecionar esta empresa"
                onClick={() => onSelectCompany({ id, name })}
              >
                {name} unit
              </Button>
            )
          })}
      </ButtonBox>
    </Box>
  )
}
