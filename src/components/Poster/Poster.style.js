import styled from 'styled-components';

export const PosterContainer = styled.div`
  position: relative;
  max-height: 740px;
  width: 100%;
  overflow: hidden;
  padding-top: 120px;
  
  .poster-image {
    object-fit: cover; 
    object-position: center; 
  }

  @media (min-width: 576px) and (max-width: 1024px) {
    padding-top: 77px;
  }

  @media (max-width: 575px) {
    padding-top: 95px;
    margin-bottom: 30px;
  }
`;

export const PosterTitle = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 10px;
  font-size: 2.5rem; 
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
    font-size: 3rem; 
    padding: 0 20px;
  }

  @media (min-width: 1025px) {
    font-size: 4rem; 
    padding: 0 150px;
  }

  @media (max-width: 575px) {
    font-size: 1.2rem; 
    padding: 0 5px;
  }
`;
