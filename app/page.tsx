import Details from "@/components/Details";
import Direction from "@/components/Direction";
import Final from "@/components/Final";
import HeroPage from "@/components/HeroPage";
import LoveStory from "@/components/LoveStory";
import React from "react";

const Home = () => {
  return (
    <div className="h-full w-full">
      <main>
        <HeroPage />
        <LoveStory/>
        <Details/>
        <Direction/>
        <Final/>
      </main>
    </div>
  );
};

export default Home;
