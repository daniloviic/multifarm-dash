// Contracts
import { TFarm, TTVLRecord } from '../../contracts/farm.types';

export class TVLRecord {
  date: string;
  value: number;

  constructor(tvlRecord: TTVLRecord) {
    this.date = tvlRecord.date;
    this.value = tvlRecord.value;
  }
}

export class Farm {
  tvlHistory: any[];

  constructor(farm: TFarm) {
    this.tvlHistory = farm.tvlStakedHistory.map(
      (tvlRecord) => new TVLRecord(tvlRecord),
    );
  }
}
