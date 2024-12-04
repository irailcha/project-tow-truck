import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import './HeaderContactsComponent.style';
import { 
  HeaderContactsContainer,
  HeaderLink,
  HeaderSocialList
 } from './HeaderContactsComponent.style'


const HeaderContactsComponent=()=>{


  return(
    <HeaderContactsContainer>
         
      <HeaderLink href="tel:+380663614503"
      >
        +38 066 361 45 03
      </HeaderLink>           

    <HeaderSocialList>
    <li>
      <HeaderLink 
      href="https://wa.me/380663614503" 
      aria-label="Зв'язатися через WhatsApp"
      target="_blank" rel="noopener noreferrer">
        
        <FaWhatsapp />
      </HeaderLink>
    </li>
    <li>
    <HeaderLink 
            href="https://t.me/@alegha_01" 
            aria-label="Зв'язатися через Telegram"
            target="_blank" rel="noopener noreferrer"
          >
        <FaTelegram />
      </HeaderLink>
    </li>
    <li>
    <HeaderLink 
            href="viber://chat?number=%2B380663614503" 
            aria-label="Зв'язатися через Viber"
            target="_blank" rel="noopener noreferrer"
          >
        <FaViber />
      </HeaderLink>
    </li>
   </HeaderSocialList>
  </HeaderContactsContainer>
  )
}


export default HeaderContactsComponent;