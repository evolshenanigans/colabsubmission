"use client";

import About from "../app/Home/about";
import Navbar from "../app/Components/navbar";
import Projects from "../app/Components/projects";
import Crypto from "../app/Components/Crypto";
import React, { useEffect, useState } from "react";
import Why from "../app/Components/Why";

export default function Home() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  return (
    <main>
      <div className="relative">
        <Navbar />
        <div className="gradient-02 z-0" />
        <About />
      </div>
      <div className="relative">
        <div className="gradient-03 z-0" />
        <Projects />
      </div>
      <Why />
      <Crypto coins={coins} />
      <div className="relative">
        <div className="gradient-04 z-0" />
      </div>
    </main>
  );
}
