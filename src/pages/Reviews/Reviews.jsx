import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Reviews.style';
import { SwiperCard } from './Reviews.style';


const Reviews = () => {
  const swiperRef = useRef(null);



  return (
    <section className="section">
      <div className="container">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            575: { slidesPerView: 1, spaceBetween: 10 }, 
            768: { slidesPerView: 3, spaceBetween: 10 },
            1280: { slidesPerView: 4, spaceBetween: 15 }, 
          }}
        >
        
            <SwiperSlide >
              <SwiperCard>
              <p style={{color:"black"}}>Тут буде відгук</p>
              </SwiperCard>
            </SwiperSlide>
            <SwiperSlide >
              <SwiperCard>
              <p style={{color:"black"}}>Тут буде відгук</p>
              </SwiperCard>
            </SwiperSlide>
            <SwiperSlide >
              <SwiperCard>
              <p style={{color:"black"}}>Тут буде відгук</p>
              </SwiperCard>
            </SwiperSlide>
            <SwiperSlide >
              <SwiperCard>
              <p style={{color:"black"}}>Тут буде відгук</p>
              </SwiperCard>
            </SwiperSlide>
            <SwiperSlide >
              <SwiperCard>
              <p style={{color:"black"}}>Тут буде відгук</p>
              </SwiperCard>
            </SwiperSlide>
            <SwiperSlide >
              <SwiperCard>
              <p style={{color:"black"}}>Тут буде відгук</p>
              </SwiperCard>
            </SwiperSlide>
            <SwiperSlide >
              <SwiperCard>
                <p style={{color:"black"}}>Тут буде відгук</p>
              </SwiperCard>
            </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
