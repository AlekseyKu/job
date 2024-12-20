import React from 'react';
import tournament_data from '@/data/tournament-data';
import TournamentBox from './tournament-box';
import TextAnimation from '../../common/text-animation';
import CustomButton from '../../common/custom-button';

interface TournamentAreaProps {
    targetLink: string;
    buttonText: string;
    pretitle: string;
    title: string;
  }

const TournamentArea: React.FC<TournamentAreaProps> = ({ targetLink, buttonText, pretitle, title }) => {
  return (
    <section className="tournament-area section-pt-120 section-pb-90">
    <div className="container">
        <div className="tournament__wrapper">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10">
                    <div className="section__title text-center mb-60">
                        <TextAnimation title={pretitle} />
                        <h3 className="title">{title}</h3>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center gutter-25">
                {tournament_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                      <TournamentBox item={item} />
                  </div>
                ))}
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-4">
                    <CustomButton href={targetLink}> {buttonText} </CustomButton>
                </div>
            </div>
        </div>
    </div>
  </section>
  );
};

export default TournamentArea;