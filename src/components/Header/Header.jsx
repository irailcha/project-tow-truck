import React from "react";
import { NavLink} from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import  './Header.style'
import {
  HeaderContainer, 
  Container, 
  HeaderContacts, 
  HeaderTtitle, 
  HeaderElement, 
  HeaderLink,
 MenuList, MenuLink, MenuItem,
 HeaderSocial
} from './Header.style'

const Header = () => {


  return (
    <>
      <HeaderContainer>
        <Container>
          <HeaderTtitle>Евакуатор 24/7</HeaderTtitle>
          <nav>
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
    </nav>
          <HeaderContacts>
          
            <HeaderElement>            
              <HeaderLink href="tel:+380663614503">
                <IoIosPhonePortrait /> +38 066 361 45 03
              </HeaderLink>           
            </HeaderElement>
            <HeaderSocial>
            <HeaderElement>
              <HeaderLink href="tel:+380663614503">
                <FaWhatsapp />
              </HeaderLink>
            </HeaderElement>
            <HeaderElement>
              <HeaderLink href="tel:+380663614503">
                <FaTelegram />
              </HeaderLink>
            </HeaderElement>
            <HeaderElement>
              <HeaderLink href="tel:+380663614503">
                <FaViber />
              </HeaderLink>
            </HeaderElement>
           </HeaderSocial>
          </HeaderContacts>
        </Container>
      </HeaderContainer>
    </>
  );
};
export default Header