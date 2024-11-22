import React from "react";
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
  ModalButton} from './Header.style'

const Header = () => {


  return (
    <>
      <HeaderContainer>
        <Container>
          <HeaderTtitle>Евакуатор 24/7</HeaderTtitle>
          <HeaderContacts>
            <HeaderElement>
              <HeaderLink href="tel:+380663614503">
                <IoIosPhonePortrait /> +38 066 361 45 03
              </HeaderLink>
            </HeaderElement>
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
          </HeaderContacts>
        </Container>
      </HeaderContainer>
    </>
  );
};
export default Header