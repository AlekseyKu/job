'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
// import {CKEditor} from "@ckeditor/ckeditor5-react";

interface EditorInfoProps {
  editorInfo: string; // Поле для данных из CKEditor
  titleMain: string;
}

const EditorInfo: React.FC<EditorInfoProps> = ({ editorInfo, titleMain }) => {
  const [content, setContent] = useState<string>('');

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
            <div className="editor-info__H1">
              { titleMain }
            </div>
            <div className="section__content">
              {/* Парсинг и отображение HTML содержимого */}
              {content ? parse(content) : <p>Загрузка данных...</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorInfo;
