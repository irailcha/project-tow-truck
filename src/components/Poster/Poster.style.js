import styled from 'styled-components';

export const PosterContainer = styled.div`
  position: relative;
  max-height: 740px;
  width: 100%;
  overflow: hidden;
  padding-top: 100px;
  
  .poster-image {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    object-position: center; 
  }

  @media (min-width: 576px) and (max-width: 1024px) {
    padding-top: 77px;
  }

  @media (max-width: 575px) {
    padding-top: 80px;
  }
`;

export const PosterTitle = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0; 
  right: 0; 
  padding: 0 10px; 
  font-size: 24px; 
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;
  line-height: 1.2; 
  z-index: 3;

  span {
    color: #0057a3;
    font-weight: bold;
  }

  @media (min-width: 576px) and (max-width: 1024px) {
    font-size: 36px; 
    padding: 0 20px;
  }

  @media (min-width: 1025px) {
    font-size: 58px;
    padding: 0 150px;
  }

  @media (max-width: 575px) {
    font-size: 20px; 
    padding: 0 5px; 
  }
`;