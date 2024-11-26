import React from "react";
import './Services.style';
import {ServicesList, ServiceStyle} from './Services.style';


const Services =()=>{


return(
  <>
 <div className="container">
  <ServicesList>
    <ServiceStyle>
      <h2>Терміновий евакуатор</h2>
      <p>Термінова допомога у дорозі, швидкий виїзд. Ціна послуги від 1500 грн.</p>
    
    </ServiceStyle>

    <ServiceStyle>
      <h2>Попутній евакуатор</h2>
      <p>Послуги термінового евакуатора для індивідуальних запитів. Детально за телефоном або соц мережі.</p>
  
    </ServiceStyle>

    <ServiceStyle>
      <h2>Спеціальні послуги</h2>
      <p>Перегон авто за кордон. Детально за телефоном або соц мережі.</p>
    </ServiceStyle>
  </ServicesList>
</div>
  </>
)
}

export default Services;