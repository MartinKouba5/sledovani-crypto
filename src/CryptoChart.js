import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const CryptoChart = ({ currency }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.cryptowat.ch/markets/kraken/${currency}usd/ohlc`
      );

      const chartData = {
        labels: result.data.result['60'].map((_, index) => index),
        datasets: [
          {
            label: `${currency.toUpperCase()} Price`,
            data: result.data.result['60'].map(price => price[4]),
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      };

      setChartData(chartData);
    };

    fetchData();
  }, [currency]);

  return (
    <div>
      <h2>{currency.toUpperCase()} Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default CryptoChart;
