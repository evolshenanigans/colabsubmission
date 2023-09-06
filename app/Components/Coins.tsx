import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface CoinsProps {
  name: string;
  current_price: number;
  symbol: string;
  market_cap: number;
  total_volume: number;
  image: string;
  id: string;
}

const Coins: React.FC<CoinsProps> = ({
  name,
  current_price,
  symbol,
  market_cap,
  total_volume,
  image,
  id,
}) => {
  return (
    <Card className="m-4 py-4 w-full flex flex-col justify-center items-center">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <p className="text-tiny uppercase font-bold">{name}</p>
        <small className="text-default-500">{symbol}</small>
        <h4 className="font-bold text-large">${current_price}</h4>
        <h4 className="font-bold text-large">${total_volume}</h4>
        <h4 className="font-bold text-large text-center">MKT: cap ${market_cap}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <Image
          alt={name}
          className="object-cover rounded-xl"
          src={image}
          width={50}
          height={50}
        />
      </CardBody>
    </Card>
  );
};

export default Coins;
