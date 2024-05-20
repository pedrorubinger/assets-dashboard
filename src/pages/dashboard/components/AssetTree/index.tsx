import { useContext, useEffect, useRef, useState } from 'react'

import { TreeNode } from 'src/interfaces/tree'
import {
  Box,
  HeaderBox,
  ItemLine,
  List,
  ListItem,
  ListText,
  NoItemsMessage,
  Strong,
} from 'src/pages/dashboard/components/AssetTree/styles'
import { AssetTreeIconMap } from 'src/pages/dashboard/utils/constants/assetTree'
import { ChevronDownIcon } from 'src/components/Vector/ChevronDownIcon'
import { ChevronRightIcon } from 'src/components/Vector/ChevronRightIcon'
import { Colors } from 'src/styles/tokens/colors'
import { Input } from 'src/components/Input'
import { MagIcon } from 'src/components/Vector/MagIcon'
import { processTreeSearch } from 'src/utils/helpers/tree'
import { AssetTreeContext } from 'src/context/AssetTreeContext'

interface Props {}

export const AssetTree: React.FC<Props> = () => {
  const { base, selected, expanded, onToggleNodeState } =
    useContext(AssetTreeContext)
  const [search, setSearch] = useState<string | undefined>()

  const tree = processTreeSearch({ tree: base, search })

  const searchTimeout = useRef<number | null>(null)

  const onFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    searchTimeout.current = setTimeout(() => {
      setSearch(value)
    }, 500)
  }

  const renderNode = (node: TreeNode, isRoot = false) => {
    const hasChildren = !!node.children?.length
    const isNodeOpen = expanded.includes(node.id)
    const isSelected = selected?.id === node.id
    const chevronIconColor: undefined | keyof typeof Colors = isSelected
      ? 'white'
      : undefined
    const nodeIconColor: undefined | keyof typeof Colors = isSelected
      ? 'white'
      : undefined
    const IconComponent = AssetTreeIconMap[node.type]
    const Chevron = isNodeOpen ? (
      <ChevronDownIcon color={chevronIconColor} />
    ) : (
      <ChevronRightIcon color={chevronIconColor} />
    )

    return (
      <ListItem key={node.id} $isRoot={isRoot}>
        <ItemLine
          onClick={() => onToggleNodeState({ id: node.id, name: node.name })}
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

  const renderEmptyMessage = () => {
    if (search) {
      return (
        <NoItemsMessage>
          Nenhum ativo ou localização encontrados para sua busca por&nbsp;
          <Strong>{search}</Strong>.
          {/* For future implementations, a 'clear search' button may be added. */}
        </NoItemsMessage>
      )
    }

    return (
      <NoItemsMessage>
        Não há ativos ou localizações a serem exibidas neste momento.
      </NoItemsMessage>
    )
  }

  useEffect(() => {
    return () => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current)
    }
  }, [])

  return (
    <Box
      header={
        <HeaderBox>
          <Input
            name="filter"
            placeholder="Buscar Ativo ou Local"
            onChange={onFilter}
            icon={<MagIcon />}
          />
        </HeaderBox>
      }
    >
      {!tree.length && renderEmptyMessage()}

      <List>
        {tree.map((node) => {
          return renderNode(node, true)
        })}
      </List>
    </Box>
  )
}
