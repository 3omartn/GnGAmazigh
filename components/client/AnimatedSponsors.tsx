"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface Sponsor {
  id: number;
  img: string;
  alt: string;
  link: string;
}

const sponsors: Sponsor[] = [
  { id: 1, img: "/sponsors/Orange.png", alt: "Orange Tunisie", link: "https://orange.tn/" },
  { id: 2, img: "/sponsors/Everience.png", alt: "Everience Tunisie", link: "https://www.everience.com/" },
  { id: 3, img: "/sponsors/OrangeArena.png", alt: "Orange Esports Arena", link: "https://www.orangearena.tn/" },
  { id: 4, img: "/sponsors/YouthGeekers.png", alt: "Youth Geekers", link: "https://arabianyg.com/" },
];

export default function AnimatedSponsors() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleHover = (isHovered: boolean) => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = isHovered ? "paused" : "running";
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-violet-400 to-purple-600 py-1 mt-15 -z-10">
      {/* Decorative elements */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 opacity-60 z-10">
        <Image src="/f1.svg" alt="Decorative" width={48} height={48} />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 opacity-60 z-10">
        <Image src="/f1.svg" alt="Decorative" width={48} height={48} className="rotate-180" />
      </div>

      {/* Sponsors loop */}
      <div className="overflow-hidden w-full py-5">
        <div
          ref={containerRef}
          className="relative flex animate-scroll gap-10"
        >
          {/* Repeat the sponsors to create a continuous loop */}
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex-shrink-0 transition-transform duration-300"
              onClick={() => window.open(sponsor.link, "_blank")}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <img
                src={sponsor.img}
                alt={sponsor.alt}
                className="w-[150px] h-[75px] object-contain cursor-pointer"
              />
            </div>
          ))}

          {/* Duplicate the sponsors list to create a seamless loop */}
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id + "_duplicate"}
              className="flex-shrink-0 transition-transform duration-300"
              onClick={() => window.open(sponsor.link, "_blank")}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <img
                src={sponsor.img}
                alt={sponsor.alt}
                className="w-[150px] h-[75px] object-contain cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
