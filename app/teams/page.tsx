"use client";
import GameSec from "@/components/client/GameSec";
import LolTeam from "@/components/client/LolTeam";
import React, { useRef } from "react";
import AnimatedSponsors from "@/components/client/AnimatedSponsors";

const page = () => {
  const lolTeamRef = useRef<HTMLDivElement>(null);

  const handleGameClick = (gameName: string) => {
    if (gameName.toUpperCase() === "LOL" && lolTeamRef.current) {
      lolTeamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <GameSec onGameClick={handleGameClick} />
      <div ref={lolTeamRef}> 
        <LolTeam />
      </div>
      <br></br>
      <br></br>
      <AnimatedSponsors />
    </div>
  );
};

export default page;
