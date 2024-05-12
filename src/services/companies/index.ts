import { Company } from 'src/interfaces/company'
import { ApiServiceResponse } from 'src/interfaces/service'
import { Api } from 'src/services/api'
import { handleError } from 'src/utils/helpers/error'

export const getCompanies = async (): Promise<
  ApiServiceResponse<Company[]>
> => {
  try {
    const { data } = await Api.get<Company[]>('/companies')

    return { success: true, data }
  } catch (err) {
    return { success: false, error: handleError(err) }
  }
}
