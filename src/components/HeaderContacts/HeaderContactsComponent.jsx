import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import './HeaderContactsComponent.style';
import { 
  HeaderContactsContainer,
  HeaderElement, 
  HeaderLink,
  HeaderSocialList
 } from './HeaderContactsComponent.style'


const HeaderContactsComponent=()=>{


  return(
    <HeaderContactsContainer>
    <HeaderElement>            
      <HeaderLink href="tel:+380663614503">
        <IoIosPhonePortrait /> +38 066 361 45 03
      </HeaderLink>           
    </HeaderElement>
    <HeaderSocialList>
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
   </HeaderSocialList>
  </HeaderContactsContainer>
  )
}


export default HeaderContactsComponent;