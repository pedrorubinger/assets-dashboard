import { BoltIcon } from 'src/components/Vector/BoltIcon'
import { GreenBadgeIcon } from 'src/components/Vector/GreenBadgeIcon'
import { RedBadgeIcon } from 'src/components/Vector/RedBadgeIcon'
import { AssetSensorType, AssetStatus } from 'src/interfaces/asset'
import { TreeNode } from 'src/interfaces/tree'

export const getSensorStatus = (node: TreeNode) => {
  let Status: JSX.Element | null = null
  let Type: JSX.Element | null = null

  const isSensorStatusCritical = node.status === AssetStatus.ALERT
  const isSensorStatusOperating = node.status === AssetStatus.OPERATING
  const isSensorTypeEnergy = node.sensorType === AssetSensorType.ENERGY

  if (isSensorStatusCritical) Status = <RedBadgeIcon />
  if (isSensorStatusOperating) Status = <GreenBadgeIcon />
  if (isSensorStatusOperating && isSensorTypeEnergy) {
    Status = null
    Type = <BoltIcon />
  }
  if (isSensorTypeEnergy) Type = <BoltIcon />

  return { Status, Type }
}
