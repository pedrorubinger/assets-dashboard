// eslint-disable-next-line import/named
import Axios, { AxiosError, AxiosHeaders, AxiosRequestConfig } from 'axios'

export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL
export const Api = Axios.create({ baseURL: API_BASE_URL })

Api.interceptors.request.use((config: AxiosRequestConfig) => {
  const headers: unknown = {
    ...config.headers,
    'Content-Type': 'application/json',
  }

  return { ...config, headers: headers as AxiosHeaders }
})

Api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    return Promise.reject(error)
  },
)
