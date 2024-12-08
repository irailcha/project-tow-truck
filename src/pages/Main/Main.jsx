import React from "react";
import Poster from "../../components/Poster/Poster";
import './Main.style';
import {StyledBlockMain, MainContainer} from './Main.style';
import Info from "../../components/Info/Info";
import ServicesListComponent from "../../components/ServicesListComponent/ServicesListComponent";
import HotButton from "../../components/HotButton/HotButton";


const Main=()=>{

  return (
    <MainContainer>
    <HotButton/>
    <Poster/>
    <StyledBlockMain >
    <ServicesListComponent/>
    </StyledBlockMain>
    <Info/>
    </MainContainer>
  )
}

export default Main;