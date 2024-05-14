import { Asset } from 'src/interfaces/asset'
import { ApiServiceResponse } from 'src/interfaces/service'
import { Api } from 'src/services/api'
import { handleError } from 'src/utils/helpers/error'

interface GetAssetsParams {
  companyId: string
}

export const getAssets = async ({
  companyId,
}: GetAssetsParams): Promise<ApiServiceResponse<Asset[]>> => {
  try {
    const { data } = await Api.get<Asset[]>(`/companies/${companyId}/assets`)

    return { success: true, data }
  } catch (err) {
    return { success: false, error: handleError(err) }
  }
}
