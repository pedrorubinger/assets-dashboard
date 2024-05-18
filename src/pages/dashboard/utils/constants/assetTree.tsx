import { ComponentIcon } from 'src/components/Vector/ComponentIcon'
import { CubeIcon } from 'src/components/Vector/CubeIcon'
import { LocationIcon } from 'src/components/Vector/LocationIcon'
import { SVGIconProps } from 'src/interfaces/icon'
import { TreeNodeType } from 'src/interfaces/tree'

export const AssetTreeIconMap: {
  [key in TreeNodeType]: React.FC<SVGIconProps>
} = {
  asset: CubeIcon,
  component: ComponentIcon,
  location: LocationIcon,
}
