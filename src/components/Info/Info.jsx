import React from "react";
import {useNavigate} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Info.style';
import { ImageThumb, InfoSection, InfoEvacuator  } from './Info.style';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
const Info = () => {
const navigate=useNavigate();

  return (
    <section className="section">
    <div className="container ">
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
  <SwiperSlide><img src={image1} alt="foto1" width={300} /></SwiperSlide>
  <SwiperSlide><img src={image2} alt="foto2" width={300} /></SwiperSlide>
  <SwiperSlide><img src={image3} alt="foto3" width={300} /></SwiperSlide>
  <SwiperSlide><img src={image4} alt="foto4" width={300} /></SwiperSlide>
</Swiper>
      </ImageThumb>
      <InfoEvacuator>
      <h3>Наші евакуатори завжди на зв'язку</h3>
            <p>Ми готові допомогти вам в будь-який момент. Завжди на сторожі вашої безпеки на дорозі.</p>
            <button onClick={()=>navigate('/services')}>Дізнатися більше</button>
      </InfoEvacuator>
      </InfoSection>
    </div>

    </section>
  );
};

export default Info;
