'use client';
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

// Интерфейс для свойств компонента
interface EditorInfoProps {
  editorInfo: string; // Поле для данных из CKEditor
  titleMain: string;
}

const EditorInfo: React.FC<EditorInfoProps> = ({ editorInfo, titleMain }) => {
  const [content, setContent] = useState<string>('');

  // Обработка HTML для добавления атрибута loading="lazy" для изображений
  const handleLazyLoadImages = (html: string) => {
    const options = {
      replace: (domNode: any) => {
        if (domNode.name === 'img') {
          // Добавляем атрибут loading="lazy"
          const { srcset, ...attribs } = domNode.attribs || {};
          
          return (
            <img
              {...attribs}
              srcSet={srcset}
              loading="lazy"
            />
          );
        }
      },
    };

    return parse(html, options);
  };

  // Получение данных CKEditor из Strapi при загрузке компонента
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
              {/* Парсинг HTML-кода и добавление lazy-loading для изображений */}
              {content ? handleLazyLoadImages(content) : <p>Загрузка данных...</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorInfo;
