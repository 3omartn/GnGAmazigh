"use client";

import { allNews } from "@/lib/allNews";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AllNews = () => {
  const newsAreaRef = useRef<HTMLDivElement | null>(null);
  const [news, setNews] = useState(false) as any;

  const handleItemClick = (id: any) => {
    if (newsAreaRef.current) {
      newsAreaRef.current.scrollIntoView({ behavior: "smooth" });

      const data = allNews.filter((item: any) => {
        return item.id === id;
      });
      setNews(data[0]);
    }
  };

  return (
    <main>
      <div className="grid grid-cols md:grid-cols-4 gap-4 mt-10">
        {allNews.map((item: any) => (
          <div
            key={item.id}
            className="hover:bg-black/20 p-2 rounded-2xl"
            onClick={() => handleItemClick(item.id)}>
            <Image
              src={item.img}
              alt={item.title}
              height={1000}
              width={1000}
              className="w-full h-[250px]"
            />
            <div className="bg-black/25  py-3 mt-3 rounded-2xl text-center">
              <span className="text-white font-bold text-2xl">
                {item.title}{" "}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={"/03.webp"}
          alt="avatar"
          width={1000}
          height={1000}
          className="md:w-1/3 md:h-1/33"
        />
      </div>
      <div ref={newsAreaRef} className="flex justify-center mt-10 ">
        {news === false ? (
          ""
        ) : (
          <div className="grid md:grid-cols-2 gap-2 !!mx-10  md:w-[85%] bg-black/20 rounded-2xl py-4 px-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-bold text-3xl">{news.title}</h1>

              <p className="text-white md:text-2xl">{news.desc}</p>
            </div>

            <div className="flex flex-col justify-center items-end md:gap-4 gap-2">
              <Image
                src={news.img}
                className="md:w-[600px] md:h-[300px]"
                alt="placeholder"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default AllNews;
