import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index:999;
background-color: ${({ theme }) => theme.colors.accent};
padding: 10px 0;
border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
 @media (min-width: 576px) and (max-width: 1076px) {
   padding: 8px 0;
  }

  @media (max-width: 575px) {
      padding: 7px 0;

  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;




  @media (max-width: 575px) {
    flex-direction: row;
  }
`

export const HeaderTitle = styled(Link)`
display: inline;

  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 576px) and (max-width: 1076px) {
   font-size: 28px;
  }

  @media (max-width: 575px) {
  font-size: 20px;
align-self: start;
  }
`

export const MenuButton=styled.button`
display: none;

@media (max-width: 1076px) {
position: relative;
display: flex;
align-items: center;
gap: 8px;
font-weight: 700;
font-size: 1.5em;
color: ${({ theme }) => theme.colors.primary};
transition: opacity 0.3s ease, transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
}
`


export const HeaderFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  gap: 40px;
  @media (max-width: 1076px) {
    flex-direction: row; 
    gap: 80px;

  }

  @media (max-width: 575px) {
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: stretch;
  gap: 10px;
  
  }

`;
