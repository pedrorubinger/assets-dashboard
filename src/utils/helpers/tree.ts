import { Asset } from 'src/interfaces/asset'
import { CompanyLocation } from 'src/interfaces/company'
import { TreeNode, TreeNodeType } from 'src/interfaces/tree'

interface BuildTreeParams {
  locations: CompanyLocation[]
  assets: Asset[]
}

export type FlatRecord = (CompanyLocation | Asset) & {
  type: TreeNodeType
}

/**
 * Gets the id of a node parent. It can be either the prop locationId or parentId.
 * @param {TreeNode} node
 * @returns the id that identifies the node parent or null if it's a root node.
 */
const getOrigin = (node: CompanyLocation | Asset): string | null => {
  if ('locationId' in node) return node.locationId || node.parentId || null

  return node.parentId || null
}

/**
 * Identifies if the item is an asset or a component.
 * @param {Asset} asset asset item
 * @returns the node type
 */
const getAssetType = (asset: Asset): TreeNodeType => {
  if ('sensorType' in asset && asset.sensorType !== null) return 'component'

  return 'asset'
}

/**
 * Mounts the Asset tree based on the provided asset data.
 * @param {BuildTreeParams} params object containing an array of location and asset data.
 * @returns the tree of the company's asset hierarchy.
 */
export const buildTree = ({
  assets = [],
  locations = [],
}: BuildTreeParams): TreeNode[] => {
  const flat: FlatRecord[] = [
    ...assets.map((asset) => ({ ...asset, type: getAssetType(asset) })),
    ...locations.map((location) => ({ ...location, type: 'location' })),
  ] as FlatRecord[]

  const map = flat.reduce(
    (acc: { [id: string]: number }, el: FlatRecord, i: number) => {
      acc[el.id] = i

      return acc
    },
    {},
  )

  const tree: TreeNode[] = []

  flat.forEach((node: FlatRecord) => {
    const origin = getOrigin(node)
    const hasNoParent = !origin

    if (hasNoParent) {
      tree.push(node)
    } else {
      const item: TreeNode = flat[map[origin]]

      if (!item.children) item.children = []

      item?.children?.push(node)
    }
  })

  return tree
}

interface ProcessTreeSearchParams {
  /** The array of items to filter. */
  tree: TreeNode[]
  /** The searched name */
  search?: string
}

/**
 * Filters tree nodes by name, keeping the children of any included parent node.
 *
 * @param {ProcessTreeSearchParams} params - The parameters for the function.
 * @returns {TreeNode[]} The filtered tree.
 */
export const processTreeSearch = ({
  tree = [],
  search,
}: ProcessTreeSearchParams): TreeNode[] => {
  if (!search) return tree

  const filter = (items: TreeNode[]): TreeNode[] => {
    return items.reduce((acc: TreeNode[], item: TreeNode) => {
      const formattedSearch = search.toLowerCase()
      const formattedName = item.name.toLowerCase()
      const searchMatchesNode = formattedName.includes(formattedSearch)

      let filteredItem: TreeNode | null = null

      if (item.children) {
        const filteredChildren = filter(item.children)

        if (filteredChildren.length > 0) {
          filteredItem = {
            ...item,
            children: filteredChildren,
          }
        }
      }

      if (searchMatchesNode) {
        filteredItem = {
          ...item,
          children: filteredItem ? filteredItem.children : item.children,
        }
      }

      if (filteredItem) {
        acc.push(filteredItem)
      }

      return acc
    }, [])
  }

  return filter(tree)
}
