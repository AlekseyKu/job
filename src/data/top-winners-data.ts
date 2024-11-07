import { StaticImageData } from 'next/image';
// import Image from 'next/image';
// import promo_data from './promo-data';

import nft_1 from '@/assets/img/nft/nft_img01.jpg';
import nft_2 from '@/assets/img/nft/nft_img02.jpg';
import nft_3 from '@/assets/img/nft/nft_img03.jpg';
import avatar_1 from '@/assets/img/nft/nft_avatar01.png';
import avatar_2 from '@/assets/img/nft/nft_avatar02.png';
import avatar_3 from '@/assets/img/nft/nft_avatar03.png';


// type 
export interface TopWinnersType {
  id: number;
  img: StaticImageData;
  title: string;
  subtitle: string;
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
    subtitle: "",
    creator:avatar_1,
    creator_name:'Alex Lumar',
    eth:1200
  },
  {
    id:2,
    img:nft_2,
    title:'Case Closed',
    subtitle: "",
    creator:avatar_2,
    creator_name:'Mila Vu',
    eth:1680
  },
  {
    id:3,
    img:nft_3,
    title:'Cashor Nothing',
    subtitle: "",
    creator:avatar_3,
    creator_name:'Alexandrius',
    eth:3010
  },
  {
    id:4,
    img:nft_1,
    title:'Cornelius',
    subtitle: "",
    creator:avatar_1,
    creator_name:'KAMELOT25',
    eth:1460
  },
  {
    id:5,
    img:nft_2,
    title:'Deadwood RIP',
    subtitle: "",
    creator:avatar_2,
    creator_name:'Camila Zi',
    eth:2240
  },
  {
    id:6,
    img:nft_3,
    title:'Dont Hit Plz',
    subtitle: "",
    creator:avatar_3,
    creator_name:'Filichita33',
    eth:1950
  },

  
]

export default topWinners_data;