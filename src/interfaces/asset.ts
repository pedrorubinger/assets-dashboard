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
  gatewayId: string
  locationId: string | null
}

export interface AssetComponent extends Asset {
  sensorType: AssetSensorType
}
