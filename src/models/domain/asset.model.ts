// Contracts
import { TAsset } from '../../contracts/asset.types';

export class Asset {
  id: string;

  constructor(asset: TAsset) {
    this.id = asset.assetId;
  }
}
