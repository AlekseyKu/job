"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import TextAnimation from "../common/text-animation";
import CustomButton from "../common/custom-button";

interface TopRatedProps {
  targetLink: string;
  buttonText: string;
  pretitle: string;
  title: string;
}

// Функция для динамического импорта изображений
const importImages = (): string[] => {
  const context = require.context("@/assets/img/games", false, /\.(webp|jpg|jpeg|png)$/);
  return context.keys().map((key) => context(key).default);
};

// Получение случайного набора изображений
const getRandomImages = (images: string[], count: number): string[] => {
  return images.sort(() => 0.5 - Math.random()).slice(0, count);
};

// Настройки Swiper
const sliderSettings = {
  observer: true,
  observeParents: true,
  loop: false,
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    1500: { slidesPerView: 5 },
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    576: { slidesPerView: 2 },
    0: { slidesPerView: 1.5, centeredSlides: true, centeredSlidesBounds: true },
  },
};

const StreamersArea: React.FC<TopRatedProps> = ({ targetLink, buttonText, pretitle, title }) => {
  const [randomImages, setRandomImages] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cachedImages = localStorage.getItem("randomStreamersImages");
      if (cachedImages) {
        setRandomImages(JSON.parse(cachedImages));
      } else {
        const images = importImages();
        const selectedImages = getRandomImages(images, 5);
        setRandomImages(selectedImages);
        localStorage.setItem("randomStreamersImages", JSON.stringify(selectedImages));
      }
    }
  }, []);

  return (
    <section className="streamers__area section-pt-95 section-pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title={pretitle} />
              <h3 className="title">{title}</h3>
            </div>
          </div>
        </div>
        <Swiper {...sliderSettings} modules={[Navigation, Pagination]} className="swiper-container streamers-active">
          {randomImages.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <div className="streamers__item">
                <div className="streamers__thumb">
                  <Link href={targetLink} prefetch={false}>
                    <Image src={imgSrc} alt={`Slot ${index + 1}`} width={200} height={200} loading="lazy" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="row justify-content-center mt-4">
          <div className="col-md-4">
            <CustomButton href={targetLink}>{buttonText}</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamersArea;
