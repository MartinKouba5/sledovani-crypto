import './App.css';
import CryptoData from './CryptoData';
import CryptoChart from './CryptoChart';

function App() {
  return (
    <div className="container">
      <h1>Sledování kryptoměn</h1>
      <CryptoData currency="bitcoin" />
      <CryptoData currency="ethereum" />
<CryptoData currency="tether" />
<CryptoData currency="binancecoin" />
<CryptoData currency="solana" />


    </div>
  );
}

export default App;
