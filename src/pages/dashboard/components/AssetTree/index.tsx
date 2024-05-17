import { useState } from 'react'

import ChevronRight from 'src/assets/right-chevron-icon.svg'
import ChevronDown from 'src/assets/down-chevron-icon.svg'
import { ContentSection } from 'src/components/ContentSection'
import { TreeNode } from 'src/interfaces/tree'
import {
  ChevronIcon,
  ItemLine,
  List,
  ListItem,
  ListText,
} from 'src/pages/dashboard/components/AssetTree/styles'
import { AssetTreeIconMap } from 'src/pages/dashboard/utils/constants/assetTree'

interface Props {
  tree: TreeNode[]
}

export const AssetTree: React.FC<Props> = ({ tree }) => {
  const [isOpen, setIsOpen] = useState<string[]>([])
  const [selected, setSelected] = useState<string | undefined>()

  const onToggleStatus = (id: string) => {
    setSelected(id)
    setIsOpen((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const renderNode = (node: TreeNode, isRoot = false) => {
    const hasChildren = !!node.children?.length
    const isNodeOpen = isOpen.includes(node.id)
    const isSelected = selected === node.id

    return (
      <ListItem key={node.id} $isRoot={isRoot}>
        <ItemLine
          onClick={() => onToggleStatus(node.id)}
          $isSelected={isSelected}
        >
          {!!hasChildren && (
            <ChevronIcon src={isNodeOpen ? ChevronDown : ChevronRight} />
          )}
          <img src={AssetTreeIconMap[node.type]} />
          <ListText $isSelected={isSelected}>{node.name}</ListText>
        </ItemLine>

        {!!hasChildren && !!isNodeOpen && (
          <List>
            {node.children!.map((child) => {
              return renderNode(child)
            })}
          </List>
        )}
      </ListItem>
    )
  }

  return (
    <ContentSection style={{ overflow: 'hidden' }}>
      <List>
        {tree.map((node) => {
          return renderNode(node, true)
        })}
      </List>
    </ContentSection>
  )
}
