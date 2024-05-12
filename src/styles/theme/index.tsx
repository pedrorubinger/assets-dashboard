import { ThemeProvider } from 'styled-components'

import { lightTheme } from 'src/styles/theme/light'
import { ThemeOption } from 'src/interfaces/theme'

interface ThemeProps {
  /** @default 'light' */
  theme?: ThemeOption
  children: React.ReactNode
}

export const Theme = ({ children }: ThemeProps) => {
  const getThemeSettings = () => {
    /** For future implementations, validate provided theme. */
    return lightTheme
  }

  return <ThemeProvider theme={getThemeSettings()}>{children}</ThemeProvider>
}
