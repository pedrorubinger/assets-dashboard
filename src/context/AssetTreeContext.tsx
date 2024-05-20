import { createContext, useEffect, useMemo, useRef, useState } from 'react'

import { useCompanyStore } from 'src/store/company'
import { buildTree, processTreeSearch } from 'src/utils/helpers/tree'
import { useFetchAssetTreeData } from 'src/pages/dashboard/hooks/useFetchAssetTreeData'
import { AssetTreeFilterType, TreeNode } from 'src/interfaces/tree'

interface AssetTreeContextProviderProps {
  children: React.ReactNode
}

type SelectedTreeNode = TreeNode

interface AssetTreeContextType {
  tree: TreeNode[]
  search?: string
  expanded: string[]
  isLoading: boolean
  selected?: SelectedTreeNode
  filters?: AssetTreeFilterType[]
  onFilter: (filter: AssetTreeFilterType) => void
  onToggleNodeState: (params: SelectedTreeNode) => void
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const AssetTreeContext = createContext({} as AssetTreeContextType)

/* For future implementations: some of this logic can be moved to separate hooks */
export const AssetTreeProvider = ({
  children,
}: AssetTreeContextProviderProps) => {
  const [expanded, setExpanded] = useState<string[]>([])
  const [selected, setSelected] = useState<SelectedTreeNode | undefined>()
  const [search, setSearch] = useState<string | undefined>()
  const [filters, setFilters] = useState<AssetTreeFilterType[] | undefined>()

  const { company } = useCompanyStore()
  const { isFetching, data } = useFetchAssetTreeData({
    companyId: company?.id,
  })

  const base = useMemo(() => buildTree(data), [data])
  const tree = useMemo(
    () => processTreeSearch({ tree: base, search, filters }),
    [base, search, filters],
  )

  const searchTimeout = useRef<number | null>(null)

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (selected) setSelected(undefined)

    searchTimeout.current = setTimeout(() => {
      setSearch(value)
    }, 500)
  }

  const isBuildingTree = !!data && !base.length
  const isLoading = isFetching || isBuildingTree

  const onToggleNodeState = (node: SelectedTreeNode) => {
    const { id } = node

    setSelected(node)
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const onFilter = (filter: AssetTreeFilterType) => {
    if (selected) setSelected(undefined)

    setFilters((prev) => {
      if (prev?.includes(filter)) return prev.filter((item) => item !== filter)
      return prev?.length ? [...prev, filter] : [filter]
    })
  }

  useEffect(() => {
    return () => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current)
    }
  }, [])

  return (
    <AssetTreeContext.Provider
      value={{
        expanded,
        search,
        selected,
        isLoading,
        tree,
        filters,
        onFilter,
        onSearch,
        onToggleNodeState,
      }}
    >
      {children}
    </AssetTreeContext.Provider>
  )
}
