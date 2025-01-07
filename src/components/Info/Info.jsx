import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Info.style';
import { ImageThumb, InfoSection, InfoEvacuator, InfoButton } from './Info.style';
import imagesData from '../../../public/images.json'

const Info = () => {
  const [images]=useState(imagesData)
  return (
    <div className="container">
      <InfoSection>
        <ImageThumb>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <ul>{images.map(({id, title, image})=>(<SwiperSlide key={id}>
              <img
                src={image}
                alt={title.alt}
                aria-label={title.alt}
                loading="lazy"
                maxWidth={350}
              />
              </SwiperSlide> ))}</ul>

          </Swiper>
        </ImageThumb>
        <InfoEvacuator>
          <h2>Наші евакуатори завжди на зв'язку</h2>
          <p>Ми готові допомогти вам в будь-який момент. Завжди на сторожі вашої безпеки на дорозі.</p>
          <ul>
            <li><strong>Швидка реакція</strong>: Ми оперативно виїжджаємо на місце аварії.</li>
            <li><strong>Професійна допомога</strong>: Кваліфіковані водії та надійне обладнання.</li>
            <li><strong>Цілодобова підтримка</strong>: Ми працюємо без вихідних, 24/7.</li>
            <li><strong>Доступні ціни</strong>: Прозорі умови без прихованих платежів.</li>
          </ul>
          <InfoButton to="/services" aria-label="Дізнатися більше про наші послуги">
            Дізнатися більше
          </InfoButton>
        </InfoEvacuator>
      </InfoSection>
    </div>
  );
};

export default Info;
