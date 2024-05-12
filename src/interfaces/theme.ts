export interface Theme {
  color: string
  backgroundColor: string
  headerBackgroundColor: string

  buttonPrimaryBackgroundColor: string
  buttonPrimaryColor: string

  buttonSecondaryBackgroundColor: string
  buttonSecondaryColor: string

  buttonOutlinedBackgroundColor: string
  buttonOutlinedBorderColor: string
  buttonOutlinedColor: string
}

export type ThemeOption = 'light' | 'dark'
