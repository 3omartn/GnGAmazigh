"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { FaDiscord, FaFacebook, FaTwitch, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

export default function AboutHero() {
  return (
    <section className="mt-[5rem] relative">
      <div className=" absolute right-0 rotate-180 top-1/2">
        <Image src={"/f1.svg"} alt="f1" width={24} height={24} />
      </div>
      <Image src={"/f1.svg"} alt="f1" width={24} height={24} />

      <div className="grid md:grid-cols-5 gap-4 grid-cols-0 items-center container">
        <div className="col-span-1 text-white md:space-y-6 text-4xl md:grid flex items-center md:justify-start justify-center md:space-x-0 space-x-6 space-y-0">
          <FaFacebook className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
          <RiInstagramFill className="cursor-pointer" />
          <FaDiscord className="cursor-pointer" />
          <FaTwitch className="cursor-pointer" />
          <FaXTwitter className="cursor-pointer" />
        </div>
        <div className="col-span-2">
          <div className="md:w-[500px] md:max-w-[500px]">
            <h1 className="md:text-6xl text-5xl font-bold text-white">
              GNG AMAZIGH E-sports
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
        <div className="relative !w-full md:h-full !h-[500px] col-span-2 ">
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
