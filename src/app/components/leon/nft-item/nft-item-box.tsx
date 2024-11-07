import React from "react";
import Link from "next/link";
import Image from "next/image";
import { INftType } from "@/data/nft-data";
import player_data from "@/data/players-data";



const NftItemBox = ({ item }: { item: INftType }) => {
  return (        
    <div className="nft-item__box">      
      <div className="nft-item__thumb">
        <Link href="/shop-details">
          <Image src={item.img} alt="img" />
        </Link>
      </div>
      <div className="nft-item__content">
        <h4 className="title">
          {/* <Link href="/shop-details">wolf gaming art</Link> */}
          <Link href="/shop-details">{item.title}</Link>
        </h4>
        <div className="nft-item__avatar">
          <div className="avatar-img">
            <Link href="/shop-details">
              <Image src={item.creator} alt="img" />
            </Link>
          </div>
          <div className="avatar-name">
            <h5 className="name">
              <Link href="/shop-details">{item.creator_name}</Link>
            </h5>
          </div>
        </div>
        <div className="nft-item__bid">
          <div className="nft-item__price">
            <p>
              {item.eth}
              <span className="currency"> $</span>
            </p>
            <Link href="/shop-details" className="bid-btn">
            Play now <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftItemBox;
