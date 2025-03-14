"use client";
import GameSec from "@/components/client/GameSec";
import LolTeam from "@/components/client/LolTeam";
import React, { useRef } from "react";
import AnimatedSponsors from "@/components/client/AnimatedSponsors";
import ValorantTeam from "@/components/client/ValorantTeam";

const TeamsPage = () => {
  const lolTeamRef = useRef<HTMLDivElement>(null);
  const valoTeamRef = useRef<HTMLDivElement>(null);
  const handleGameClick = (gameName: string) => {
    if (gameName.toUpperCase() === "LOL" && lolTeamRef.current) {
      lolTeamRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (gameName === "Valorant" && valoTeamRef.current) {
      valoTeamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <GameSec onGameClick={handleGameClick} />
      <div ref={lolTeamRef}> 
      <LolTeam />
      </div>
      <div ref={valoTeamRef}>
      <ValorantTeam />
      </div>
      <br></br>
      <br></br>
      <AnimatedSponsors />
    </div>
  );
};

export default TeamsPage;
