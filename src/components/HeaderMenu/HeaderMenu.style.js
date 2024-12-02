import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const MenuContainer=styled.nav`
display: block;
  @media (max-width: 1076px) {
display: none;
  }
`

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  padding: 8px 8px;
  flex-wrap: wrap; 

    @media (max-width: 1076px) {
gap: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;


export const MenuLink = styled(NavLink)`
  display: block;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text}; 
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
  
  

  &:hover,
  &.active {і
    color: ${({ theme }) => theme.colors.text}; 
    background-color: ${({ theme }) => theme.colors.primary}; 
    box-shadow: 0 4px 8px rgba(0, 87, 163, 0.3); 
  }
`;


