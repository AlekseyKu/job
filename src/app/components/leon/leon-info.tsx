import React from 'react';
import Image from 'next/image';
import Dots from '../svg/dots';
import bg from '@/assets/img/bg/team_details_bg.jpg';
import s_details_img from '@/assets/img/others/services_details.jpg';
import s_details_img_2 from '@/assets/img/others/services_details01.jpg';
import s_details_img_3 from '@/assets/img/others/services_details02.jpg';

// service images
const leon_service_items:{
  id: number;
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    id:1,
    icon:'flaticon-diamond',
    title:'Year of establishment',
    desc:'2008'
  },
  {
    id:2,
    icon:'flaticon-checked',
    title:'The license',
    desc:'Kahnawake Gaming Commission and the Government of Curacao'
  },
  {
    id:3,
    icon:'flaticon-swords',
    title:'Quantity of Games',
    desc:'650+'
  },
  {
    id:4,
    icon:'flaticon-chess',
    title:'Type of games',
    desc:'Slots, bingo, live games and sports betting'
  },
  {
    id:5,
    icon:'flaticon-settings-1',
    title:'Support Service',
    desc:'Live chat, FAQ'
  },
  {
    id:6,
    icon:'flaticon-wallet',
    title:'Payment methods',
    desc:'Skrill, Bitcoin (BTC), Visa, MasterCard, Cryptocurrency'
  },
 
  {
    id:7,
    icon:'flaticon-worldwide',
    title:'Supported Languages',
    desc:'English, Russian, German, Portuguese, Spanish, French, Turkish + 4 more'
  },
  {
    id:8,
    icon:'flaticon-import',
    title:'Minimum Deposit',
    desc:'€10'
  },
];

const ServiceDetailsArea = () => {
  const imgStyle = {width:'100%',height:'auto'}
  return (
    <>
    <section className="services__details-area section-pt-120 section-pb-120" style={{backgroundImage:`url(${bg.src})`}}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="team__details-content">
                        <span className="sub-title">Leon Casino [2024]</span>
                        <h2 className="title">Play and win only at the best place</h2>
                        <p> If you’re thinking of gambling online, you might be looking for a reliable casino to meet your needs. One of the top options is Leon Casino, a unique gambling site with a good variety of games and attractive bonuses. </p>
                        <blockquote className="team__details-quote">
                            <p> All our players have the chance to enjoy a seamless gambling experience, whether they are spinning slots or betting on sporting events. We offer an attractive bonus section for all players to take advantage of. Mobile compatibility and banking methods are top quality. Let’s take a closer look. </p>
                            <cite>PR Director <span style={{ color: '#45F882'}}>Nina Podgornova</span></cite>
                        </blockquote>

                        <div className="row align-items-end align-items-xl-start section-pt-120">
                            <div className="col-lg-12">
                                <div className="text-start mb-65">
                                    <h2 className="title">About Leon Casino</h2>
                                    <p> Founded in 2008, Leon Casino is owned by Moonlite N.V. and is fully licensed and regulated. We hold licenses from the Kahnawake Gaming Commission and Government of Curacao. Our casino offers an impressive collection of over 600 games, powered by leading developers.</p>
                                    <p> At Leon, we offer convenient banking methods, which include debit and credit cards, e-wallets and cryptocurrency. The minimum deposit and withdrawal amount is €10. New and current players can win match bonuses, cashbacks, and loyalty rewards. </p>
                                </div>
                                <div className="leon_info__wrapper">
                                {leon_service_items.map((item,i) => (
                                    <div key={item.id} className="services__item">
                                        <div className="services__icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="services__content">
                                            <h4 className="title">{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div> 
                      
                        <h2 className="title section-pt-120">Security and Licenses of Leon Casino</h2>
                        <p> Leon Casino holds two licenses from the Kahnawake Gaming Commission and the Government of Curacao. Our Curacao eGaming license number is HE424890. This shows that we are a legit online casino. </p>
                        <p> We focus on keeping player information safe with the SSL encryption, which protects personal information and private transactions. With the two-factor authentication, you can protect your account. Our players can also set a pin for extra account protection.  </p>


                        <h2 className="title section-pt-120">Bonuses and Promotions</h2>
                        <p> All the players at Leon Casino are constantly engaged with the exciting bonuses. Whether you want to win bonuses for your casino games or sports betting, there’s something for everyone.   </p>
                        <p> After winning the welcome bonus, players can take part in other promotions, like the slot offers, free spins and free bets, jackpots, cashbacks, and loyalty offers. Make sure you follow the terms and conditions of each bonus.</p>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    </>
  );
};

export default ServiceDetailsArea;