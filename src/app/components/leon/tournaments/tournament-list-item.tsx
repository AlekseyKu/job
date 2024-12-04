"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ITournament } from "@/types/tournament-type";
import TournamentBgPath from "../../svg/t-list-bg";

// prop type
type IProp = {
  item: ITournament;
  index: number;
  targetLink: string;
  buttonText: string;
};

const TournamentListItem = ({ item, index, targetLink, buttonText }: IProp) => {
  const [isMobile, setIsMobile] = useState(false);

  // Определяем, мобильная версия или нет
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Если ширина окна ≤ 768px, переключаемся на мобильную версию
    };

    handleResize(); // Инициализируем проверку
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="tournament__list-item wow fadeInUp"
      data-wow-delay={`.${index + 2}s`}
    >
      <TournamentBgPath />
      <div className="tournament__list-content">
        {/* Блок с изображением */}
        <div className="tournament__list-thumb">
          <Link href={targetLink}>
            <Image
              src={item.thumb}
              alt="thumb"
              style={{ width: "auto", height: "auto" }}
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
            <span>${item.prize}</span>
          </div>

        </div>

        {/* Кнопка */}
        <div className="tournament__list-live">
          <Link href={targetLink} target="_blank">
            {buttonText} <i className="far fa-play-circle"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TournamentListItem;
