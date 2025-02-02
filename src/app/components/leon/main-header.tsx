'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import menu_data from "@/data/menu-data";
// import logo from '@/assets/img/logo/logo.svg';
import useSticky from "@/hooks/use-sticky";
import { usePathname } from 'next/navigation'
// import SearchPopup from "@/app/components/common/search-popup";
// import OffCanvas from "@/app/components/common/off-canvas";
// import MobileOffCanvas from "@/app/components/common/mobile-offcanvas";
// import SvgIconCom from "@/app/components/common/svg-icon-anim";
// import shape from '@/assets/img/icons/shape02.svg'

const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;

interface HeaderProps {

  logo: { url: string; height: number }; // Объект для single media
  sizeLogo: "small - 200px" | "medium - 250px" | "big - 300px";
  targetLink: string;
  buttonText: string; // Текст кнопки
  
  // borderColor?: string;
}

const Header: React.FC<HeaderProps> = ({ logo, targetLink, buttonText, sizeLogo }) => {
  const { sticky, isStickyVisible } = useSticky();
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState<boolean>(false);
  const [openMobileOffCanvas, setOpenMobileOffCanvas] = useState<boolean>(false);
  const imgUrl = logo?.url ? `${httpAddress}${logo.url}` : '/default-logo.png'; // Проверяем наличие URL


   // размер логотипа на основе пропса sizeLogo
   const getSize = (size: string) => {
    switch (size) {
      case "small - 200px":
        return { width: 200 };
      case "medium - 250px":
        return { width: 250 };
      case "big - 300px":
        return { width: 300 };
      default:
        return { width: 200 };
    }
  };

  const { width } = getSize(sizeLogo);

  return (
    <header>
      <div id="sticky-header" className={`tg-header__area transparent-header ${sticky?'tg-sticky-menu':''} ${isStickyVisible?'sticky-menu__show':''}`}>
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <Link href="/">
                      <Image 
                        src={imgUrl} 
                        alt="logo" 
                        width={width}
                        height={logo?.height || 80}
                        priority 
                      />
                    </Link>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                  </div>
                  <div className="tgmenu__action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-btn">
                        <Link href="/go" className="custom-button-header" prefetch={false}>
                          {/* <i className="flaticon-login"></i> {buttonText} */}
                          <i className="flaticon-login"></i> {buttonText}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
