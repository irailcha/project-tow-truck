import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import './Footer.style';
import {FooterContainer, FooterContacts} from './Footer.style'


const Footer=()=>{

  return (
    <FooterContainer>
       <FooterContacts>
            <li>
              <a href="tel:+3800000000">
                <IoIosPhonePortrait /> +38 000 000 00 00
              </a>
            </li>
            <li>
              <a href="tel:+3800000000">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href="tel:+3800000000">
                <FaTelegram />
              </a>
            </li>
            <li>
              <a href="tel:+3800000000">
                <FaViber />
              </a>
            </li>
          </FooterContacts>
      
    </FooterContainer>
  )
}

export default Footer