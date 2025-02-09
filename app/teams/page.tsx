import GameSec from "@/components/client/GameSec";
import LolTeam from "@/components/client/LolTeam";
import React from "react";
import AnimatedSponsors from "@/components/client/AnimatedSponsors";

const page = () => {
  return (
    <div>
      <GameSec />
      <LolTeam />
      <br></br>
      <br></br>
      <AnimatedSponsors />
    </div>
  );
};

export default page;
