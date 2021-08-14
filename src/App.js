import { useEffect, useState } from "react";
import Coin from "./components/Coin";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const filterCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = () => {
    window.location.reload(false);
  }

  return (
    <div classname="body" class="flex flex-col min-h-screen">
      <div id="top">
        <header class="fixed w-full block bg-blue-700 md:flex md:justify-between">
          <a
            onClick={handleClick} class="text-center font-bold text-4xl text-white px-8 py-4 hover:bg-blue-900"
            href="#top"
          >
            Crypto Prices
          </a>
        </header>
      </div>
      <div className="main" class="flex-grow">
        <div class="mt-10 p-6 bg-black grid justify-items-center">
          <SearchBar onChange={handleChange} />
        </div>
        <div className="individualCoin">
          {filterCoin.map((coin) => {
            return (
              <Coin
                key={coin.id}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.current_price}
                volume={coin.total_volume}
                priceChange={coin.price_change_percentage_24h}
                rank={coin.market_cap_rank}
                marketCap={coin.market_cap}
              />
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
