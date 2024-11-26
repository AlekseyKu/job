"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ITournament } from "@/types/tournament-type";
import TournamentBgPath from "../../svg/t-list-bg";
// import { useTimer } from "react-timer-hook";

// prop type
type IProp = {
  item: ITournament;
  index: number;
  targetLink: string;
  buttonText: string;
};
const TournamentListItem = ({ item, index, targetLink, buttonText  }: IProp) => {
  // const expiryTimestamp = new Date(item.coming_time);
  // const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });
  return (
    <div
      className="tournament__list-item wow fadeInUp"
      data-wow-delay={`.${index + 2}s`}
    >
      <TournamentBgPath />
      <div className="tournament__list-content">
        <div className="tournament__list-thumb">
          <Link href={targetLink}>
            <Image
              src={item.thumb}
              alt="thumb"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        <div className="tournament__list-name">
          <h5 className="team-name">{item.team_name.name}</h5>
          <span className="status">{item.status}</span>
        </div>
        <div className="tournament__list-prize">
          <h6 className="title">Prize</h6>
          <i className="fas fa-trophy"></i>
          <span>${item.prize}</span>
        </div>
        {/* <div className="tournament__list-time">
          <h6 className="title">Time</h6>
          <i className="fas fa-clock"></i>
          <span suppressHydrationWarning={true}>{hours}h : {minutes}m : {seconds}s</span>
        </div> */}
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
