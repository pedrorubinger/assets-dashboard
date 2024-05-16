export enum AssetStatus {
  OPERATING = 'operating',
}

export enum AssetSensorType {
  ENERGY = 'energy',
}

export interface Asset {
  id: string
  name: string
  parentId: string | null
  sensorId: string
  status: AssetStatus
  sensorType: AssetSensorType | null
  gatewayId: string
  locationId: string | null
}
