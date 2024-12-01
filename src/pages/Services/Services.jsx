import React from "react";
import {
  Page
} from "./Services.style";
import Emergancy from "../../components/Emergancy/Emergancy";
import Accompanying from "../../components/Accompanying/Accompanying";
import Special from "../../components/Special/Special";


const Services = () => {
  return (
    <section className="section">
      <div className="container">
    <Page>
        {/* Терміновий евакуатор */}
        <Emergancy/>

        {/* Попутній евакуатор */}
        <Accompanying/>

        {/* Перегон авто за кордон */}
        <Special/>
    </Page>
    </div>
    </section>
  );
};

export default Services;
