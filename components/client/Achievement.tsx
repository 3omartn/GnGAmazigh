import { matches } from "@/lib/matches";
import Image from "next/image";
import React from "react";
import { FaTwitch } from "react-icons/fa";

type Props = {};

const Achievement = (props: Props) => {
  return (
    <div className="w-full flex flex-col flex-1 justify-center items-center cursor-pointer">
      <div className="flex items-center justify-center w-full gap-5 mb-5">
        <Image
          className="w-[100px] h-[30px]"
          src={"/arrowright.png"}
          alt="arrow left"
          width={100}
          height={100}
        />
        <h2 className="md:text-6xl text-3xl text-white font-semibold">
          ACHIEVEMENT
        </h2>
        <Image
          className="w-[100px] h-[30px]"
          src={"/arrowleft.png"}
          alt="arrow left"
          width={100}
          height={100}
        />
      </div>
      <div className="md:flex justify-between items-center gap-5 !!mx-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-bold">Octobre 2024</h1>
          <h3 className="text-white font-bold">
            Latest partnership with Orange Tunisia
          </h3>
          <p className="text-white w-[400px]">
            Leveling Up Esports and Gaming in Tunisia: GNG x Orange Partnership
            We are thrilled to announce the official partnership between GnG
            esports and Orange Tunisie ! This collaboration represents a
            significant step forward for the esports and gaming community in
            Tunisia, paving the way for new opportunities, innovation, and
            growth. A Partnership to Empower Gamers This partnership is more
            than just a milestone; it is a commitment to supporting the vibrant
            esports and gaming ecosystem in Tunisia.
          </p>
        </div>

        <div className="flex flex-col items-end md:gap-4 gap-2">
          <Image
            src={"/streaming.png"}
            className="w-[550px] h-[300px]"
            alt="placeholder"
            width={500}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
