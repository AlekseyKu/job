'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/img/logo/logo.svg';
import icon_1 from '@/assets/img/icons/social_icon01.png';
import icon_2 from '@/assets/img/icons/social_icon02.png';
import icon_3 from '@/assets/img/icons/social_icon03.png';
import icon_4 from '@/assets/img/icons/social_icon04.png';
import payment from '@/assets/img/others/payment_card.png';

interface FooterProps {
  logo: { url: string; width: number; height: number }; // Объект для single media
  footerText: string;
  socialTitle: string;
  footerLinksTitle: string;
}

const httpAddress = "http://62.84.182.126:1337";

const Footer: React.FC<FooterProps> = ({ logo, footerText, socialTitle, footerLinksTitle }) => {
  const imgUrl = logo?.url ? `${httpAddress}${logo.url}` : '/default-logo.png'; // Проверяем наличие URL

  return (
    <footer className="footer-style-one">
      <div className="footer__top-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7">
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
                <div className="footer-text">
                  <p className="desc">{footerText}</p>
                  <p className="social-title">{socialTitle}<span> <i className="fas fa-angle-double-right"></i></span></p>
                  <div className="footer-social">
                    <Link href="https://leon1-casino.com/go"><Image src={icon_1} alt="iocn" width={30} height={30} /></Link>
                    <Link href="https://leon1-casino.com/go"><Image src={icon_2} alt="iocn" width={30} height={30} /></Link>
                    <Link href="https://leon1-casino.com/go"><Image src={icon_3} alt="iocn" width={30} height={30} /></Link>
                    <Link href="https://leon1-casino.com/go"><Image src={icon_4} alt="iocn" width={30} height={30} /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">{footerLinksTitle}</h4>
                <ul className="list-wrap menu">
                  <li><Link href="https://leon1-casino.com/go">All NFTs</Link></li>
                  <li><Link href="https://leon1-casino.com/go">Gaming</Link></li>
                  <li><Link href="https://leon1-casino.com/go">Product</Link></li>
                  <li><Link href="https://leon1-casino.com/go">Social Network</Link></li>
                  <li><Link href="https://leon1-casino.com/go">Domain Names</Link></li>
                  <li><Link href="https://leon1-casino.com/go">Collectibles</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">Supports</h4>
                <ul className="list-wrap menu">
                  <li><Link href="https://leon1-casino.com/go">Setting & Privacy</Link></li>
                  <li><Link href="https://leon1-casino.com/go">Help & Support</Link></li>
                  <li><Link href="https://leon1-casino.com/go">Live Auctions</Link></li>
                  <li><Link href="https://leon1-casino.com/go">Item Details</Link></li>
                  <li><Link href="https://leon1-casino.com/go">24/7 Supports</Link></li>
                  <li><Link href="https://leon1-casino.com/go">Our News</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="footer-widget">
                <h4 className="fw-title">Newsletter</h4>
                <div className="footer-newsletter">
                  <p>Subscribe our newsletter to get our latest update & newsconsectetur</p>
                  <form action="#" className="footer-newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit"><i className="flaticon-paper-plane"></i></button>
                  </form>
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
                <p>Copyright © {new Date().getFullYear()} All Rights Reserved <span>Leon</span></p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="copyright__card text-center text-md-end">
                <Image src={payment} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;