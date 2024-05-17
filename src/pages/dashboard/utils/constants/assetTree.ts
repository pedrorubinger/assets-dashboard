import AssetIcon from 'src/assets/cube-icon.svg'
import ComponentIcon from 'src/assets/component-icon.svg'
import LocationIcon from 'src/assets/location-icon.svg'
import { TreeNodeType } from 'src/interfaces/tree'

export const AssetTreeIconMap: { [key in TreeNodeType]: string } = {
  asset: AssetIcon,
  component: ComponentIcon,
  location: LocationIcon,
}
