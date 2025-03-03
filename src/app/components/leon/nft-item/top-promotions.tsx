"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import fire_img from "@/assets/img/icons/fire.png";
import { combinedData } from "@/data/combined-data";

const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;

interface PromoImage {
  id: number;
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
}

interface TrendingNftItemsProps {
  targetLink: string;
  buttonText: string;
  promoImages: PromoImage[] | null;
  sectionTitle: string;
  promoTitle: string;
  promoSubtitle: string;
  currencySymbol: string; // Символ валюты
  exchangeRate: number; // Курс валюты
  localeLang: string;
  promoPrice: string;
}

const slider_setting = {
  observer: true,
  observeParents: true,
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    "1500": { slidesPerView: 3 },
    "1200": { slidesPerView: 3 },
    "992": { slidesPerView: 2 },
    "768": { slidesPerView: 2 },
    "576": { slidesPerView: 1 },
    "0": { slidesPerView: 1 },
  },
};

const TrendingNftItems: React.FC<TrendingNftItemsProps> = ({
  localeLang,
  targetLink,
  buttonText,
  promoImages,
  sectionTitle,
  promoTitle,
  promoSubtitle,
  currencySymbol,
  exchangeRate,
  promoPrice,
}) => {
  return (
    <section className="trendingNft-area section-pt-120 section-pb-90">
      <div className="container">
        <div className="trendingNft__title-wrap">
          <div className="row">
            <div className="col-md-7">
              <div className="trendingNft__title">
                <h2 className="title">
                  {sectionTitle}
                  <Image src={fire_img} width={35} alt="icon" loading="lazy" />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...slider_setting}
          modules={[Navigation]}
          className="swiper-container trendingNft-active"
        >
          {combinedData.promo.data
            .filter((i) => i.trending)
            .map((item, index) => {
              const promoImage = Array.isArray(promoImages) ? promoImages[index] : null;
              const locale = localeLang.split("-")[0]; // Берем первую часть "en-US" → "en"

              return (
                <SwiperSlide key={item.id}>
                  <div className="trendingNft__item">
                    <div className="trendingNft__item-top">
                      <div className="trendingNft__item-avatar">
                        <div className="image">
                          <Link href={targetLink} prefetch={false}>
                            <Image src={item.creator} alt="img" loading="lazy" />
                          </Link>
                        </div>
                        <div className="info">
                          <h6 className="name">{item.title[locale] || item.title["en"]}</h6>
                          <Link href={targetLink} prefetch={false} className="userName">
                            @{item.creator_name}
                          </Link>
                        </div>
                      </div>
                      <div className="trendingNft__item-wish">
                        <Link href="#">
                          <i className="far fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="trendingNft__item-image" style={{ position: "relative" }}>
                      <Link href={targetLink} prefetch={false}>
                        {promoImage && promoImage.url ? (
                          <Image
                            src={`${httpAddress}${promoImage.url}`}
                            alt={promoImage.alternativeText || `Promo Image ${index + 1}`}
                            width={promoImage.width || 300}
                            height={promoImage.height || 200}
                            style={{ width: "100%", height: "auto" }}
                            loading="lazy"
                          />
                        ) : (
                          <Image
                            src={item.img}
                            alt={`Default Image ${index + 1}`}
                            width={300}
                            height={200}
                            style={{ width: "100%", height: "auto" }}
                            loading="lazy"
                          />
                        )}
                        <h6 className="trendingNft__item-subtitle">
                          {item.subtitle[locale] || item.title["en"]}
                        </h6>
                      </Link>
                    </div>
                    <div className="trendingNft__item-bottom">
                      <div className="trendingNft__item-price">
                        <span className="bid">{promoPrice}</span>
                        <h6 className="eth">
                          {(item.eth * exchangeRate).toFixed(0)} <span>{currencySymbol}</span>
                        </h6>
                      </div>
                      <Link href={targetLink} prefetch={false} className="bid-btn">
                        {buttonText}
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendingNftItems;