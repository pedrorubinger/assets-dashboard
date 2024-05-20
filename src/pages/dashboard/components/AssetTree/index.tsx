import { useContext } from 'react'

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
import { AssetTreeContext } from 'src/context/AssetTreeContext'
import { AssetSensorType, AssetStatus } from 'src/interfaces/asset'
import { RedBadgeIcon } from 'src/components/Vector/RedBadgeIcon'
import { GreenBadgeIcon } from 'src/components/Vector/GreenBadgeIcon'
import { BoltIcon } from 'src/components/Vector/BoltIcon'

interface Props {}

export const AssetTree: React.FC<Props> = () => {
  const { tree, search, selected, expanded, onToggleNodeState, onSearch } =
    useContext(AssetTreeContext)

  const getSensorStatus = (node: TreeNode) => {
    let Status: JSX.Element | null = null
    let Type: JSX.Element | null = null

    const isSensorStatusCritical = node.status === AssetStatus.ALERT
    const isSensorStatusOperating = node.status === AssetStatus.OPERATING
    const isSensorTypeEnergy = node.sensorType === AssetSensorType.ENERGY

    if (isSensorStatusCritical) Status = <RedBadgeIcon />
    if (isSensorStatusOperating) Status = <GreenBadgeIcon />
    if (isSensorStatusOperating && isSensorTypeEnergy) {
      Status = null
      Type = <BoltIcon />
    }
    if (isSensorTypeEnergy) Type = <BoltIcon />

    return { Status, Type }
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

  return (
    <Box
      header={
        <HeaderBox>
          <Input
            name="filter"
            placeholder="Buscar Ativo ou Local"
            onChange={onSearch}
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
