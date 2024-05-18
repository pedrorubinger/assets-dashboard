import styled from 'styled-components'

import { Sizes } from 'src/styles/tokens/sizes'
import { Colors } from 'src/styles/tokens/colors'

export const List = styled.ul`
  margin: 0;
`

interface ListItemProps {
  $isRoot?: boolean
}

export const ListItem = styled.li<ListItemProps>`
  margin: ${Sizes.xsm2}px 0;
  margin-left: ${({ $isRoot }) => ($isRoot ? 0 : Sizes.md2)}px;

  list-style: none;
`

interface ItemLineProps {
  $isSelected?: boolean
}

export const ItemLine = styled.div<ItemLineProps>`
  display: flex;
  gap: ${Sizes.sm}px;
  align-items: center;

  padding: ${Sizes.xsm}px ${Sizes.sm}px;

  cursor: pointer;

  background-color: ${({ $isSelected }) =>
    $isSelected ? Colors.blue500 : 'transparent'};
`

interface ListTextProps {
  $isSelected?: boolean
}

export const ListText = styled.span<ListTextProps>`
  font-size: ${Sizes.sm3}px;
  font-weight: 400;
  text-align: left;
  color: ${({ $isSelected }) => ($isSelected ? Colors.white : Colors.gray850)};
`

export const HeaderBox = styled.div`
  overflow: hidden;
`
