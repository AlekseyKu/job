'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';

// Статические изображения
// import slider_bg from '@/assets/img/slider/slider_bg.jpg';
import shape_1 from '@/assets/img/slider/slider_shape01.png';
import shape_2 from '@/assets/img/slider/slider_shape02.png';
import shape_3 from '@/assets/img/slider/slider_shape03.png';
import shape_4 from '@/assets/img/slider/slider_shape04.png';

interface HomePageProps { 
  pretitle: string;
  title: string;
  subtitle: string;
  buttonText: string;
  targetLink: string;
  colorTitleMain: string;
  pageImg:  { url: string; width: number; height: number };
  pageBg:  { url: string; width: number; height: number };
}

const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;

const MainHomePage: React.FC<HomePageProps> = ({ pretitle, title, subtitle, buttonText, targetLink, colorTitleMain, pageImg, pageBg }) => {
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pageImgUrl = pageImg?.url ? `${httpAddress}${pageImg.url}` : '/default-pageImg.png'; // Проверяем наличие URL
  const pageBgUrl = pageBg?.url ? `${httpAddress}${pageBg.url}` : 'https://cmsbase24.top/default-pageBG.jpg'; // Проверяем наличие URL
  const imgWidth = pageImg?.width || 407;
  const imgHeight = pageImg?.height || 344;

  return (
    <MouseParallaxContainer>
      <section className="slider__area slider__bg " style={{ backgroundImage: `url(${pageBgUrl})` }}>
        <div className="slider-activee">
          <div className="single-slider">
            <div className="container custom-container">
              <div className="row justify-content-between">
                <div className="col-lg-6">
                  <div className="slider__content">
                    <h6 className="sub-title wow fadeInUp" data-wow-delay=".2s">{pretitle}</h6>
                    <h2 className="title wow fadeInUp" data-wow-delay=".5s" style={{ color: colorTitleMain }}>{title}</h2>
                    <p className="wow fadeInUp" data-wow-delay=".8s">{subtitle}</p>
                    <div className="slider__btn wow fadeInUp" data-wow-delay="1.2s">
                      <Link href={targetLink} className="custom-button-main-page">
                        <span>{buttonText}</span>
                      </Link>                  
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-5 col-lg-6">
                  <MouseParallaxChild factorX={0.03} factorY={0.03} className="slider__img text-center">
                    {/* Передаем размеры изображения и проверенный URL */}
                    <Image 
                      src={pageImgUrl} 
                      alt="Main Image" 
                      width={imgWidth} // Указываем ширину, полученную из Strapi
                      height={imgHeight}  // Указываем высоту, полученную из Strapi
                      priority
                    />
                  </MouseParallaxChild>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider__shapes">
          <Image src={shape_1} alt="shape" />
          <Image src={shape_2} alt="shape" />
          <Image src={shape_3} alt="shape" />
          <Image src={shape_4} alt="shape" />
        </div>
      </section>
    </MouseParallaxContainer>
  );
};

export default MainHomePage;
