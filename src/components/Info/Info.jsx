import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Info.style';
import { ImageThumb, InfoSection } from './Info.style';
import img1 from '../../images/swiper/IMG_0823.jpeg';
import img2 from '../../images/swiper/IMG_1045.jpeg';
import img3 from '../../images/swiper/IMG_3897 (2).jpeg';
import img4 from '../../images/swiper/IMG_6746.jpeg';
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
  <SwiperSlide><img src={img1} alt="foto1" width={300} /></SwiperSlide>
  <SwiperSlide><img src={img2} alt="foto2" width={300} /></SwiperSlide>
  <SwiperSlide><img src={img3} alt="foto3" width={300} /></SwiperSlide>
  <SwiperSlide><img src={img4} alt="foto4" width={300} /></SwiperSlide>
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
