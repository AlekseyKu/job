// src/app/components/leon/tournaments/list-of-games.tsx
import React from "react";
import getTournamentData from "@/data/tournament-data";
import TournamentListItem from "./tournament-list-item";

interface TournamentListAreaProps {
  targetLink: string;
  buttonText: string;
  pretitle: string;
  title: string;
  currencySymbol: string; // Символ валюты
  exchangeRate: number; // Курс валюты
  tournamentBoxData: { sub: string[]; title: string[], pre: string[] };
}

const TournamentListArea: React.FC<TournamentListAreaProps> = ({ 
  targetLink, buttonText, pretitle, title, currencySymbol, exchangeRate, tournamentBoxData
}) => {
  const tournament_data = getTournamentData(tournamentBoxData);

  return (
    <section
      className="tournament__list-area section-pb-120 section-pt-120"
      // style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className="tournament__wrapper">
          <div className="row align-items-end mb-60">
            <div className="col-lg-8">
              <div className="section__title text-center text-lg-start title-shape-none">
                <span className="sub-title tg__animate-text">
                  {pretitle}
                </span>
                <h3 className="title">{title}</h3>
              </div>
            </div>
            <div className="col-lg-4">
              {/* <div className="section__title-link">
                <Link href={targetLink}>EXPLORE MORE</Link>
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tournament__list-item-wrapper">
                {tournament_data.map((item, i) => (
                  <TournamentListItem 
                    key={item.id} 
                    item={item} 
                    index={i} 
                    targetLink={targetLink} 
                    buttonText={buttonText} 
                    currencySymbol={currencySymbol}
                    exchangeRate={exchangeRate}
                    tournamentBoxData={tournamentBoxData}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentListArea;
