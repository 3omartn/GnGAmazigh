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
          <h1 className="text-white font-bold">NEWS X</h1>
          <h3 className="text-white font-bold">
            OUR PARTNERS {"(POUR)"} 2024,12
          </h3>
          <p className="text-white w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, class tempor
            ornare placerat netus malesuada mauris lacinia, parturient cras
            venenatis tellus scelerisque arcu. Vestibulum quam sociis consequat
            egestas litora ac integer luctus, curabitur aliquam facilisi enim
            morbi cum mi cubilia, praesent eros convallis cras orci lacus
            lobortis.
          </p>
        </div>

        <div className="flex flex-col items-end md:gap-4 gap-2">
          <Image
            src={"/placeholder.jpg"}
            className="w-[500px] h-[200px]"
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
