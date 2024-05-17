import { ComponentSVG } from 'src/components/Icons/ComponentSVG'
import { CubeSVG } from 'src/components/Icons/CubeSVG'
import { LocationSVG } from 'src/components/Icons/LocationSVG'
import { SVGIconProps } from 'src/interfaces/icon'
import { TreeNodeType } from 'src/interfaces/tree'

export const AssetTreeIconMap: {
  [key in TreeNodeType]: React.FC<SVGIconProps>
} = {
  asset: CubeSVG,
  component: ComponentSVG,
  location: LocationSVG,
}
