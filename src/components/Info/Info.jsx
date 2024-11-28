import React from "react";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Info.style';
import { ImageThumb, InfoSection, InfoEvacuator } from './Info.style';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';

const Info = () => {
  const navigate = useNavigate();

  return (
    <section className="section">
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
              <SwiperSlide><img src={image1} alt="foto1" width={350} /></SwiperSlide>
              <SwiperSlide><img src={image2} alt="foto2" width={350} /></SwiperSlide>
              <SwiperSlide><img src={image3} alt="foto3" width={350} /></SwiperSlide>
              <SwiperSlide><img src={image4} alt="foto4" width={350} /></SwiperSlide>
            </Swiper>
          </ImageThumb>
          <InfoEvacuator>
            <h3>Наші евакуатори завжди на зв'язку</h3>
            <p>Ми готові допомогти вам в будь-який момент. Завжди на сторожі вашої безпеки на дорозі.</p>
            <ul>
              <li><strong>Швидка реакція:</strong> Ми оперативно виїжджаємо на місце аварії.</li>
              <li><strong>Професійна допомога:</strong> Кваліфіковані водії та надійне обладнання.</li>
              <li><strong>Цілодобова підтримка:</strong> Ми працюємо без вихідних, 24/7.</li>
              <li><strong>Доступні ціни:</strong> Прозорі умови без прихованих платежів.</li>
            </ul>
            <button onClick={() => navigate('/services')}>Дізнатися більше</button>
          </InfoEvacuator>
        </InfoSection>
      </div>
    </section>
  );
};

export default Info;
