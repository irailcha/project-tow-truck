import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index:999;
background-color: ${({ theme }) => theme.colors.secondary};
padding: 10px 0;
border-bottom: 1px solid #8b8c89;

  @media (min-width: 769px) and (max-width: 1024px) {
  padding: 8px 0;
}
  /* Мобільні телефони */
@media (max-width: 375px) {
  padding: 7px 0;
}
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;

  @media (min-width: 769px) and (max-width: 1024px) {
   padding: 0 40px;
}

  @media (min-width: 376px) and (max-width: 768px) {
  padding: 0 20px;
  flex-direction: column;
  gap: 15px
}
    /* Мобільні телефони */
@media (max-width: 375px) {
  padding: 0 15px;
}
`

export const HeaderTtitle = styled.h1`
font-family: 'Gatsby Normal';
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

    @media (min-width: 769px) and (max-width: 1024px) {
   font-size: 33px;
}
    @media (min-width: 376px) and (max-width: 768px) {
    font-size: 28px;
}
        /* Мобільні телефони */
@media (max-width: 375px) {
  font-size: 24px;
}
`

export const HeaderContacts = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;

`
export const HeaderSocial = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px; 

  @media (max-width: 768px) {
    gap: 5px; 
  }
`;


export const HeaderElement = styled.li`
  color: ${({ theme }) => theme.colors.text};
`

export const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 8px;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  transition: all 0.3s ease;

  svg {
    font-size: 30px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent2};
    background-color: ${({ theme }) => theme.colors.text};

    svg {
      color: ${({ theme }) => theme.colors.accent2};
    }
  }
`; 



export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  list-style-type: none;
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
  padding: 10px 15px;
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