import styled from 'styled-components'
import mainImagePoster from '../../images/designer.png';

export const PosterContainer = styled.div`
  position: relative;
  height: 600px;
  background-color: #b0b0b0;
  background-image: url(${mainImagePoster});
  background-size: cover;
  background-position: center;

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
`;


export const PosterTitle=styled.h1`
position: absolute;
bottom: 50%;
padding:0px 150px;
font-size: 58px; 
font-weight: bold; 
background-color: rgba(0, 0, 0, 0.8); 
color: #fff; 
text-align: center; 
line-height: 1.4;
 z-index: 3;
span{
color: #0057a3;}
`
export const PosterButton = styled.button`
  position: absolute;
  z-index: 33;
  padding: 10px 30px;
  font-size: 40px;
  background-color: #0057a3;
  color: #fff;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%); 
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004b8c; 
  }
`;
