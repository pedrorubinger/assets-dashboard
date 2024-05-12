import { useEffect, useState } from 'react'

import { Header } from 'src/components/Header'
import { getCompanies } from 'src/services/companies'
import { Company } from 'src/interfaces/company'

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isFetching, setisFetching] = useState(false)
  const [companies, setCompanies] = useState<Company[]>([])

  const isLoading = !isMounted || isFetching

  const fetchData = async () => {
    setisFetching(true)

    const { data } = await getCompanies()

    if (data) setCompanies(data)

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
    <>
      <Header isLoading={isLoading} companies={companies} />
    </>
  )
}
