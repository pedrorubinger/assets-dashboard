import { AxiosError } from 'axios'

import { ErrorCode, RawError } from 'src/interfaces/error'

export const handleError = (err: RawError): ErrorCode => {
  const code: ErrorCode | undefined =
    (err as AxiosError<any>)?.response?.data?.code ||
    (err as AxiosError<any>)?.response?.data?.error?.details?.[0]?.message

  if (code && code in ErrorCode)
    return (
      ErrorCode[code as unknown as keyof typeof ErrorCode] ?? ErrorCode.DEFAULT
    )

  return ErrorCode.DEFAULT
}
