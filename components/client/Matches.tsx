"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaTwitch } from "react-icons/fa";
import { matches } from "@/lib/matches";
import Link from "next/link";
export default function Matches() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-center w-full gap-5 overflow-hidden">
        <motion.div
          className="md:block hidden"
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
            className="w-[300px] h-[300px]"
            src={"/model2.svg"}
            alt="arrow left"
            width={500}
            height={500}
          />
        </motion.div>
        <Image
          className="w-[100px] h-[30px]"
          src={"/arrowright.png"}
          alt="arrow left"
          width={100}
          height={100}
        />
        <h2 className="md:text-5xl text-1xl text-white font-semibold text-center">
          ARABIAN LEAGUE - SUMMER SPLIT
        </h2>
        <Image
          className="w-[100px] h-[30px]"
          src={"/arrowleft.png"}
          alt="arrow left"
          width={100}
          height={100}
        />
        <motion.div
          className="md:block hidden"
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
            className="w-[300px] h-[300px]"
            src={"/model.svg"}
            alt="arrow left"
            width={500}
            height={500}
          />
        </motion.div>
      </div>

      <div className="w-full flex flex-col flex-1 justify-center items-center cursor-pointer">
        {matches.map((item) => (
          <div className="relative" key={item.id}>
            <Image src={"/frame.svg"} alt="frame" width={1000} height={500} />
            <div className="absolute top-1/2 left-10 -translate-y-1/2">
              <div className="flex justify-center items-center gap-4">
                <Image
                  className="h-10 w-10 md:h-[80px] md:w-[80px]"
                  src={item.team1}
                  alt="team1"
                  width={100}
                  height={100}
                />
                <span className="text-white text-3xl font-semibold">VS</span>
                <Image
                  className="h-10 w-10 md:h-[80px] md:w-[80px]"
                  src={item.team2}
                  alt="team2"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="absolute top-1/2 right-10 -translate-y-1/2">
              <div className="flex flex-col items-end md:gap-4 gap-2">
                <Image
                  className="h-5 w-20 md:h-[50px] md:w-[150px]"
                  src={item.game}
                  alt={item.gameName}
                  width={200}
                  height={200}
                />
                <span className="md:text-3xl text-sm font-semibold text-white">
                  {item.time}
                </span>
                <div className="flex items-center gap-4">
                  <FaTwitch className="text-white font-semibold md:text-3xl text-sm" />
                  <span className="text-white font-semibold md:text-3xl text-sm">
                    <a href={item.twitchUrl} target="_blank">
                      {item.twitchName}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
