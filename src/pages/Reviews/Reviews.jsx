import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Reviews.style';
import { SwiperCard } from './Reviews.style';
import screen1 from '../../images/screen1.jpg';

const Reviews = () => {
  const swiperRef = useRef(null);

  const slides = [screen1, screen1, screen1, screen1]; 

  return (
    <section className="section">
      <div className="container">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1 }, 
            1024: { slidesPerView: 2 }, 
            1280: { slidesPerView: 3 },
          }}
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <SwiperCard>
                <img src={image} alt={`review ${index + 1}`} width={300} />
              </SwiperCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
