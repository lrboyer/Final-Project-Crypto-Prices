import "./Coin.css";
import React from "react";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  rank,
  marketCap
}) => {
  return (
    <div className="container">
      <div className="coin">
        <img src={image} alt="crypto" />
        <h1 class='text-xl' className="coinH1">{name}</h1>
        <p class='uppercase' className="coinSymbol">{symbol}</p>
        <p className="coinPrice">${price.toLocaleString()}</p>
        <p className="coinVolume">${volume.toLocaleString()}</p>
        {priceChange < 0 ? (
          <p className="coinPercentRed">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="coinPercentGreen">{priceChange.toFixed(2)}%</p>
        )}
        <p className="coinMarketCap">Market Cap: ${marketCap.toLocaleString()}</p>
        <p className="coinRank">Market Cap Rank: {rank}</p>
      </div>
    </div>
  );
};

export default Coin;
