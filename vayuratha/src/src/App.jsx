import { useState, useEffect } from "react";
import React from "react";
import Background from "./component/background/Background";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
const App = () => {
  let heroData = [
    { text1: "Buy for your", text2: "Agriculture" },
    { text1: "Check out", text2: "our Drones" },
    { text1: "Give in to", text2: "your passions" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  return (
    <div>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        className={`${playStatus ? "hidden" : "block"}`}
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      
    </div>
  );
};

export default App;