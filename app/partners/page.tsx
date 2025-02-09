import { partners } from "@/lib/partners";
import Image from "next/image";
import React from "react";
import Partners from "@/components/client/Partners"; // Importing the Partners component
import AnimatedSponsors from "@/components/client/AnimatedSponsors";
import Sponsorss from "@/components/client/Sponsorss";

const Page = () => {
  return (
    <main className="container mt-10">
      {/* Partners Section Header */}
      <Partners />

      {/* Partners Grid */}
      {partners.map((item: any) => (
        <div key={item.id} className="my-10">
          <div className="grid grid-cols-4 gap-10">
            <div className="bg-black/20 p-4 rounded-2xl col-span-3">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>

            <div className="flex flex-col items-center bg-black/20 p-4 rounded-2xl">
              {/* Add the anchor tag to make the logo clickable */}
              <a
                href={item.source}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[300px] h-[150px] flex justify-center items-center group" // Set a fixed height to balance logos
              >
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={300} // Set a fixed width for all logos
                  height={150} // Set a fixed height for all logos
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105" // Apply object-contain to maintain aspect ratio
                />
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Other Components */}
      <Sponsorss />
      <AnimatedSponsors />
    </main>
  );
};

export default Page;
