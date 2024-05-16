import { Asset } from 'src/interfaces/asset'
import { CompanyLocation } from 'src/interfaces/company'

export type TreeNodeType = 'asset' | 'component' | 'location'

export interface TreeNode extends Partial<CompanyLocation>, Partial<Asset> {
  id: string
  name: string
  children?: TreeNode[]
}
