import React from "react";
import Link from "next/link";
import Image from "next/image";
import { INftType } from "@/data/nft-data";

interface NftItemBoxProps {
  item: INftType;
  targetLink: string; // Добавляем targetLink как проп
}

const NftItemBox = ({ item, targetLink }: NftItemBoxProps) => {
  return (        
    <div className="nft-item__box">      
      <div className="nft-item__thumb">
        <Link href={targetLink}>
          <Image src={item.img} alt="img" />
        </Link>
      </div>
      <div className="nft-item__content">
        <h4 className="title">
          <Link href={targetLink}>{item.title}</Link>
        </h4>
        <div className="nft-item__avatar">
          <div className="avatar-img">
            <Link href={targetLink}>
              <Image src={item.creator} alt="img" />
            </Link>
          </div>
          <div className="avatar-name">
            <h5 className="name">
              <Link href={targetLink}>{item.creator_name}</Link>
            </h5>
          </div>
        </div>
        <div className="nft-item__bid">
          <div className="nft-item__price">
            <p>
              {item.eth}
              <span className="currency"> $</span>
            </p>
            <Link href={targetLink} className="bid-btn">
              Play now <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftItemBox;
