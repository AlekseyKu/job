'use client';
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import Image from "next/image";

// Интерфейс для свойств компонента
interface EditorInfoProps {
  editorInfo: string; // Поле для данных из CKEditor
  titleMain: string;
}

const EditorInfo: React.FC<EditorInfoProps> = ({ editorInfo, titleMain }) => {
  const [content, setContent] = useState<string>("");

  // Обработка HTML для оптимизации изображений через Next.js
  const handleLazyLoadImages = (html: string) => {
    const options = {
      replace: (domNode: any) => {
        if (domNode.name === "img") {
          const { src, srcset, alt, width, height, ...attribs } = domNode.attribs || {};

          // Заменяем <img> на <Image>
          return (
            <Image
              {...attribs}
              src={src} // URL изображения
              srcSet={srcset} // Исправлено с `srcset` на `srcSet`
              alt={alt || "Image"}
              width={width ? parseInt(width, 10) : 1000} // Ширина
              height={height ? parseInt(height, 10) : 334} // Высота
              loading="lazy" // Ленивая загрузка
            />
          );
        }
      },
    };

    return parse(html, options);
  };

  // Получение данных CKEditor из Strapi
  useEffect(() => {
    if (editorInfo) {
      setContent(editorInfo);
    }
  }, [editorInfo]);

  return (
    <section className="editor-info__area mb-120 mt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 col-md-12">
            <div className="editor-info__H1">{titleMain}</div>
            <div className="section__content">
              {/* Парсинг HTML-кода и замена img на Image */}
              {content ? handleLazyLoadImages(content) : <p>Загрузка данных...</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorInfo;
