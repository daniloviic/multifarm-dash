/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// CSS load
import './Dashboard.css';

// API
import { api } from '../../api/api';

// API Requests
import { fetchAssets } from '../../api/requests/assets';

// Contracts
import { Analytics } from '../../contracts/analytics.types';

// Models
import { Asset, Farm } from '../../models/domain';

// Utils
import { isEmpty } from '../../utils';

// Components
import { ChartHeader } from '../../components/chart/header/ChartHeader';
import { Chart } from '../../components/chart/Chart';

export const Dashboard: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [primeAsset, setPrimeAsset] = useState<Asset>();
  const [tvlAnalytics, setTvlAnalytics] = useState<Analytics[]>();
  const [aprAnalytics, setAPRAnalytics] = useState<Analytics[]>();

  /**
   * Did mount.
   * Fetches the assets data.
   */
  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Sets the primary asset upon assets load.
   */
  useEffect(() => {
    if (isEmpty(assets)) {
      setPrimeAsset(undefined);
      return;
    }

    // Set the primary asset of inspection.
    setPrimeAsset(assets.find((asset) => asset.id === 'TERRA_Lido__LUNA'));
  }, [assets]);

  /**
   * Prepares analytics data upon Prime asset allocation.
   */
  useEffect(() => {
    if (isEmpty(primeAsset)) {
      setTvlAnalytics(undefined);
      return;
    }

    const farm = primeAsset?.farms[0];
    if (isEmpty(farm)) {
      setTvlAnalytics(undefined);
      return;
    }
    prepareAnalytics(farm!);
  }, [primeAsset]);

  /**
   * Fetches Assets data and stores them to the state.
   */
  const fetchData = async (): Promise<void> => {
    const response = await fetchAssets();
    if (api.isError(response)) {
      toast.error(response.message);
      return;
    }
    setAssets(response.assets);
  };

  /**
   * Prepares analytics for charting.
   * @param farm - Farmt model.
   */
  const prepareAnalytics = (farm: Farm): void => {
    const tvlAnalytics = prepareTvlAnalytics(farm);
    setTvlAnalytics(tvlAnalytics);
    const aprAnalytics = prepareAPRAnalytics(farm);
    setAPRAnalytics(aprAnalytics);
  };

  /**
   * Prepares TVL analytics for the given FARM.
   * @param farm - Farm Model
   * @returns Analytics,
   */
  const prepareTvlAnalytics = (farm: Farm): Analytics[] => {
    let analytics: Analytics[] = [];
    for (const tvlRecrod of farm!.tvlHistory) {
      analytics = [
        {
          xAxis: tvlRecrod.date,
          yAxis: tvlRecrod.value,
        },
        ...analytics,
      ];
    }
    return analytics;
  };

  /**
   * Prepares APR analytics.
   * @returns Analytics
   */
  const prepareAPRAnalytics = (farm: Farm): Analytics[] => {
    let currentAPR = 1;
    let analytics: Analytics[] = [];
    for (const tvlRecrod of farm!.tvlHistory) {
      analytics = [
        ...analytics,
        {
          xAxis: tvlRecrod.date,
          yAxis: currentAPR,
        },
      ];
      currentAPR += Math.floor(Math.random() * 10);
    }
    return analytics;
  };

  return isEmpty(primeAsset) ? (
    <div className="loader">Loading...</div>
  ) : (
    <div className="dashboard">
      <ChartHeader asset={primeAsset!} />
      <div className="charts">
        <Chart title="Asset APR (y)" analytics={aprAnalytics!} />
        <Chart title="Asset TVL" analytics={tvlAnalytics!} />
      </div>
    </div>
  );
};
