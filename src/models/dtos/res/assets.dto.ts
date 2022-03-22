// Contracts
import { TAssetsResponse } from '../../../contracts/asset.types';

// Models
import { Asset } from '../../domain/index';

export class AssetsResponseDTO {
  assets: Asset[];

  constructor(response: TAssetsResponse) {
    this.assets = response.data.data.map((asset) => new Asset(asset));
  }
}
