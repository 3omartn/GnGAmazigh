"use client";

import { allNews } from "@/lib/allNews";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

const AllNews = () => {
  const [selectedNews, setSelectedNews] = useState<(typeof allNews)[number] | null>(null);

  const handleItemClick = (id: number) => {
    const newsItem = allNews.find((item) => item.id === id);
    setSelectedNews(newsItem || null);
  };

  useEffect(() => {
    if (selectedNews) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [selectedNews]);

  return (
    <main>
      <div className="grid grid-cols md:grid-cols-4 gap-4 mt-10">
        {allNews.map((item) => (
          <div
            key={item.id}
            className="hover:bg-black/20 p-2 rounded-2xl cursor-pointer transition-colors"
            onClick={() => handleItemClick(item.id)}
          >
            <Image
              src={item.img}
              alt={item.title}
              height={1000}
              width={1000}
              className="w-full h-[250px] object-cover"
            />
            <div className="bg-black/25 py-3 mt-3 rounded-2xl text-center">
              <span className="text-white font-bold text-2xl">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center my-8">
        <Image
          src={"/03.webp"}
          alt="avatar"
          width={1000}
          height={1000}
          className="md:w-1/3 md:h-1/3"
        />
      </div>

      <div className="flex justify-center mt-10">
        {selectedNews && (
          <div className="grid md:grid-cols-2 gap-8 mx-4 md:w-[85%] bg-black/20 rounded-2xl py-6 px-8 mb-5">
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-bold text-3xl">{selectedNews.title}</h1>
              <p className="text-white md:text-xl line-clamp-6">
                {selectedNews.desc}
              </p>
              <Link
                href={`/news/${selectedNews.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg self-start transition-colors text-lg"
              >
                Read Full Article →
              </Link>
            </div>

            <div className="flex justify-center items-start">
              <Image
                src={selectedNews.img}
                alt={selectedNews.title}
                width={1000}
                height={1000}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default AllNews;