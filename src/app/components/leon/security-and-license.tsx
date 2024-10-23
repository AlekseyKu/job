'use client';
import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';

interface SecurityAndLicenseProps {
  title: string;
  descriptionBlock: any; // Rich Text Block (not JSON)
  description: string;
  description2: string;
  backgroundImage: { url: string };
}

const httpAddress = "http://62.84.182.126:1337"; // Адрес для Strapi

const SecurityAndLicense: React.FC<SecurityAndLicenseProps> = ({ title, descriptionBlock, description, description2, backgroundImage }) => {
  const bgImageUrl = backgroundImage?.url ? `${httpAddress}${backgroundImage.url}` : '/default-bg.png'; // Фон по умолчанию

   // Функция для рендеринга Rich Text блока
  const renderDescriptionBlock = (block: any) => {
    return block.map((item: any, index: number) => {
      if (item.type === 'paragraph') {
        return (
          <p key={index}>
            {item.children.map((child: any, idx: number) => {
              if (child.bold) {
                return <strong key={idx}>{child.text}</strong>;
              }
              return child.text;
            })}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <section 
      className="security-license__area section-pt-120 section-pb-120" 
      style={{ backgroundImage: `url(${bgImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 col-md-12">
            <div className="section__title text-center mb-0">
              <h3 className="title">{title}</h3>
              {renderDescriptionBlock(descriptionBlock)}
              <p className="desc">{description}</p>
              <p className="desc">{description2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAndLicense;
