import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); //아무것도 주시하고 있지 않는다면(빈 리스트라면) 이 코드는 한번만 작동
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
