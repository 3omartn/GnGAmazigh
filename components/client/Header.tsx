"use client";

import React, { useState } from "react";
import Image from "next/image";
import { menu } from "@/lib/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathName = usePathname();

  return (
    <header>
      <main className="flex justify-between items-center">
        <div className="bordre border-b-4 w-[240px] max-w-[240px] pl-5 pb-2 mt-2">
          <Image
            src={"/logogngama.png"}
            alt="logo gng"
            width={200}
            height={150}
          />
        </div>

        <div className="px-5 md:block hidden">
          <ul className="flex gap-10 text-white font-semibold">
            {menu.map((item) => (
              <li
                key={item.name}
                className={cn(
                  "hover:border-b-4 border-blue-400 pb-2",
                  `${
                    item.link !== pathName
                      ? ""
                      : "border-b-4 border-blue-500 pb-2"
                  }`
                )}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </main>
    </header>
  );
}
