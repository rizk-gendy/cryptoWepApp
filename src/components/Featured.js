import React, { useEffect, useState } from "react";
import "./Featured.css";
import Card from "./Card";
import axios from "axios";

const Featured = () => {
  const [data, setData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!data) return null;
  console.log(data);

  return (
    <div className="featured">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <h2>Explore Top Crypto's Like Bitcoin , Ethereum and Gogecoin</h2>
          <p>See all available assets: Vryptocurrencies and NFT's</p>
          <button className="btn">see More Coins</button>
        </div>
        {/* Right Side */}
        <div className="right">
          {data.map((item) => (
            <Card
              name={item.name}
              currentPrice={item.current_price.toLocaleString()}
              image={item.image}
              priceChange={item.price_change_percentage_24h.toFixed(2)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
