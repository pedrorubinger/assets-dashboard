import { ErrorCode } from 'src/interfaces/error'

export interface ApiServiceResponse<T = any> {
  data?: T | undefined
  success: boolean
  error?: ErrorCode | undefined
}
