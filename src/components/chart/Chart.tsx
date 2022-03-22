import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Css load
import './Chart.css';

// Contracts
import { Analytics } from '../../contracts/analytics.types';

export const Chart: React.FC<{ title: string; analytics: Analytics[] }> = ({
  title,
  analytics,
}) => {
  return (
    <div className="chart">
      <div className="chartTitle">{title}</div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={600} height={400} data={analytics}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="xAxis" tick={{ fill: 'white', fontSize: 10 }} />
          <YAxis tick={{ fill: 'white', fontSize: 8 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="yAxis"
            stroke="#e40dc7"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
