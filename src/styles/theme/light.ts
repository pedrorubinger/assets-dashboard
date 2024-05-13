import { Theme } from 'src/interfaces/theme'
import { Colors } from 'src/styles/tokens/colors'

export const lightTheme: Theme = {
  color: Colors.black,
  backgroundColor: Colors.gray150,
  contentBackgroundColor: Colors.white,
  headerBackgroundColor: Colors.gray850,

  buttonPrimaryBackgroundColor: Colors.blue500,
  buttonPrimaryColor: Colors.white,

  buttonSecondaryBackgroundColor: Colors.blue900,
  buttonSecondaryColor: Colors.white,

  buttonOutlinedBackgroundColor: Colors.white,
  buttonOutlinedBorderColor: Colors.gray200,
  buttonOutlinedColor: Colors.gray600,

  buttonBackgroundColorHover: Colors.blue800,
  buttonBackgroundColorOutlinedHover: Colors.gray200,
}
