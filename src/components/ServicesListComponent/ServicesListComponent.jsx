import React from "react";
import './ServicesListComponent.style';
import {
  StyledServicesListForMobile,
  StyledListItem,
  StyledLink,
} from './ServicesListComponent.style';


const ServicesListComponent=()=>{

return(<>
<div className="container">
<StyledServicesListForMobile>
  <StyledListItem>
    <StyledLink to="emergancy">Терміновий евакуатор</StyledLink>
  </StyledListItem>
  <StyledListItem>
    <StyledLink to="accompanying">Попутній евакуатор</StyledLink>
  </StyledListItem>
  <StyledListItem>
    <StyledLink to="special">Перегон авто за кордон</StyledLink>
  </StyledListItem>
</StyledServicesListForMobile>
</div>
</>)

}


export default ServicesListComponent;