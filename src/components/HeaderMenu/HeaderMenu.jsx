import React from "react";
import { NavLink} from "react-router-dom";
import './HeaderMenu.style';
import {MenuContainer,MenuList, MenuLink} from './HeaderMenu.style';


const HeaderMenu=()=>{


  return(
    <MenuContainer>
    <MenuList>
      <li >
      <MenuLink as={NavLink} to="/" end>
            Головна
          </MenuLink>
      </li>
      <li >
        <MenuLink as={NavLink} to="/services">Послуги</MenuLink>
      </li>
      <li >
        <MenuLink  as={NavLink} to="/contacts">Контакти</MenuLink>
      </li>
      <li >
        <MenuLink as={NavLink} to="/reviews">Відгуки</MenuLink>
      </li>
    </MenuList>
  </MenuContainer>
  )
}

export default HeaderMenu;