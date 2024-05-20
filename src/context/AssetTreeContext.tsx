import { createContext, useMemo, useState } from 'react'

import { useCompanyStore } from 'src/store/company'
import { buildTree } from 'src/utils/helpers/tree'
import { useFetchAssetTreeData } from 'src/pages/dashboard/hooks/useFetchAssetTreeData'
import { TreeNode } from 'src/interfaces/tree'

interface AssetTreeContextProviderProps {
  children: React.ReactNode
}

interface SelectedTreeNode {
  id: string
  name: string
}

interface AssetTreeContextType {
  base: TreeNode[]
  expanded: string[]
  isLoading: boolean
  selected?: SelectedTreeNode
  onToggleNodeState: (params: SelectedTreeNode) => void
}

export const AssetTreeContext = createContext({} as AssetTreeContextType)

export const AssetTreeProvider = ({
  children,
}: AssetTreeContextProviderProps) => {
  const [expanded, setExpanded] = useState<string[]>([])
  const [selected, setSelected] = useState<SelectedTreeNode | undefined>()

  const { company } = useCompanyStore()
  const { isFetching, data } = useFetchAssetTreeData({
    companyId: company?.id,
  })

  const base = useMemo(() => buildTree(data), [data])

  const isBuildingTree = !!data && !base.length
  const isLoading = isFetching || isBuildingTree

  const onToggleNodeState = ({ id, name }: SelectedTreeNode) => {
    setSelected({ id, name })
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  return (
    <AssetTreeContext.Provider
      value={{
        expanded,
        selected,
        isLoading,
        base,
        onToggleNodeState,
      }}
    >
      {/*  */}
      {children}
    </AssetTreeContext.Provider>
  )
}
