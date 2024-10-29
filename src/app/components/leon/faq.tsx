'use client';
import React, { useState } from 'react';

interface FaqProps {
  pretitle: string;
  title: string;
  faqRow: Array<{ id: number; question: string; answer: string }>;
}

const FaqArea: React.FC<FaqProps> = ({ pretitle, title, faqRow }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleAccordionToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="faq__content-wrap">
              <div className="section__title text-start">
                <span className="sub-title tg__animate-text">{pretitle}</span>
                <h3 className="title">{title}</h3>
              </div>
              <div className="faq__wrapper">
                <div className="accordion" id="accordionExample">
                  {faqRow.map((item, i) => (
                    <div key={item.id} className="accordion-item">
                      <h2 className="accordion-header" id={`heading-${item.id}`}>
                        <button
                          className={`accordion-button ${activeIndex === i ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => handleAccordionToggle(i)}
                          aria-expanded={activeIndex === i ? 'true' : 'false'}
                          aria-controls={`collapse-${item.id}`}
                        >
                          <span className="count">{i + 1}</span> {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse-${item.id}`}
                        className={`accordion-collapse collapse ${activeIndex === i ? 'show' : ''}`}
                        aria-labelledby={`heading-${item.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">{item.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqArea;