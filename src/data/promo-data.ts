import { StaticImageData } from 'next/image';


import promo_1 from '@/assets/img/promo/1-167@x2.webp'
import promo_2 from '@/assets/img/promo/978x720+(2)-5@x2.webp'
import promo_3 from '@/assets/img/promo/978x720-1806@x2.webp'

import avatar_1 from '@/assets/img/nft/nft_avatar01.png';
import avatar_2 from '@/assets/img/nft/nft_avatar02.png';
import avatar_3 from '@/assets/img/nft/nft_avatar03.png';


export interface PromoTypes {
    id: number;
    img: StaticImageData;
    title: string;
    subtitle: string;
    creator: StaticImageData;
    creator_name: string;
    eth: string;
    trending?: boolean;
  }

const promo_data = [
    // trending
    {
        id:101,
        img: promo_1, 
        title: 'Cashback 10% every day',
        subtitle: 'Spin your favorite slots without worries – we`ll give you back up to $500!',
        creator:avatar_1,
        creator_name:'Jonyk',
        eth:'up to 500',
        trending:true,
      },
      {
        id:102,
        img: promo_2,
        title: 'Become richer, in the flow of luck!',
        subtitle: '$30,000 in prizes in a new mind-blowing promotion!',
        creator:avatar_2,
        creator_name:'Malabara',
        eth:'30 000',
        trending:true,
      },
      {
        id:103,
        img: promo_3, 
        title: 'Crazy Roulette',
        subtitle: 'Your chance to become the king of roulette and get your share of the $100,000 prize pool!',
        creator:avatar_3,
        creator_name:'Hala Hoop',
        eth:'100 000',
        trending:true,
      },
];

export default promo_data