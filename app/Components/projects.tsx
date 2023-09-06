"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import b3softclothing from "../Images/b3softclothing.jpg";
import portfolio from "../Images/portfolio.jpg";
import features from "../Images/featuresfirst.jpg";

export default function Projects() {
  const list = [
    {
      title: "E-Commerce",
      img: b3softclothing.src,
      description: "E-commerce site",
      link: "https://adorable-kringle-0ce2af.netlify.app/",
    },
    {
      title: "Portfolio",
      img: portfolio.src,
      description: "personal website",
      link: "https://joshportfolio-14579.firebaseapp.com/",
    },
    {
      title: "Features First Auto",
      img: features.src,
      description: "auto safety website",
      link: "https://featuresfirst.vercel.app/",
    },
  ];

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          className="w-full"
          key={index}
          isPressable
          onPress={() => window.location.href = item.link}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.description}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}