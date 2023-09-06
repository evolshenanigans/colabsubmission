"use client"

import Coins from "./Coins";
import { useEffect, useState } from "react";

interface Coin {
  id: string;
  name: string;
  key: string;
  current_price: number;
  symbol: string;
  market_cap: number;
  total_volume: number;
  image: string;


}


interface CryptoProps {
  coins: Coin[];
}

export default function Crypto({ coins: initialCoins }: CryptoProps) {
  const [coins, setCoins] = useState(initialCoins);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
        );
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Existing logic for rendering coins
  const topTenCoins = coins.slice(0, 10);

  return (
    <>
      {topTenCoins.map((coin) => (
        <Coins {...coin} key={coin.id} />
      ))}
    </>
  );
}
