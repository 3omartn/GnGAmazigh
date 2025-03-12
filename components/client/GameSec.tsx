import { games } from "@/lib/games";
import Image from "next/image";
import React from "react";

interface GameSecProps {
  onGameClick: (gameName: string) => void;
}
const GameSec: React.FC<GameSecProps> = ({ onGameClick }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-10 gap-1">
        {games.map((game) => (
          <div
            className="container grid items-center justify-center"
            key={game.name}
          >
            <Image
              src={game.img}
              alt={game.name}
              width={400}
              height={450}
              className="cursor-pointer"
              onClick={() => {
                onGameClick(game.name);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSec;