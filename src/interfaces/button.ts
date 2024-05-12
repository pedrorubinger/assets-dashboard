export type ButtonSize = 'sm'

export interface ButtonSizeItem {
  fontSize: number
  borderRadius: number
  paddingVertical: number
  paddingHorizontal: number
}

export type ButtonVariant = 'primary' | 'secondary' | 'outlined'

export interface ButtonVariantItem {
  borderColor?: string
  backgroundColor: string
  color: string
}
