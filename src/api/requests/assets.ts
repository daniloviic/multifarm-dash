import { api } from '../api';

// Errors
import { APIError } from '../error';

// Contracts
import { TAssetsResponse } from '../../contracts/asset.types';

// Response DTO
import { AssetsResponseDTO } from '../../models/dtos/res/assets.dto';
import { AxiosError } from 'axios';

export const fetchAssets = async (): Promise<AssetsResponseDTO | APIError> => {
  // URL is just copied for simlipicty.
  // I would create a Request DTO which would build the query based on the passed parameters.
  try {
    const rawResponse: TAssetsResponse = await api.instance.get(
      'jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000',
    );
    return new AssetsResponseDTO(rawResponse);
  } catch (error) {
    return api.handleError(error as AxiosError);
  }
};
