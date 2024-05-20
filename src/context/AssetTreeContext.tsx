import { createContext, useEffect, useMemo, useRef, useState } from 'react'

import { useCompanyStore } from 'src/store/company'
import { buildTree, processTreeSearch } from 'src/utils/helpers/tree'
import { useFetchAssetTreeData } from 'src/pages/dashboard/hooks/useFetchAssetTreeData'
import { TreeNode } from 'src/interfaces/tree'

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
  onToggleNodeState: (params: SelectedTreeNode) => void
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const AssetTreeContext = createContext({} as AssetTreeContextType)

export const AssetTreeProvider = ({
  children,
}: AssetTreeContextProviderProps) => {
  const [expanded, setExpanded] = useState<string[]>([])
  const [selected, setSelected] = useState<SelectedTreeNode | undefined>()
  const [search, setSearch] = useState<string | undefined>()

  const { company } = useCompanyStore()
  const { isFetching, data } = useFetchAssetTreeData({
    companyId: company?.id,
  })

  const base = useMemo(() => buildTree(data), [data])
  const tree = useMemo(
    () => processTreeSearch({ tree: base, search }),
    [base, search],
  )

  const searchTimeout = useRef<number | null>(null)

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

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
        onSearch,
        onToggleNodeState,
      }}
    >
      {children}
    </AssetTreeContext.Provider>
  )
}
