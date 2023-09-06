import Coins from "./Coins";

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

export default function Crypto({ coins }: CryptoProps) {
  const topTenCoins = coins.slice(0, 10);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {topTenCoins.map((coin) => (
        <Coins {...coin} key={coin.id} />
      ))}
    </div>
  );
}
