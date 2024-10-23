"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image, { StaticImageData } from 'next/image';

import slot_1 from '@/assets/img/games/CashorNothing@513x767@x2.webp'
import slot_3 from '@/assets/img/games/DeadwoodRIP@513x767@x2.webp'
import slot_2 from '@/assets/img/games/ApacheWay@513x767@x2.webp'
import slot_4 from '@/assets/img/games/Gonzo2@4x@x2.webp'
import slot_5 from '@/assets/img/games/ParthenonQuestforImmortality2@513x767@x2.webp'
import slot_6 from '@/assets/img/games/GladiatorClash@513x767-1@x2.webp'
import slot_7 from '@/assets/img/games/DynamiteRichesMegaways@4x@x2.webp'
import slot_8 from '@/assets/img/games/CaseClosed@513x767@x2.webp'

import TextAnimation from "../common/text-animation";

// slider data
const streamers_data: {
  id: number;
  img: StaticImageData;
  title: string;
}[] = [
  {
    id: 1,
    img: slot_1,
    title: 'Cashor Nothing'
  },
  {
    id: 2,
    img: slot_2,
    title: 'Apache Way'
  },
  {
    id: 3,
    img: slot_3,
    title: 'Deadwood RIP'
  },
  {
    id: 4,
    img: slot_4,
    title: 'Gonzo'
  },
  {
    id: 5,
    img: slot_5,
    title: 'Parthenon'
  },
  {
    id: 6,
    img: slot_6,
    title: 'Gladiator Clash'
  },
  {
    id: 7,
    img: slot_7,
    title: 'Case Closed'
  },
  {
    id: 8,
    img: slot_8,
    title: 'Dynamite Riches'
  },
];

// Function to get 5 random streamers
const getRandomStreamers = (streamers: typeof streamers_data, count: number) => {
  const shuffled = [...streamers].sort(() => 0.5 - Math.random()); // Shuffle array
  return shuffled.slice(0, count); // Return first 'count' elements
};

// slider setting
const slider_setting = {
  observer: true,
  observeParents: true,
  loop: false,
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    '1500': {
      slidesPerView: 5,
    },
    '1200': {
      slidesPerView: 4,
    },
    '992': {
      slidesPerView: 4,
    },
    '768': {
      slidesPerView: 3,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1.5,
      centeredSlides: true,
      centeredSlidesBounds: true,
    },
  },
};

const StreamersArea = () => {
  const randomStreamers = getRandomStreamers(streamers_data, 5); // Get 5 random streamers

  return (
    <section className="streamers__area section-pt-95 section-pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="Our games" />
              <h3 className="title">top rated</h3>
            </div>
          </div>
        </div>
        <Swiper {...slider_setting} modules={[Navigation, Pagination]} className="swiper-container streamers-active">
          {randomStreamers.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="streamers__item">
                <div className="streamers__thumb">
                  <Link href="https://leon1-casino.com/go" target="_blank">
                    <Image src={item.img} alt={item.title} style={{ height: 'auto', width: '100%' }} />
                  </Link>
                </div>
                {/* <div className="streamers__content">
                  <h4 className="name">{item.title}</h4>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StreamersArea;
