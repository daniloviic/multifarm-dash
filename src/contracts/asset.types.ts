// Contracts
import { TFarm } from './farm.types';

export type TAsset = {
  assetId: string;
  asset: string;
  selected_farm: TFarm[];
};

export type TAssetsResponse = {
  data: {
    data: TAsset[];
  };
  status: number;
};
