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
  justify-content: space-between;
  list-style-type: none;
  gap: 10px;
  padding: 0;
  margin: 0;
  flex-wrap: wrap; 
  overflow-x: auto; 

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
    color: ${({ theme }) => theme.colors.text}; 
    background-color: ${({ theme }) => theme.colors.primary}; 
    box-shadow: 0 4px 8px rgba(0, 87, 163, 0.3); 
    border-radius: 5px;
  }
`;


