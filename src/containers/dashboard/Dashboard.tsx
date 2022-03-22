import { useEffect } from 'react';

// API
import { api } from '../../api/api';

// API Requests
import { fetchAssets } from '../../api/requests/assets';

export const Dashboard = () => {
  const fetchData = async (): Promise<any> => {
    const response = await fetchAssets();
    if (api.isError(response)) {
      //TODO: Handle error.
    }
    //TODO: Update state.
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="dashboard">Boo</div>;
};
