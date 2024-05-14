import { useCallback, useEffect, useState } from 'react'

import { CompanyLocation } from 'src/interfaces/company'
import { getCompanyLocations } from 'src/services/locations'

interface Params {
  companyId?: string | null
}

export const useFetchAssetTreeData = ({ companyId }: Params) => {
  const [isMounted, setIsMounted] = useState(false)
  const [isFetching, setisFetching] = useState(false)
  const [companyLocations, setCompanyLocations] = useState<CompanyLocation[]>(
    [],
  )

  const isLoading = !isMounted || isFetching

  const fetchCompanyLocationsData = useCallback(async (companyId: string) => {
    setisFetching(true)

    const { data: companyLocationsData, error: errorOnFetchCompanyLocations } =
      await getCompanyLocations({ companyId })

    if (errorOnFetchCompanyLocations) {
      /* For future implementations, handle error properly. */
    }

    setCompanyLocations(companyLocationsData ?? [])
    setisFetching(false)
  }, [])

  useEffect(() => {
    setIsMounted(true)

    if (companyId) fetchCompanyLocationsData(companyId)

    return () => {
      setIsMounted(false)
    }
  }, [companyId])

  return { isLoading, companyLocations }
}
