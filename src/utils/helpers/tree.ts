import { Asset, AssetSensorType, AssetStatus } from 'src/interfaces/asset'
import { CompanyLocation } from 'src/interfaces/company'
import {
  AssetTreeFilterType,
  TreeNode,
  TreeNodeType,
} from 'src/interfaces/tree'

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

type ValidateFilterSearchMatchParams = Omit<ProcessTreeSearchParams, 'tree'> & {
  node: TreeNode
}

interface ValidateFilterSearchMatchResponse {
  filterMatchesNode: boolean
  searchMatchesNode: boolean
}

/**
 * Validates whether a given TreeNode matches the searched value and active filters.
 * @param {ValidateFilterSearchMatchParams} params - Parameters for validation.
 * @param {TreeNode} params.node - The TreeNode.
 * @param {string | undefined} params.search - The searched value.
 * @param {AssetTreeFilterType[] | undefined} params.filters - The active filters.
 * @returns {ValidateFilterSearchMatchResponse} An object indicating whether the node matches the filter and search criteria.
 */
const validateFilterSearchMatch = ({
  node,
  search,
  filters,
}: ValidateFilterSearchMatchParams): ValidateFilterSearchMatchResponse => {
  let searchMatchesNode: boolean = false
  let filterMatchesNode: boolean = false

  if (search) {
    const formattedSearch = search.toLowerCase()
    const formattedName = node.name.toLowerCase()

    searchMatchesNode = formattedName.includes(formattedSearch)
  } else {
    searchMatchesNode = true
  }

  if (filters?.length) {
    if (
      filters.includes('type') &&
      node.sensorType === AssetSensorType.ENERGY
    ) {
      filterMatchesNode = true
    }

    if (filters.includes('status') && node.status === AssetStatus.ALERT) {
      filterMatchesNode = true
    }
  } else {
    filterMatchesNode = true
  }

  return { filterMatchesNode, searchMatchesNode }
}

interface ProcessTreeSearchParams {
  /** The array of items to filter */
  tree: TreeNode[]
  /** The searched name */
  search?: string
  /** The active filters */
  filters?: AssetTreeFilterType[]
}

/**
 * Filters tree nodes by name, keeping the children of any included parent node.
 *
 * @param {ProcessTreeSearchParams} params - The parameters for the function.
 * @returns {TreeNode[]} The filtered tree.
 */
export const processTreeSearch = ({
  tree = [],
  filters = [],
  search,
}: ProcessTreeSearchParams): TreeNode[] => {
  const filter = (items: TreeNode[]): TreeNode[] => {
    return items.reduce((acc: TreeNode[], item: TreeNode) => {
      const { filterMatchesNode, searchMatchesNode } =
        validateFilterSearchMatch({
          node: item,
          search,
          filters,
        })
      const matchesNode = filterMatchesNode && searchMatchesNode

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

      if (matchesNode) {
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
