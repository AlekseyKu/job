'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

import logo from '@/assets/img/logo/logo.svg';
import icon_1 from '@/assets/img/icons/social_icon01.png';
import icon_2 from '@/assets/img/icons/social_icon02.png';
import icon_3 from '@/assets/img/icons/social_icon03.png';
import icon_4 from '@/assets/img/icons/social_icon04.png';
import payment from '@/assets/img/others/payment_card.png';

interface FooterProps {
  logo: { url: string; width: number; height: number };
  footerText: string;
  socialTitle: string;
  targetLink: string;
  siteName: string;

}

const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;
// const httpAddress = "http://62.84.182.126/"


// async function getSeoMetaTagsData() {
//   try {
//     const res = await axios.get(`${httpAddress}/api/all-sites?populate=*`);
//     const SeoMetaTagData = res.data.data[0];
//     return {
//       brandName: SeoMetaTagData?.brandName || 'Default Title',
//       description: SeoMetaTagData?.description || 'Default description',
//     };
//   } catch (error) {
//     console.error("Ошибка при получении данных для SeoMetaTags из Strapi:", error);
//     return {
//       brandName: 'Fallback Title',
//       description: 'Fallback description',
//     };
//   }
// }

const Footer: React.FC<FooterProps> = ({ logo, footerText, targetLink, siteName, socialTitle }) => {
  const [seoData, setSeoData] = useState<{ brandName: string; description: string }>({
    brandName: 'Default Brand',
    description: footerText,
  });

  // useEffect(() => {
  //   const fetchSeoData = async () => {
  //     const data = await getSeoMetaTagsData();
  //     setSeoData(data);
  //   };
  //   fetchSeoData();
  // }, []);

  const imgUrl = logo?.url ? `${httpAddress}${logo.url}` : '/default-logo.png';

  return (
    <footer className="footer-style-one">
      <div className="footer__top-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="footer-widget">
                
                <div className="footer-text">
                  <p className="social-title">
                    {socialTitle}
                    <span> <i className="fas fa-angle-double-right"></i></span>
                  </p>
                  <div className="footer-social">
                    <Link href="/go" prefetch={false}><Image src={icon_1} alt="icon" width={30} height={30} /></Link>
                    <Link href="/go" prefetch={false}><Image src={icon_2} alt="icon" width={30} height={30} /></Link>
                    <Link href="/go" prefetch={false}><Image src={icon_3} alt="icon" width={30} height={30} /></Link>
                    <Link href="/go" prefetch={false}><Image src={icon_4} alt="icon" width={30} height={30} /></Link>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="footer-widget">
                <div className="footer-logo logo">
                  <Link href="/">
                    <Image
                      src={imgUrl}
                      alt="logo"
                      width={logo?.width || 300}
                      height={logo?.height || 80}
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>         


            <div className="col-xl-4 col-lg-12 col-md-12" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
              <div className="footer-widget" style={{ textAlign: 'right' }}>
                <div className="footer-text" style={{ margin: 0 }}>
                  <p className="desc">{footerText}</p>                                  
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
      <div className="copyright__wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="copyright__text">
                <p>
                  Copyright © {new Date().getFullYear()} All Rights Reserved <span>{siteName}</span>
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="copyright__card text-center text-md-end">
                <Link href="/go" prefetch={false}><Image src={payment} alt="payment"/></Link>
                {/* <Image src={payment} alt="img" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
