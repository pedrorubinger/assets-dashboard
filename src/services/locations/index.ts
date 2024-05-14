import { CompanyLocation } from 'src/interfaces/company'
import { ApiServiceResponse } from 'src/interfaces/service'
import { Api } from 'src/services/api'
import { handleError } from 'src/utils/helpers/error'

interface GetCompanyLocationsParams {
  companyId: string
}

export const getCompanyLocations = async ({
  companyId,
}: GetCompanyLocationsParams): Promise<
  ApiServiceResponse<CompanyLocation[]>
> => {
  try {
    const { data } = await Api.get<CompanyLocation[]>(
      `/companies/${companyId}/locations`,
    )

    return { success: true, data }
  } catch (err) {
    return { success: false, error: handleError(err) }
  }
}
