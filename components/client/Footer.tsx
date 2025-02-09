import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { menu } from "@/lib/menu";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container my-10">
      <div className="my-5 block md:hidden">
        <ul className="flex gap-10 text-white font-semibold justify-center">
          {menu.map((item) => (
            <li key={item.name} className=" cursor-auto">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-white text-3xl font-semibold flex gap-4">
          <Link href={"https://www.youtube.com/@GnGEsports"}>
            <FaYoutube />
          </Link>
          <Link href={"https://www.facebook.com/GnGesportstn#"}>
            <FaFacebook />
          </Link>
          <Link href={"https://www.instagram.com/gng_tn/"}>
            <RiInstagramFill />
          </Link>
        </div>
        <div className="px-5 md:block hidden">
          <ul className="flex gap-10 text-white font-semibold">
            {menu.map((item) => (
              <li key={item.name} className=" cursor-auto">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white text-3xl font-semibold flex gap-4">
          <Link href={"https://discord.gg/Zp9ChywMJu"}>
            <FaDiscord />
          </Link>
          <Link href={"https://www.twitch.tv/gngtn"}>
            <FaTwitch />
          </Link>
          <Link href={"https://twitter.com/SportsGng"}>
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
}
