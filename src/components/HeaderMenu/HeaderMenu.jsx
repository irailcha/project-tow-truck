import React from "react";
import { NavLink} from "react-router-dom";
import './HeaderMenu.style';
import {MenuContainer,MenuList, MenuItem,MenuLink} from './HeaderMenu.style';


const HeaderMenu=()=>{


  return(
    <MenuContainer>
    <MenuList>
      <MenuItem >
      <MenuLink as={NavLink} to="/" end>
            Головна
          </MenuLink>
      </MenuItem>
      <MenuItem >
        <MenuLink as={NavLink} to="/services">Послуги</MenuLink>
      </MenuItem>
      <MenuItem >
        <MenuLink  as={NavLink} to="/contacts">Контакти</MenuLink>
      </MenuItem>
      <MenuItem >
        <MenuLink as={NavLink} to="/reviews">Відгуки</MenuLink>
      </MenuItem>
    </MenuList>
  </MenuContainer>
  )
}

export default HeaderMenu;