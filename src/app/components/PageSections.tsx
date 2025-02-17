import TournamentListArea from "./leon/tournaments/list-of-games";
import TopRatedGamesArea from "./leon/area-top-rated";
import TopPromotions from "./leon/nft-item/top-promotions";
import TopWinners from "./leon/nft-item/top-winners";
import TournamentArea from "./leon/tournaments/most-lucky-players";
import EditorInfo from "./leon/editors/editor-info";
import { FC } from "react";

interface PageSection {
  id: string | number;
  sectionName: string;
}

interface PageSectionsProps {
  pageSections: PageSection[];
  siteData: any;
  currencySymbol: string;
  exchangeRate: number;
}

const sectionComponents: Record<string, FC<any>> = {
  "LIST OF GAMES": TournamentListArea,
  "OUR GAMES": TopRatedGamesArea,
  "Top promotions": TopPromotions,
  "Top winners of the day": TopWinners,
};

const PageSectionsRenderer: FC<PageSectionsProps> = ({
  pageSections,
  siteData,
  currencySymbol,
  exchangeRate,
}) => {
  const mostLuckyPlayersSection = pageSections.find(
    (section) => section.sectionName === "MOST LUCKY PLAYERS"
  );

  return (
    <>
      {/* Рендерим все секции, кроме MOST LUCKY PLAYERS */}
      {pageSections
        .filter((section) => section.sectionName !== "MOST LUCKY PLAYERS")
        .map((section) => {
          const Component = sectionComponents[section.sectionName as keyof typeof sectionComponents];
          return Component ? (
            <Component key={section.id} {...siteData} currencySymbol={currencySymbol} exchangeRate={exchangeRate} />
          ) : null;
        })}

      {/* EditorInfo (После всех секций) */}
      {siteData.editor_info && (
        <EditorInfo 
          editorInfo={siteData.editor_info.editorInfo} 
          titleMain={siteData.H1}
        />
      )}

      {/* TournamentArea (MOST LUCKY PLAYERS) После EditorInfo */}
      {mostLuckyPlayersSection && (
        <TournamentArea
          key="most-lucky-players"
          targetLink={siteData.targetLinkButton}
          buttonText={siteData.attributes.buttonText ?? "PLAY NOW"}
          pretitle={siteData.attributes.mostLuckyPlayers.pretitle}
          title={siteData.attributes.mostLuckyPlayers.title}
          currencySymbol={currencySymbol}
          exchangeRate={exchangeRate}
        />
      )}
    </>
  );
};

export default PageSectionsRenderer;
