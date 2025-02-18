// src/data/tournament-data.ts
import { ITournament } from '@/types/tournament-type';
import player_data from '@/data/players-data';
import slots_data from '@/data/slots-data';


// Функция для выбора уникальных случайных игроков
const getRandomPlayers = (count: number) => {
  const shuffledPlayers = [...player_data].sort(() => 0.5 - Math.random());
  return shuffledPlayers.slice(0, count);
};

// Перемешиваем слоты и берем первые 3 уникальных
const getUniqueSlots = () => {
  const shuffledSlots = [...slots_data].sort(() => 0.5 - Math.random());
  return shuffledSlots.slice(0, 3);
};

// Функция для генерации случайного box_price с шагом 5000 от 5000 до 50000
const getRandomPrize = () => {
  const min = 5000;
  const max = 50000;
  const step = 5000;
  const randomStep = Math.floor(Math.random() * ((max - min) / step + 1));
  return min + randomStep * step;
};

const [slot1, slot2, slot3] = getUniqueSlots(); // Получаем три уникальных слота

// const siteData = await fetchSiteData("host")
// const { sub, title } = fetchSiteData.attributes.tournament_box;


const getTournamentData = (tournamentBoxData: { sub: string[]; title: string[]; pre: string[] }): ITournament[] => [
  {
    id: 1,
    thumb: slot1.img,
    team_name: slot1,
    box_price: 10000,
    prize: getRandomPrize(),
    subtitle: tournamentBoxData.sub[0],
    title: tournamentBoxData.title[0],
    pre: tournamentBoxData.pre[0],
    places: 3,
    status: "Online",
    list_items: getRandomPlayers(3).map((player, index) => ({
      id: index + 1,
      img: player.img,
      name: player.name,
      price: 10000 - index * 1000,
    })),
  },
  {
    id: 2,
    thumb: slot2.img,
    team_name: slot2,
    box_price: 50000,
    prize: getRandomPrize(),
    subtitle: tournamentBoxData.sub[1],
    title: tournamentBoxData.title[1],
    pre: tournamentBoxData.pre[0],
    places: 3,
    status: "Online",
    list_items: getRandomPlayers(3).map((player, index) => ({
      id: index + 1,
      img: player.img,
      name: player.name,
      price: 50000 - index * 5000,
    })),
  },
  {
    id: 3,
    thumb: slot3.img,
    team_name: slot3,
    box_price: 25000,
    prize: getRandomPrize(),
    subtitle: tournamentBoxData.sub[2],
    title: tournamentBoxData.title[2],
    pre: tournamentBoxData.pre[0],
    places: 3,
    status: "Online",
    list_items: getRandomPlayers(3).map((player, index) => ({
      id: index + 1,
      img: player.img,
      name: player.name,
      price: 25000 - index * 2500,
    })),
  },
];

export default getTournamentData;


