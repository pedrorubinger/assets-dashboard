import { ButtonSize, ButtonSizeItem } from 'src/interfaces/button'
import { Sizes } from 'src/styles/tokens/sizes'

export const ButtonSizes: { [key in ButtonSize]: ButtonSizeItem } = {
  sm: {
    fontSize: Sizes.sm2,
    borderRadius: Sizes.xsm,
    paddingVertical: Sizes.xsm1,
    paddingHorizontal: Sizes.sm,
  },
  md: {
    fontSize: Sizes.sm3,
    borderRadius: Sizes.xsm1,
    paddingVertical: Sizes.xsm2,
    paddingHorizontal: Sizes.md,
  },
}
