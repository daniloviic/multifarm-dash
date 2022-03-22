// Contracts
import { TAsset } from '../../contracts/asset.types';

// Models
import { Farm } from './farm.model';

export class Asset {
  id: string;
  name: string;
  farms: Farm[];

  constructor(asset: TAsset) {
    this.id = asset.assetId;
    this.name = asset.asset;
    this.farms = asset.selected_farm.map((farm) => new Farm(farm));
  }
}
