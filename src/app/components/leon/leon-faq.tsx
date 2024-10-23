'use client'
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import React,{useState} from 'react';
import s_1_img from '@/assets/img/others/services_img01.jpg';
import s_2_img from '@/assets/img/others/services_img02.jpg';
import s_3_img from '@/assets/img/others/services_img03.jpg';
import s_4_img from '@/assets/img/others/services_img04.jpg';

// service images
const service_images:StaticImageData[] = [s_1_img,s_2_img,s_3_img,s_4_img];
// faq data type 
type IFaq = {
  id: string;
  active?: boolean;
  title: string;
  desc: string;
} 
// faq data 
const faq_data:IFaq[] = [
  {
    id:'one',
    active:true,
    title:'Is Leon Casino legit?',
    desc:'We are fully registered with the Kahnawake Gaming Commission and the Government of Curacao. This makes our site a legit casino for all players'
  },
  {
    id:'two',
    title:'How can I contact customer service at Leon Casino?',
    desc:'To contact customer service, you click on the green icon on the bottom-right corner of the page. Then, select the ‘Message’ button to talk to the support bot'
  },
  {
    id:'three',
    title:'What is the minimum deposit at Leon Casino?',
    desc:'The minimum deposit is €10. This applies to all the banking methods'
  },
  {
    id:'four',
    title:'How can I win loyalty points at Leon Casino?',
    desc:'We offer a loyalty program for casino and sports betting. The loyalty program requires you to play online slots or bet on sports and receive points, known as Leons'
  },
  {
    id:'five',
    title:'How can I make deposits at Leon Casino?',
    desc:'Log into your account and click on the Deposit option. Then, select your preferred method, input the amount, and complete the deposit process'
  },
]

const FaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleMouseOver = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseOut = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className="faq-area">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-12">
                <div className="faq__content-wrap">
                    <div className="section__title text-start">
                        <span className="sub-title tg__animate-text">Get your answer</span>
                        <h3 className="title">Frequently asked questions</h3>
                        {/* <p>Lorem ipsum do lor sit amet, consteur adipiscing Duis elementum <br/> sollicitudin is yaugue euismods.</p> */}
                    </div>
                    <div className="faq__wrapper">
                        <div className="accordion" id="accordionExample">
                          {faq_data.map((item,i) => (
                            <div key={i} className="accordion-item" onClick={() => handleMouseOver(i)}>
                                <h2 className="accordion-header" id={`heading-${item.id}`}>
                                    <button className={`accordion-button ${item.active?'':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${item.id}`} aria-expanded={item.active?'true':'false'} aria-controls={`collapse-${item.id}`}>
                                       <span className="count">{i+1}</span> {item.title}
                                    </button>
                                </h2>
                                <div id={`collapse-${item.id}`} className={`accordion-collapse collapse ${item.active?'show':''}`} aria-labelledby={`heading-${item.id}`} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-lg-6">
                <div className="services__images">
                {service_images.map((s,i) => (
                    <div key={i} className={`services__images-item ${activeIndex === i ? "active" : ""}`}>
                        <Image src={s} alt="img" style={{width:'100%',height:'100%'}} />
                        <Link href="/service-details" className="services__link">
                            <i className="flaticon-next"></i>
                        </Link>
                    </div>
                  ))}
                </div>
            </div> */}
        </div>
    </div>
</section>
  );
};

export default FaqArea;