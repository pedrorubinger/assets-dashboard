import { Asset } from 'src/interfaces/asset'
import { ApiServiceResponse } from 'src/interfaces/service'
import { Api } from 'src/services/api'
import { handleError } from 'src/utils/helpers/error'

interface GetAssetsParams {
  assetId: string
}

export const getAssets = async ({
  assetId,
}: GetAssetsParams): Promise<ApiServiceResponse<Asset[]>> => {
  try {
    const { data } = await Api.get<Asset[]>(`/companies/${assetId}/assets`)

    return { success: true, data }
  } catch (err) {
    return { success: false, error: handleError(err) }
  }
}
