import Games from "@/components/client/Games";
import Hero from "@/components/client/Hero";
import Matches from "@/components/client/Matches";
import SwipeableCard from "@/components/client/SwipeableCard";
import AnimatedSponsors from "@/components/client/AnimatedSponsors";
export default function Home() {
  return (
    <main>
      <section>
        <Hero />
        <SwipeableCard title={"News"} />
        <Games />
        <Matches />
        <AnimatedSponsors />
      </section>
    </main>
  );
}
