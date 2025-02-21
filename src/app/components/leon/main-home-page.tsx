// src/app/components/leon/main-home-page.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { motion } from "framer-motion";

// Импорт изображений
import shape_1 from "@/assets/img/slider/slider_shape01.png";
import shape_2 from "@/assets/img/slider/slider_shape02.png";
import shape_3 from "@/assets/img/slider/slider_shape03.png";
import shape_4 from "@/assets/img/slider/slider_shape04.png";

interface HomePageProps {
  pretitle: string;
  title: string;
  subtitle: string;
  buttonText: string;
  targetLink: string;
  colorTitleMain: string;
  pageImg: { url: string; width: number; height: number };
  pageBg: { url: string; width: number; height: number };
}

const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;

// ✅ framer-motion настройки
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" }
  })
};

const MainHomePage: React.FC<HomePageProps> = ({
  pretitle,
  title,
  subtitle,
  buttonText,
  targetLink,
  colorTitleMain,
  pageImg,
  pageBg
}) => {
  // ✅ Оптимизация загрузки изображений
  const pageImgUrl = pageImg?.url ? `${httpAddress}${pageImg.url}` : "/default-pageImg.png";
  const pageBgUrl = pageBg?.url ? `${httpAddress}${pageBg.url}` : "/default-pageBG.jpg";
  const imgWidth = pageImg?.width || 407;
  const imgHeight = pageImg?.height || 344;

  return (
    <MouseParallaxContainer className="parallax-container">
      <section className="slider__area slider__bg">
        
        <div className="slider__background">
          <Image
            src={pageBgUrl}
            alt="Background Image"        
            style={{ objectFit: "cover", zIndex: -1 }}
            fill
            quality={50}
            priority
          />
        </div>

        <div className="slider-activee">
          <div className="single-slider">
            <div className="container custom-container">
              <div className="row justify-content-between">
                <div className="col-lg-6">
                  <motion.div
                    className="slider__content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                  >
                  
                    <motion.h6 className="sub-title" variants={fadeInUp} custom={0.2}>
                      {pretitle}
                    </motion.h6>
                    <motion.h2
                      className="title"
                      variants={fadeInUp}
                      custom={0.5}
                      style={{ color: colorTitleMain }}
                    >
                      {title}
                    </motion.h2>
                    <motion.p variants={fadeInUp} custom={0.8}>
                      {subtitle}
                    </motion.p>

                    {/* Кнопка с эффектом */}
                    <motion.div className="slider__btn" variants={fadeInUp} custom={1.2}>
                      <Link href="/go" prefetch={false} className="custom-button-main-page">
                        <span>{buttonText}</span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Главное изображение (fadeIn + scale) */}
                <div className="col-xxl-6 col-xl-5 col-lg-6">
                  <MouseParallaxChild factorX={0.03} factorY={0.03} className="slider__img text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                      <Image
                        src={pageImgUrl}
                        alt="Main Image"
                        width={imgWidth}
                        height={imgHeight}
                        priority
                      />
                    </motion.div>
                  </MouseParallaxChild>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Декоративные элементы */}
        <div className="slider__shapes">
          <Image src={shape_1} alt="shape" quality={50} priority />
          <Image src={shape_2} alt="shape" quality={50} priority />
          <Image src={shape_3} alt="shape" quality={50} priority />
          <Image src={shape_4} alt="shape" quality={50} priority />
        </div>
      </section>
    </MouseParallaxContainer>
  );
};

export default MainHomePage;
