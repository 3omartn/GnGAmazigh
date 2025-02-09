import Image from "next/image";
import React from "react";

export default function Games() {
  return (
    <section>
      <div className="flex items-center justify-center w-full gap-5">
        <Image
          className="w-[100px] h-[30px]"
          src={"/arrowright.png"}
          alt="arrow left"
          width={100}
          height={100}
        />
        <h2 className="md:text-6xl text-3xl text-white font-semibold">GAMES</h2>
        <Image
          className="w-[100px] h-[30px]"
          src={"/arrowleft.png"}
          alt="arrow left"
          width={100}
          height={100}
        />
      </div>

      <div className="flex justify-center items-center">
        <Image src={"/games.webp"} alt="games" width={1000} height={1000} />
      </div>
    </section>
  );
}
