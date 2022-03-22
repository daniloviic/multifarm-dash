export type TAsset = {
  assetId: string;
};

export type TAssetsResponse = {
  data: {
    data: TAsset[];
  };
  status: number;
};
