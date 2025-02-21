import { StaticImageData } from "next/image";
import nft_1 from "@/assets/img/nft/nft_img01.jpg";
import nft_2 from "@/assets/img/nft/nft_img02.jpg";
import nft_3 from "@/assets/img/nft/nft_img03.jpg";
import nft_4 from "@/assets/img/nft/nft_img04.jpg";
import nft_5 from "@/assets/img/nft/nft_img05.jpg";
import nft_6 from "@/assets/img/nft/nft_img06.jpg";
import nft_7 from "@/assets/img/nft/nft_img07.jpg";
import creator_1 from "@/assets/img/nft/nft_avatar.png";
import avatar_1 from "@/assets/img/nft/nft_avatar01.png";
import avatar_2 from "@/assets/img/nft/nft_avatar02.png";
import avatar_3 from "@/assets/img/nft/nft_avatar03.png";

import player_data from "./players-data";
import slots_data from "./slots-data";

// ✅ Фallback-значения, если данных нет
const defaultImage = nft_1; // Используем любое изображение по умолчанию
const defaultCreator = creator_1;
const defaultName = "Unknown";

// Функция для генерации случайного box_price с шагом 5000 от 5000 до 50000
const getRandomPrize = () => {
  const min = 1000;
  const max = 3000;
  const step = 10;
  const randomStep = Math.floor(Math.random() * ((max - min) / step + 1));
  return min + randomStep * step;
};

// type
export interface INftType {
  id: number;
  img: StaticImageData;
  title: string;
  creator: StaticImageData;
  creator_name: string;
  eth: number;
  trending?: boolean;
}

const nft_data: INftType[] = [
  {
    id: 1,
    img: slots_data[1]?.img ?? defaultImage,
    title: slots_data[1]?.name ?? defaultName,
    creator: player_data[1]?.img ?? defaultCreator,
    creator_name: player_data[1]?.name ?? defaultName,
    eth: getRandomPrize(),
  },
  {
    id: 2,
    img: slots_data[2]?.img ?? defaultImage,
    title: slots_data[2]?.name ?? defaultName,
    creator: player_data[2]?.img ?? defaultCreator,
    creator_name: player_data[2]?.name ?? defaultName,
    eth: getRandomPrize(),
  },
  {
    id: 3,
    img: slots_data[3]?.img ?? defaultImage,
    title: slots_data[3]?.name ?? defaultName,
    creator: player_data[3]?.img ?? defaultCreator,
    creator_name: player_data[3]?.name ?? defaultName,
    eth: getRandomPrize(),
  },
  // trending
  {
    id: 4,
    img: slots_data[4]?.img ?? defaultImage,
    title: slots_data[4]?.name ?? defaultName,
    creator: player_data[4]?.img ?? defaultCreator,
    creator_name: player_data[4]?.name ?? defaultName,
    eth: getRandomPrize(),
    trending: true,
  },
  {
    id: 5,
    img: slots_data[5]?.img ?? defaultImage,
    title: slots_data[5]?.name ?? defaultName,
    creator: player_data[5]?.img ?? defaultCreator,
    creator_name: player_data[5]?.name ?? defaultName,
    eth: getRandomPrize(),
    trending: true,
  },
  {
    id: 6,
    img: slots_data[6]?.img ?? defaultImage,
    title: slots_data[6]?.name ?? defaultName,
    creator: player_data[6]?.img ?? defaultCreator,
    creator_name: player_data[6]?.name ?? defaultName,
    eth: getRandomPrize(),
    trending: true,
  },
  {
    id: 7,
    img: slots_data[7]?.img ?? defaultImage,
    title: slots_data[7]?.name ?? defaultName,
    creator: player_data[7]?.img ?? defaultCreator,
    creator_name: player_data[7]?.name ?? defaultName,
    eth: getRandomPrize(),
    trending: true,
  },
];

export default nft_data;
