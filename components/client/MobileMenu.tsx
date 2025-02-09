"use client";
import { menu } from "@/lib/menu";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [active, setActive] = useState(false);
  return (
    <div className="relative">
      <motion.button
        initial={false}
        onClick={() => setActive((pv) => !pv)}
        className=" relative w-10 h-10 rounded-full bg-white/0 transition-colors hover:bg-white/20 z-[100]"
        animate={active ? "open" : "closed"}>
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-[2px] w-5 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
          className="absolute h-[2px] w-5 bg-white"
        />
        <motion.span
          style={{
            left: "calc(50% + 5px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "50%",
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              left: "calc(50% + 5px)",
              bottom: ["50%", "50%", "35%"],
            },
          }}
          className="absolute h-[2px] w-2.5 bg-white"
        />
      </motion.button>
      <motion.div
        className="absolute  w-screen h-screen bg-violet-500/90 z-50"
        style={{
          top: "-16px",
          right: "0",
        }}
        variants={{
          open: {
            right: 0,
          },
          closed: {
            right: "500px",
          },
        }}
        animate={active ? "open" : "closed"}>
        <div className="flex justify-center items-center h-full text-center">
          <ul className="flex flex-col gap-10 text-white font-semibold">
            {menu.map((item) => (
              <li key={item.name}>
                <Link onClick={() => setActive((pv) => !pv)} href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
