export interface Company {
  id: string
  name: string
}

export interface CompanyLocation {
  id: string
  name: string
  parentId: string | null
}

export interface CompanyAsset {
  id: string
}
