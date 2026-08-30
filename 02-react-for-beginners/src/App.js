import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState("true");
  const [coins, setCoin] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((Response) => Response.json())
      .then(
        (json) => setCoin(json), //console.log(json)
      );
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <h1>The Coins {loading ? null : `(${coins.length})`}</h1>
      <hr />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name}({coin.symbol}): ${coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
