import { useContext, useEffect, useState } from 'react'

import { TreeNode } from 'src/interfaces/tree'
import { AssetTreeContext } from 'src/context/AssetTreeContext'
import { getSensorStatus } from 'src/pages/dashboard/utils/helpers/assetTree'
import {
  Box,
  ContentBox,
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

interface Props {}

export const AssetTree: React.FC<Props> = () => {
  const [inputSearchValue, setInputSearchValue] = useState('')
  const { tree, search, selected, expanded, onToggleNodeState, onSearch } =
    useContext(AssetTreeContext)

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
    const { Status, Type } = getSensorStatus(node)

    return (
      <ListItem key={node.id} $isRoot={isRoot}>
        <ItemLine
          onClick={() => onToggleNodeState(node)}
          $isSelected={isSelected}
        >
          {!!hasChildren && Chevron}

          <IconComponent color={nodeIconColor} />
          <ListText $isSelected={isSelected}>{node.name}</ListText>
          {Status}
          {Type}
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
    if (!search) setInputSearchValue('')
  }, [search])

  return (
    <Box
      header={
        <HeaderBox>
          <Input
            name="filter"
            placeholder="Buscar Ativo ou Local"
            onChange={(e) => {
              const { value } = e.target

              setInputSearchValue(value ?? '')
              onSearch(e)
            }}
            value={inputSearchValue}
            icon={<MagIcon />}
          />
        </HeaderBox>
      }
    >
      <ContentBox>
        {!tree.length && renderEmptyMessage()}
        <List>
          {tree.map((node) => {
            return renderNode(node, true)
          })}
        </List>
      </ContentBox>
    </Box>
  )
}
