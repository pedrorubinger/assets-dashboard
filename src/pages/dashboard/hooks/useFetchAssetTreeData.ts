import { useCallback, useEffect, useState } from 'react'
import { Asset } from 'src/interfaces/asset'

import { CompanyLocation } from 'src/interfaces/company'
import { getAssets } from 'src/services/assets'
import { getCompanyLocations } from 'src/services/locations'

interface Params {
  companyId?: string | null
}

export const useFetchAssetTreeData = ({ companyId }: Params) => {
  const [isMounted, setIsMounted] = useState(false)
  const [isFetching, setisFetching] = useState(false)
  const [locations, setCompanyLocations] = useState<CompanyLocation[]>([])
  const [assets, setAssets] = useState<Asset[]>([])

  const isLoading = !isMounted || isFetching

  const fetchData = useCallback(async (companyId: string) => {
    setisFetching(true)

    const { data: locationsData, error: errorOnFetchCompanyLocations } =
      await getCompanyLocations({ companyId })

    const { data: assetsData, error: errorOnFetchAssets } = await getAssets({
      companyId,
    })

    if (errorOnFetchCompanyLocations || errorOnFetchAssets) {
      /* For future implementations, handle error properly. */
    }

    setAssets(assetsData ?? [])
    setCompanyLocations(locationsData ?? [])
    setisFetching(false)
  }, [])

  useEffect(() => {
    setIsMounted(true)

    if (companyId) fetchData(companyId)

    return () => {
      setIsMounted(false)
    }
  }, [companyId])

  const data = { locations, assets }

  console.log('data', data)

  return { isLoading, data }
}
