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

const tournament_data: ITournament[] = [
  {
    id: 1,
    thumb: slot1.img,
    team_name: slot1, // Слот 1 для первого турнира
    box_price: 10000,
    prize: getRandomPrize(),
    subtitle: 'SLOTS',
    title: 'of weekly',
    places: 3,
    live_link: 'https://www.twitch.tv/videos/1726788358',
    status: 'Online',
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
    team_name: slot2, // Слот 2 для второго турнира
    box_price: 50000,
    prize: getRandomPrize(),
    subtitle: 'JACKPOT',
    title: 'Lucky players',
    places: 3,
    live_link: 'https://www.twitch.tv/videos/1726788358',
    status: 'Online',
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
    team_name: slot3, // Слот 3 для третьего турнира
    box_price: 25000,
    prize: getRandomPrize(),
    subtitle: 'SLOTS',
    title: 'of month',
    places: 3,
    live_link: 'https://www.twitch.tv/videos/1726788358',
    status: 'Online',
    list_items: getRandomPlayers(3).map((player, index) => ({
      id: index + 1,
      img: player.img,
      name: player.name,
      price: 25000 - index * 2500,
    })),
  },
];

export default tournament_data;
