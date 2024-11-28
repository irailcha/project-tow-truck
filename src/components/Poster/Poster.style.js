import styled from 'styled-components'
import poster_desktop from '../../images/poster_desktop.jpg';
import poster_tablet from '../../images/poster_tablet.jpg';
import poster_mobile from '../../images/poster_mobile.jpg';

export const PosterContainer = styled.div`
  position: relative;
  height: 740px;
  background-color: #b0b0b0;
  background-image: url(${poster_desktop});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 1;
  }

@media (min-width: 576px) and (max-width: 1024px) {
  background-image: url(${poster_tablet});
}
@media (max-width: 575px) {
  background-image: url(${poster_mobile});
}
`;


export const PosterTitle = styled.h1`
  position: absolute;
  bottom: 0;
  padding: 0px 150px;
  font-size: 58px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;
  line-height: 1.4;
  z-index: 3;

  span {
    color: #0057a3;
    font-weight: bold;
  }

  @media (min-width: 576px) and (max-width: 1024px) {
    font-size: 48px;
    padding: 0 50px;
  }

  @media (max-width: 575px) {
    font-size: 36px;
    padding: 0 20px;
    line-height: 1.6;
  }
`;


