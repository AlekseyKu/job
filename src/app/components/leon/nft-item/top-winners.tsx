import React from 'react';
import topWinners_data from '@/data/top-winners-data';
import NftItemBox from './nft-item-box';
import nft_data from '@/data/nft-data';


interface NftItemAreaProps {
  targetLink: string;
  buttonText: string;
  sectionTitle: string;
}

// Функция для выбора случайных элементов из массива
const getRandomItems = (data: any[], count: number) => {
  const filteredData = data.filter(item => item.id <= 100);
  const shuffled = [...filteredData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count); // Возвращаем первые 'count' элементов
};

const NftItemArea: React.FC<NftItemAreaProps> = ({ targetLink, buttonText, sectionTitle }) => {
  const randomTopWinners = getRandomItems(topWinners_data, 3); // Получаем 3 случайных элемента

  return (
    <section className="nft-item__area">
      <div className="container custom-container">
        <div className="trendingNft__title-wrap">
          <div className="row">
              <div className="col-md-7">
                  <div className="trendingNft__title">
                      <h2 className="title">{sectionTitle}</h2>
                  </div>
              </div>
          </div>
        </div>
        {/* <div className="row justify-content-center">
          {randomTopWinners.map((item) => (
            <div key={item.id} className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
              <NftItemBox item={item} />
            </div>
          ))}
        </div> */}

        <div className="row justify-content-center">
          {nft_data.slice(0, 3).map((item) => (
            <div key={item.id} className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
              <NftItemBox item={item} targetLink={targetLink} buttonText={buttonText}/> {/* Передаем targetLink */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NftItemArea;