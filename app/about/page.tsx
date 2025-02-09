import AboutHero from "@/components/client/AboutHero";
import Achievement from "@/components/client/Achievement";
import LolTeam from "@/components/client/LolTeam";
import SwipeableCard from "@/components/client/SwipeableCard";
import AnimatedSponsors from "@/components/client/AnimatedSponsors";
import React from "react";

export default function page() {
  return (
    <section className="flex flex-col gap-11">
      <AboutHero />
      <SwipeableCard title={"LAST ACHEVEMENT"} />
      <Achievement />
      <LolTeam />
      <AnimatedSponsors />
    </section>
  );
}
