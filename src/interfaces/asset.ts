export enum AssetStatus {
  OPERATING = 'operating',
  ALERT = 'alert',
}

export enum AssetSensorType {
  ENERGY = 'energy',
  VIBRATION = 'vibration',
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
