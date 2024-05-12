import { AxiosError } from 'axios'

export type RawError = AxiosError<any> | unknown

export enum ErrorCode {
  'DEFAULT' = 'Sorry. Something went wrong. Please, try again later or contact us.',
  '500_INTERNAL_SERVER_ERROR' = 'Sorry. An internal server error has occurred. Please, try again later or contact us.',
}
