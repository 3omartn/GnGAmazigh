import { games } from "@/lib/games";
import Image from "next/image";
import React from "react";

const GameSec = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-10 gap-1">
        {games.map((game: any) => (
          <div
            className="container grid items-center justify-center"
            key={game.name}>
            <Image src={game.img} alt={game.alt} width={400} height={450} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSec;
