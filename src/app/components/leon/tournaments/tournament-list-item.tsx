"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ITournament } from "@/types/tournament-type";
import TournamentBgPath from "../../svg/t-list-bg";
import { motion } from "framer-motion"; // 🚀 Добавляем анимацию

// prop type
type IProp = {
  item: ITournament;
  index: number;
  targetLink: string;
  buttonText: string;
  currencySymbol: string;
  exchangeRate: number;
  tournamentBoxData: { sub: string[]; title: string[], pre: string[] };
};

// 🔥 WOW.js fadeInUp-анимация на framer-motion
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" }
  })
};

const TournamentListItem = ({ item, index, targetLink, buttonText, currencySymbol, exchangeRate }: IProp) => {
  const [isMobile, setIsMobile] = useState(false);

  // Определяем, мобильная версия или нет
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Конвертируем приз в локальную валюту
  const convertedPrize = (item.prize * exchangeRate).toFixed(0);

  return (
    <motion.div
      className="tournament__list-item"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      custom={index * 0.2} // Увеличиваем задержку по индексу элемента
    >
      <TournamentBgPath />
      <div className="tournament__list-content">
        {/* Блок с изображением */}
        <div className="tournament__list-thumb">
          <Link href="/go" prefetch={false}>
            <Image
              src={item.thumb}
              alt="thumb"
              style={{ width: "auto", height: "auto" }}
              loading="lazy"
            />
          </Link>
        </div>

        <div className="tournament__list-name-prize">
          {/* Блок с текстом */}
          <div className="tournament__list-name">
            <h5 className="team-name">{item.team_name.name}</h5>
            <span className="status">{item.status}</span>
          </div>

          {/* Блок с призом */}
          <div className="tournament__list-prize">
            <h6 className="title">Prize</h6>
            <i className="fas fa-trophy"></i>
            <span>{currencySymbol} {convertedPrize}</span>
          </div>
        </div>

        {/* Кнопка */}
        <div className="tournament__list-live">
          <Link href="/go" prefetch={false}>
            {buttonText} <i className="far fa-play-circle"></i>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TournamentListItem;
