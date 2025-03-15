"use client";
import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <section className="my-10">
      {/* Section Header */}
      <div className="flex items-center justify-center w-full gap-5">
        <Image
          className="w-[100px] h-[30px]"
          src="/arrowright.png"
          alt="Arrow Right"
          width={100}
          height={30}
        />
        <h2 className="md:text-6xl text-2xl text-white font-semibold">
          Our Partners
        </h2>
        <Image
          className="w-[100px] h-[30px]"
          src="/arrowleft.png"
          alt="Arrow Left"
          width={100}
          height={30}
        />
      </div>
    </section>
  );
}
