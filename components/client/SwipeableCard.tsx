"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { news } from "@/lib/news";
export default function SwipeableCard({ title }: any) {
  return (
    <section>
      <div className="flex items-center justify-center w-full gap-5">
        <Image
          className="w-[100px] h-[30px]"
          src={"/arrowright.png"}
          alt="arrow left"
          width={100}
          height={100}
        />
        <h2 className="md:text-6xl text-3xl text-white font-semibold">
          {title}
        </h2>
        <Image
          className="w-[100px] h-[30px]"
          src={"/arrowleft.png"}
          alt="arrow left"
          width={100}
          height={100}
        />
      </div>

      <div className="my-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 1,
            stretch: 0,
            depth: 100,
            modifier: 5,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-[400px] md:w-full flex justify-center ">
          {news.map((item) => (
            <div key={item.id} className="!w-[500px]">
              <SwiperSlide className="bg-white rounded-2xl flex justify-center relative !w-[500px]">
                <Image src={item.img} alt={item.alt} width={500} height={500} />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
