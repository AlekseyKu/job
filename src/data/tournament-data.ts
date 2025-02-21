import { ITournament } from "@/types/tournament-type";
import player_data from "@/data/players-data";
import slots_data from "@/data/slots-data";
import fallbackImage from "@/assets/img/fallback-slot.webp"; // ✅ Добавляем заглушку как StaticImageData

// ✅ Фиктивный слот теперь использует `StaticImageData`
const defaultSlot = {
  id: 0,
  img: fallbackImage, // ✅ Используем StaticImageData вместо string
  name: "Default Slot",
};

// Функция для выбора уникальных случайных игроков
const getRandomPlayers = (count: number) => {
  const shuffledPlayers = [...player_data].sort(() => 0.5 - Math.random());
  return shuffledPlayers.slice(0, count);
};

// ✅ Перемешиваем слоты и гарантируем, что их всегда 3
const getUniqueSlots = () => {
  const shuffledSlots = [...slots_data].sort(() => 0.5 - Math.random());
  return [...shuffledSlots, defaultSlot, defaultSlot, defaultSlot].slice(0, 3);
};

// ✅ Функция для генерации случайного box_price с шагом 5000 от 5000 до 50000
const getRandomPrize = () => {
  const min = 5000;
  const max = 50000;
  const step = 5000;
  const randomStep = Math.floor(Math.random() * ((max - min) / step + 1));
  return min + randomStep * step;
};

const [slot1, slot2, slot3] = getUniqueSlots(); // ✅ Теперь всегда 3 слота

const getTournamentData = (tournamentBoxData: { sub: string[]; title: string[]; pre: string[] }): ITournament[] => [
  {
    id: 1,
    thumb: slot1?.img ?? defaultSlot.img, // ✅ Теперь типы `img` совпадают
    team_name: slot1 ?? defaultSlot,
    box_price: 10000,
    prize: getRandomPrize(),
    subtitle: tournamentBoxData.sub[0] ?? "No Subtitle",
    title: tournamentBoxData.title[0] ?? "No Title",
    pre: tournamentBoxData.pre[0] ?? "No Pre",
    places: 3,
    status: "Online",
    list_items: getRandomPlayers(3).map((player, index) => ({
      id: index + 1,
      img: player?.img ?? fallbackImage, // ✅ Теперь `img` всегда `StaticImageData`
      name: player?.name ?? "Unknown Player",
      price: 10000 - index * 1000,
    })),
  },
  {
    id: 2,
    thumb: slot2?.img ?? defaultSlot.img,
    team_name: slot2 ?? defaultSlot,
    box_price: 50000,
    prize: getRandomPrize(),
    subtitle: tournamentBoxData.sub[1] ?? "No Subtitle",
    title: tournamentBoxData.title[1] ?? "No Title",
    pre: tournamentBoxData.pre[0] ?? "No Pre",
    places: 3,
    status: "Online",
    list_items: getRandomPlayers(3).map((player, index) => ({
      id: index + 1,
      img: player?.img ?? fallbackImage,
      name: player?.name ?? "Unknown Player",
      price: 50000 - index * 5000,
    })),
  },
  {
    id: 3,
    thumb: slot3?.img ?? defaultSlot.img,
    team_name: slot3 ?? defaultSlot,
    box_price: 25000,
    prize: getRandomPrize(),
    subtitle: tournamentBoxData.sub[2] ?? "No Subtitle",
    title: tournamentBoxData.title[2] ?? "No Title",
    pre: tournamentBoxData.pre[0] ?? "No Pre",
    places: 3,
    status: "Online",
    list_items: getRandomPlayers(3).map((player, index) => ({
      id: index + 1,
      img: player?.img ?? fallbackImage,
      name: player?.name ?? "Unknown Player",
      price: 25000 - index * 2500,
    })),
  },
];

export default getTournamentData;
