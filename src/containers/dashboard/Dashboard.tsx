import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// API
import { api } from '../../api/api';

// API Requests
import { fetchAssets } from '../../api/requests/assets';

// Models
import { Asset } from '../../models/domain';

export const Dashboard = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [primeAsset, setPrimeAsset] = useState<Asset>();

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
    // Set the primary asset of inspection.
    setPrimeAsset(assets.find((asset) => asset.id === 'TERRA_Lido__LUNA'));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="dashboard">Boo</div>;
};
