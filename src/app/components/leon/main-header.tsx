'use client'
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
// import menu_data from "@/data/menu-data";
// import logo from '@/assets/img/logo/logo.svg';
import useSticky from "@/hooks/use-sticky";
import {usePathname} from 'next/navigation'
// import SearchPopup from "@/app/components/common/search-popup";
// import OffCanvas from "@/app/components/common/off-canvas";
// import MobileOffCanvas from "@/app/components/common/mobile-offcanvas";
// import SvgIconCom from "@/app/components/common/svg-icon-anim";
// import shape from '@/assets/img/icons/shape02.svg'

const httpAddress = process.env.NEXT_PUBLIC_URL_STRAPI;

interface HeaderProps {
  logo: { url: string; width: number; height: number }; // Объект для single media
  buttonText: string; // Текст кнопки
}

const Header: React.FC<HeaderProps> = ({ logo, buttonText }) => {
  const { sticky, isStickyVisible } = useSticky();
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState<boolean>(false);
  const [openMobileOffCanvas, setOpenMobileOffCanvas] = useState<boolean>(false);
  const imgUrl = logo?.url ? `${httpAddress}${logo.url}` : '/default-logo.png'; // Проверяем наличие URL


// const Header = ({style_2=false}:{style_2?:boolean}) => {
//   const {sticky,isStickyVisible} = useSticky();
//   const pathname = usePathname();
//   const [isSearchOpen,setIsSearchOpen] = useState<boolean>(false);
//   const [isOffCanvasOpen,setIsOffCanvasOpen] = useState<boolean>(false);
//   const [openMobileOffCanvas,setOpenMobileOffCanvas] = useState<boolean>(false);

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
                        width={logo?.width || 300} 
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
                        <Link href="https://leon1-casino.com/go" target="_blank" className="tg-border-btn">
                          <i className="flaticon-edit"></i> {buttonText}
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
