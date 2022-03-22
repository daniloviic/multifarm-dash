// Css load
import './ChartHeader.css';

// Models
import { Asset } from '../../../models/domain';

export const ChartHeader: React.FC<{
  asset: Asset;
}> = ({ asset }) => {
  return (
    <div className="chartHeader">
      <div className="coinHolder">
        <div className="coin">
          <span className="blue">Lido</span>
          <span className="white">: {asset.name}</span>
        </div>
        <div className="bookmark blue">Bookmark placeholed</div>
      </div>
      <div className="report">Report and error</div>
    </div>
  );
};
