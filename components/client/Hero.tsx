"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
const sleep = async (ms: any) =>
  await new Promise((resolve) => setTimeout(resolve, ms));
export default function Hero() {
  return (
    <section className="mt-[5rem] relative">
      <div className=" absolute right-0 rotate-180 top-1/2">
        <Image src={"/f1.svg"} alt="f1" width={24} height={24} />
      </div>
      <Image src={"/f1.svg"} alt="f1" width={24} height={24} />
      <div className="grid md:grid-cols-2 gap-4 grid-cols-0 items-center container">
        <div className="">
          <div className="md:w-[500px] md:max-w-[500px]">
            <h1 className="md:text-6xl text-5xl font-bold text-white">
              GNG AMAZIGH E-Sports
            </h1>
          </div>

          <div>
            <p className="text-white md:text-lg text-sm">
            Tunisian Esports organization🎮 <br></br> 
            We will gather the best Tunisian talents and reach the top before you know it!
            </p>
          </div>

          <div className="flex justify-end">
            <Button
              variant={"ghost"}
              className="hover:bg-transparent text-white hover:text-white underline">
              read more...
            </Button>
          </div>
        </div>
        <div className="relative !w-full md:h-full !h-[500px] ">
          <motion.div
            className="w-full h-full"
            animate={["initial"]}
            variants={{
              grow: {
                scale: 1.1,
              },
              rotate: {
                rotate: [null, -5, 5, 0],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                  repeatType: "reverse",
                },
              },
              initial: {
                y: [-20, 20],
                rotate: 0,
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                  repeatType: "reverse",
                },
              },
            }}>
            <Image
              className="absolute !w-full"
              src={"/model.svg"}
              alt="model"
              fill
            />
          </motion.div>
        </div>
      </div>
      <Image src={"/f1.svg"} alt="f1" width={24} height={24} />
    </section>
  );
}
