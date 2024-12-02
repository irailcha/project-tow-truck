import React from "react";
import { Outlet } from "react-router-dom";
import {
  Page,
  ServicesList,
  ServicesForMobile,
  StyledParagraph
} from "./Services.style";
import Emergancy from "../../components/Emergancy/Emergancy";
import Accompanying from "../../components/Accompanying/Accompanying";
import Special from "../../components/Special/Special";
import ServicesListComponent from "../../components/ServicesListComponent/ServicesListComponent";

const Services = () => {
  return (
    <section className="section">
      <div className="container">
    <Page>
      <ServicesList>
        {/* Терміновий евакуатор */}
        <Emergancy/>

        {/* Попутній евакуатор */}
        <Accompanying/>

        {/* Перегон авто за кордон */}
        <Special/>
        </ServicesList>

        <ServicesForMobile>     
        <StyledParagraph>
  У нас ви можете знайти будь-які послуги з транспортування. 
  Для ознайомлення з деталями клікніть на відповідне посилання нижче.
</StyledParagraph>
<ServicesListComponent/>
</ServicesForMobile>
<Outlet />
    </Page>
    </div>
    </section>
  );
};

export default Services;
