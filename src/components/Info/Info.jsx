import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Info.style';
import { ImageThumb, InfoSection } from './Info.style';
const Info = () => {

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
  // Видалення навігації
  modules={[Autoplay, Pagination]} 
  className="mySwiper"
>
  <SwiperSlide><img src="foto1" alt="foto1" width={300} /></SwiperSlide>
  <SwiperSlide><img src="foto2" alt="foto2" width={300} /></SwiperSlide>
  <SwiperSlide><img src="foto3" alt="foto3" width={300} /></SwiperSlide>
  <SwiperSlide><img src="foto4" alt="foto4" width={300} /></SwiperSlide>
</Swiper>
      </ImageThumb>
      <div>
      <h3>Наші евакуатори завжди на зв'язку</h3>
            <p>Ми готові допомогти вам в будь-який момент. Завжди на сторожі вашої безпеки на дорозі.</p>
            <a href="/services">Дізнайтесь більше про наші послуги</a>
      </div>
      </InfoSection>
    </div>

    </section>
  );
};

export default Info;
