export interface Theme {
  color: string
  backgroundColor: string
  contentBackgroundColor: string
  headerBackgroundColor: string

  buttonPrimaryBackgroundColor: string
  buttonPrimaryColor: string

  buttonSecondaryBackgroundColor: string
  buttonSecondaryColor: string

  buttonOutlinedBackgroundColor: string
  buttonOutlinedBorderColor: string
  buttonOutlinedColor: string
  buttonBackgroundColorOutlinedHover: string

  buttonBackgroundColorHover: string
}

export type ThemeOption = 'light' | 'dark'
