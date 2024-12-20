import React, { useEffect, useState } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { StyleCard, ReviewsList } from './Reviews.style';
import reviewsData from '../../../public/reviews.json';

const Reviews = () => {
  const [reviews] = useState(reviewsData);

  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'title',
      captionDelay: 250,
    });
  
    const observer = new MutationObserver(() => {
      const overlay = document.querySelector('.sl-overlay');
      if (overlay) {
        overlay.style.setProperty('background-color', 'rgba(0, 0, 0, 0.7)', 'important');
      }
  
      const wrapper = document.querySelector('.sl-wrapper');
      if (wrapper) {
        wrapper.style.setProperty('background-color', 'rgba(0, 0, 0, 0.7)', 'important');
      }
  
      const closeButton = document.querySelector('.sl-close');
      if (closeButton) {
        closeButton.style.setProperty('color', '#fff', 'important');
      }
  
      const prevButton = document.querySelector('.sl-prev');
      if (prevButton) {
        prevButton.style.setProperty('color', '#fff', 'important');
      }
  
      const nextButton = document.querySelector('.sl-next');
      if (nextButton) {
        nextButton.style.setProperty('color', '#fff', 'important');
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  
    return () => {
      observer.disconnect();
      lightbox.destroy();
    };
  }, [reviews]);
  

  const getImageUrl = (baseUrl, width) => {
    return baseUrl.replace('/upload/', `/upload/w_${width}/`);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <section className="section">
      <div className="container">
        <ReviewsList className="gallery">
          {reviews.map((review) => (
            <StyleCard key={review.id}>
              <a href={getImageUrl(review.image, isMobile ? 250 : 300)} title={review.title}>
                <img
                  src={getImageUrl(review.image, isMobile ? 250: 300)} 
                  alt={review.title}
                  loading="lazy"
                />
              </a>
            </StyleCard>
          ))}
        </ReviewsList>
      </div>
    </section>
  );
};

export default Reviews;
