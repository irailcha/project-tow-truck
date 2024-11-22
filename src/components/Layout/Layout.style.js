import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

export const MenuContainer = styled.nav`
  background-color: #ffffff;
  padding: 20px 60px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Легке затемнення для розділення меню */
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px; 


`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 10px 15px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  &:hover,
  &.active {
    color: #ffffff;
    background-color: #0057a3;
    box-shadow: 0 4px 8px rgba(0, 87, 163, 0.3); 
    border-radius: 5px;
  }
`;
