import React, {useEffect} from "react";
import { NavLink} from "react-router-dom";
import './ModalMenu.styled';
import {ModalContainer, MenuList, MenuItem,MenuLink, } from './ModalMenu.styled';


const ModalMenu=({onClose, position })=>{

 const handleModalClose=(e)=>{
  e.stopPropagation();
  onClose();
 }

 useEffect(() => {
  document.body.style.overflow = 'hidden';

  return () => {
    document.body.style.overflow = '';

  };
}, []);

  return(

     <ModalContainer onClick={onClose} position={position}>
  <div onClick={(e) => e.stopPropagation()}>
    <MenuList>
      <MenuItem >
      <MenuLink as={NavLink} to="/" end onClick={handleModalClose}>
            Головна
          </MenuLink>
      </MenuItem>
      <MenuItem >
        <MenuLink as={NavLink} to="/services" onClick={handleModalClose}>Послуги</MenuLink>
      </MenuItem>
      <MenuItem >
        <MenuLink  as={NavLink} to="/contacts" onClick={handleModalClose}>Контакти</MenuLink>
      </MenuItem>
      <MenuItem >
        <MenuLink as={NavLink} to="/reviews" onClick={handleModalClose}>Відгуки</MenuLink>
      </MenuItem>
    </MenuList>

  </div>
</ModalContainer>

  )
}


export default ModalMenu;