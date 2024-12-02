import React from "react";
import Poster from "../../components/Poster/Poster";
import './Main.style';
import {StyledBlockMain} from './Main.style';
import Info from "../../components/Info/Info";
import ServicesListComponent from "../../components/ServicesListComponent/ServicesListComponent";


const Main=()=>{

  return (
    <>
    <Poster/>
    <StyledBlockMain >
    <ServicesListComponent/>
    </StyledBlockMain>
    <Info/>
    </>
  )
}

export default Main;