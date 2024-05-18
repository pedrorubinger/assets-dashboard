import { useState } from 'react'

import { ContentSection } from 'src/components/ContentSection'
import { TreeNode } from 'src/interfaces/tree'
import {
  HeaderBox,
  ItemLine,
  List,
  ListItem,
  ListText,
} from 'src/pages/dashboard/components/AssetTree/styles'
import { AssetTreeIconMap } from 'src/pages/dashboard/utils/constants/assetTree'
import { ChevronDownSVG } from 'src/components/Icons/ChevronDownSVG'
import { ChevronRightSVG } from 'src/components/Icons/ChevronRightSVG'
import { Colors } from 'src/styles/tokens/colors'
import { Input } from 'src/components/Input'
import { MagSVG } from 'src/components/Icons/MagSVG'

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
    const chevronIconColor: undefined | keyof typeof Colors = isSelected
      ? 'white'
      : undefined
    const nodeIconColor: undefined | keyof typeof Colors = isSelected
      ? 'white'
      : undefined
    const IconComponent = AssetTreeIconMap[node.type]

    return (
      <ListItem key={node.id} $isRoot={isRoot}>
        <ItemLine
          onClick={() => onToggleStatus(node.id)}
          $isSelected={isSelected}
        >
          {!!hasChildren &&
            (isNodeOpen ? (
              <ChevronDownSVG color={chevronIconColor} />
            ) : (
              <ChevronRightSVG color={chevronIconColor} />
            ))}

          <IconComponent color={nodeIconColor} />
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
    <ContentSection
      style={{ overflow: 'hidden' }}
      headerStyle={{ padding: 0 }}
      header={
        <HeaderBox>
          <Input placeholder="Buscar Ativo ou Local" icon={<MagSVG />} />
        </HeaderBox>
      }
    >
      <List>
        {tree.map((node) => {
          return renderNode(node, true)
        })}
      </List>
    </ContentSection>
  )
}
