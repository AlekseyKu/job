// Top winners of the day
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { INftType } from "@/data/nft-data";

interface NftItemBoxProps {
  item: INftType;
  targetLink: string;
  buttonText: string;
  currencySymbol: string; // Символ валюты
  exchangeRate: number; // Курс валюты
}

const NftItemBox = ({ item, targetLink, buttonText, currencySymbol, exchangeRate }: NftItemBoxProps) => {
  return (        
    <div className="nft-item__box">      
      <div className="nft-item__thumb">
        <Link href={targetLink} prefetch={false}>
          <Image 
            src={item.img} 
            alt="img" 
            loading="lazy"
          />
        </Link>
      </div>
      <div className="nft-item__content">
        <h4 className="title">
          <Link href={targetLink} prefetch={false}>{item.title}</Link>
        </h4>
        <div className="nft-item__avatar">
          <div className="avatar-img">
            <Link href={targetLink} prefetch={false}>
              <Image 
                src={item.creator} 
                alt="img" 
                loading="lazy"
              />
            </Link>
          </div>
          <div className="avatar-name">
            <h5 className="name">
              <Link href={targetLink} prefetch={false}>{item.creator_name}</Link>
            </h5>
          </div>
        </div>
        <div className="nft-item__bid">
          <div className="nft-item__price">
            <p>
              {(item.eth * exchangeRate).toFixed(0)} <span className="currency">{currencySymbol}</span>
            </p>
            <Link href={targetLink} prefetch={false} className="bid-btn">
              {buttonText} 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftItemBox;
