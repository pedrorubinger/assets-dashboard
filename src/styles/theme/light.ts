import { Theme } from 'src/interfaces/theme'
import { Colors } from 'src/styles/tokens/colors'

export const lightTheme: Theme = {
  color: Colors.black,
  backgroundColor: Colors.gray150,
  headerBackgroundColor: Colors.gray850,

  buttonPrimaryBackgroundColor: Colors.blue500,
  buttonPrimaryColor: Colors.white,

  buttonSecondaryBackgroundColor: Colors.blue900,
  buttonSecondaryColor: Colors.white,

  buttonOutlinedBackgroundColor: Colors.white,
  buttonOutlinedBorderColor: Colors.gray200,
  buttonOutlinedColor: Colors.gray150,
}
