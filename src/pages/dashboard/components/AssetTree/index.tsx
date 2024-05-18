import { useEffect, useRef, useState } from 'react'

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
import { Sizes } from 'src/styles/tokens/sizes'

interface Props {
  tree: TreeNode[]
}

export const AssetTree: React.FC<Props> = ({ tree }) => {
  const [expanded, setExpanded] = useState<string[]>([])
  const [selected, setSelected] = useState<string | undefined>()
  const [search, setSearch] = useState<string | undefined>()

  const searchTimeout = useRef<number | null>(null)

  const onFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    searchTimeout.current = setTimeout(() => {
      setSearch(value)
    }, 1500)
  }

  const onToggleStatus = (id: string) => {
    setSelected(id)
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const renderNode = (node: TreeNode, isRoot = false) => {
    const hasChildren = !!node.children?.length
    const isNodeOpen = expanded.includes(node.id)
    const isSelected = selected === node.id
    const chevronIconColor: undefined | keyof typeof Colors = isSelected
      ? 'white'
      : undefined
    const nodeIconColor: undefined | keyof typeof Colors = isSelected
      ? 'white'
      : undefined
    const IconComponent = AssetTreeIconMap[node.type]
    const Chevron = isNodeOpen ? (
      <ChevronDownSVG color={chevronIconColor} />
    ) : (
      <ChevronRightSVG color={chevronIconColor} />
    )

    if (search && !node.name.toLowerCase().includes(search.toLowerCase())) {
      return null
    }

    return (
      <ListItem key={node.id} $isRoot={isRoot}>
        <ItemLine
          onClick={() => onToggleStatus(node.id)}
          $isSelected={isSelected}
        >
          {!!hasChildren && Chevron}

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

  useEffect(() => {
    return () => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current)
    }
  }, [])

  return (
    <ContentSection
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
        maxHeight: 600,
      }}
      headerStyle={{ padding: 0 }}
      contentStyle={{ paddingLeft: Sizes.sm1 }}
      header={
        <HeaderBox>
          <Input
            name="filter"
            placeholder="Buscar Ativo ou Local"
            onChange={onFilter}
            icon={<MagSVG />}
          />
        </HeaderBox>
      }
    >
      <List style={{ overflowX: 'auto' }}>
        {tree.map((node) => {
          return renderNode(node, true)
        })}
      </List>
    </ContentSection>
  )
}
