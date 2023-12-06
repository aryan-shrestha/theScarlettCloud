import React from "react";
import HeroSection from "./HeroSection";
import { GrowingCards } from "../../components";

const Home = () => {
  return (
    <div className="container p-4 mx-auto md:pt-4 text-neutral-800 space-y-24">
      <HeroSection />
      <GrowingCards />
    </div>
  );
};

export default Home;
