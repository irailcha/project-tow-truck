import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Info.style';
import { ImageThumb, InfoSection, InfoEvacuator, InfoButton } from './Info.style';
import foto_1 from '../../images/foto1_350_jpg.jpg';
import foto_2 from '../../images/foto2_350_jpg.jpg';
import foto_3 from '../../images/foto3_350_jpg.jpg';
import foto_4 from '../../images/foto4_350_jpg.jpg';
import foto_1_webp from '../../images/foto1_350_webp.webp';
import foto_2_webp from '../../images/foto2_350_webp.webp';
import foto_3_webp from '../../images/foto3_350_webp.webp';
import foto_4_webp from '../../images/foto4_350_webp.webp';

const Info = () => {
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
            <SwiperSlide>
              <picture>
                <source srcSet={foto_1_webp} type="image/webp" />
                <source srcSet={foto_1} type="image/jpeg" />
                <img src={foto_1} alt="Евакуатор фото 1" width="350" height="320" loading="lazy" />
              </picture>
            </SwiperSlide>
            <SwiperSlide>
              <picture>
                <source srcSet={foto_2_webp} type="image/webp" />
                <source srcSet={foto_2} type="image/jpeg" />
                <img src={foto_2} alt="Евакуатор фото 2" width="350" height="320" loading="lazy" />
              </picture>
            </SwiperSlide>
            <SwiperSlide>
              <picture>
                <source srcSet={foto_3_webp} type="image/webp" />
                <source srcSet={foto_3} type="image/jpeg" />
                <img src={foto_3} alt="Евакуатор фото 3" width="350" height="320" loading="lazy" />
              </picture>
            </SwiperSlide>
            <SwiperSlide>
              <picture>
                <source srcSet={foto_4_webp} type="image/webp" />
                <source srcSet={foto_4} type="image/jpeg" />
                <img src={foto_4} alt="Евакуатор фото 4" width="350" height="320" loading="lazy" />
              </picture>
            </SwiperSlide>
          </Swiper>
        </ImageThumb>
        <InfoEvacuator>
          <h2>Наші евакуатори завжди на зв'язку</h2>
          <p>Ми готові допомогти вам в будь-який момент. Завжди на сторожі вашої безпеки на дорозі.</p>
          <ul>
            <li>Швидка реакція: Ми оперативно виїжджаємо на місце аварії.</li>
            <li>Професійна допомога: Кваліфіковані водії та надійне обладнання.</li>
            <li>Цілодобова підтримка: Ми працюємо без вихідних, 24/7.</li>
            <li>Доступні ціни: Прозорі умови без прихованих платежів.</li>
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
