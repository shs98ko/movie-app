import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState("true");
  const [coins, setCoin] = useState([]);
  const [index, setIndex] = useState("init");
  const [usd, setUSD] = useState("0");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((Response) => Response.json())
      .then((json) => {
        setCoin(json); //console.log(json)
        setLoading(false);
      });
  }, []);
  const onChange = (event) => {
    setIndex(event.target.value);
  };

  const usdOnChange = (event) => {
    setUSD(event.target.value);
  };
  return (
    <div className="App">
      <h1>The Coins {loading ? null : `(${coins.length})`}</h1>
      <hr />
      <label htmlFor="usd">USD:</label>
      <input
        value={usd}
        onChange={usdOnChange}
        id="usd"
        type="number"
        disabled={index === "init" ? true : false}
      />
      <br />
      <label htmlFor="convertCoin">Coin:</label>
      <input
        value={index === "init" ? "" : parseFloat(usd) / parseFloat(index)}
        id="convertCoin"
        disabled={true}
      />

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option value="init">please select Coin...</option>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price} key={coin.id}>
              {coin.name}({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
