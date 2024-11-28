import styled from 'styled-components'
import Poster from '../../images/Poster.jpg';

export const PosterContainer = styled.div`
  position: relative;
  height: 740px;
  background-color: #b0b0b0;
  background-image: url(${Poster});
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
`;


export const PosterTitle=styled.h1`
position: absolute;
bottom: 0;
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

