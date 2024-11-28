import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ModalContainer=styled.div`
 position: absolute;
  top: ${({ position }) => (position ? `${position.top}px` : "0")};
  left: ${({ position }) => (position ? `${position.left}px` : "0")};
  transform: translateY(0); 
  transform: translateX(-25%); 
  padding: 10px 0 ;
  width: 150px;
  background-color: ${({ theme }) => theme.colors.text}; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &.active {
    transform: translateY(0) translateX(-25%); 
    opacity: 1;
  }
`

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column; 
  align-items: center;
 gap: 10px;
  padding: 0;
  margin: 0;
  flex-wrap: wrap; 
  overflow-x: auto; 

`;

export const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary}; 
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


