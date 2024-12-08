import React from 'react';
import './HotButton.style';
import {ButtonStyle} from './HotButton.style';
import { FaPhone } from "react-icons/fa";

const HotButton=()=>{


  return(

    <>
<ButtonStyle href="tel:+380663614503" aria-label="Подзвонити +38 066 361 45 03"><FaPhone /></ButtonStyle>
    </>
  )
}

export default HotButton;