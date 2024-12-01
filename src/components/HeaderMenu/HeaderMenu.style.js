import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const MenuContainer=styled.nav`
display: block;
width: 65%;
  @media (max-width: 1076px) {
display: none;
  }
`

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  flex-wrap: wrap; 

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

export const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text}; 
  cursor: pointer;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: block;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
  padding: 10px 15px;
  border-radius: 5px; 

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.text}; 
    background-color: ${({ theme }) => theme.colors.primary}; 
    box-shadow: 0 4px 8px rgba(0, 87, 163, 0.3); 
  }
`;


