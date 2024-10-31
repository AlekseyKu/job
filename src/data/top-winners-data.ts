import { StaticImageData } from 'next/image';
import Image from 'next/image';

import nft_1 from '@/assets/img/nft/nft_img01.jpg';
import nft_2 from '@/assets/img/nft/nft_img02.jpg';
import nft_3 from '@/assets/img/nft/nft_img03.jpg';
import nft_4 from '@/assets/img/nft/nft_img04.jpg';
import nft_5 from '@/assets/img/nft/nft_img05.jpg';
import nft_6 from '@/assets/img/nft/nft_img06.jpg';
import nft_7 from '@/assets/img/nft/nft_img07.jpg';
import creator_1 from '@/assets/img/nft/nft_avatar.png';
import avatar_1 from '@/assets/img/nft/nft_avatar01.png';
import avatar_2 from '@/assets/img/nft/nft_avatar02.png';
import avatar_3 from '@/assets/img/nft/nft_avatar03.png';



// type 
export interface TopWinnersType {
  id: number;
  img: StaticImageData;
  title: string;
  creator: StaticImageData;
  creator_name: string;
  eth: number;
  trending?: boolean;
}

const topWinners_data:TopWinnersType[] = [
  {
    id:1,
    img:nft_1,
    title:'Apache Way',
    creator:avatar_1,
    creator_name:'Alex Lumar',
    eth:1200
  },
  {
    id:2,
    img:nft_2,
    title:'Case Closed',
    creator:avatar_2,
    creator_name:'Mila Vu',
    eth:1680
  },
  {
    id:3,
    img:nft_3,
    title:'Cashor Nothing',
    creator:avatar_3,
    creator_name:'Alexandrius',
    eth:3010
  },
  {
    id:4,
    img:nft_1,
    title:'Cornelius',
    creator:avatar_1,
    creator_name:'KAMELOT25',
    eth:1460
  },
  {
    id:5,
    img:nft_2,
    title:'Deadwood RIP',
    creator:avatar_2,
    creator_name:'Camila Zi',
    eth:2240
  },
  {
    id:6,
    img:nft_3,
    title:'Dont Hit Plz',
    creator:avatar_3,
    creator_name:'Filichita33',
    eth:1950
  },
  // trending
  {
    id:101,
    img:nft_4,
    title:'Dynamite Riches Megaways',
    creator:avatar_1,
    creator_name:'Jonyk',
    eth:18400,
    trending:true,
  },
  {
    id:102,
    img:nft_5,
    title:'Gladiator Clash',
    creator:avatar_2,
    creator_name:'Malabara',
    eth:14680,
    trending:true,
  },
  {
    id:103,
    img:nft_6,
    title:'Gonzo Quest',
    creator:avatar_3,
    creator_name:'Hala Hoop',
    eth:21900,
    trending:true,
  },
  {
    id:104,
    img:nft_7,
    title:'Luck Crypto',
    creator:avatar_1,
    creator_name:'Lady Didi',
    eth:16440,
    trending:true,
  },
]

export default topWinners_data;