import React from "react";
import './Poster.style';
import { PosterContainer, PosterTitle } from './Poster.style';
import poster_desktop from '../../images/poster_desktop.jpg';
import poster_tablet from '../../images/poster_tablet.jpg';
import poster_mobile from '../../images/poster_mobile.jpg';

const Poster = () => {
  return (
    <PosterContainer>
      <img 
        src={poster_desktop} 
        alt="Poster" 
        className="poster-image"
        srcSet={`${poster_mobile} 480w, ${poster_tablet} 768w, ${poster_desktop} 1024w`} 
        sizes="(max-width: 575px) 100vw, (max-width: 1024px) 75vw, 50vw"
        style={{ width: "100%", height: "auto" }}
        width="1024"
        height="768"
      />
      <PosterTitle>
        Послуги евакуатора всіх видів по місту <span>Дніпро</span> та всій Україні і за її межами
      </PosterTitle>
    </PosterContainer>
  );
};

export default Poster;
