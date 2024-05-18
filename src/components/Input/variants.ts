import { InputSize, InputSizeItem } from 'src/interfaces/input'
import { Sizes } from 'src/styles/tokens/sizes'

export const InputSizes: { [key in InputSize]: InputSizeItem } = {
  md: {
    fontSize: Sizes.sm3,
    borderRadius: Sizes.xsm1,
    paddingVertical: Sizes.sm2,
    paddingHorizontal: Sizes.md,
  },
}
