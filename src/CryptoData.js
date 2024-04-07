import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CryptoData.css';

const CryptoData = ({ currency }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=czk`
      );

      setPrice(result.data[currency].czk);
    };

    fetchData();
  }, [currency]);

  return (
    <div className="crypto-data">
      <h2 className="crypto-title">{currency.toUpperCase()}</h2>
      <p className="crypto-price">Aktuální cena: {price ? `${price} CZK` : 'Načítání...'}</p>
    </div>
  );
};

export default CryptoData;
