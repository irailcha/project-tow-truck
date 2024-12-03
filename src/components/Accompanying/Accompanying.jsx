import React from "react";
import { useNavigate } from "react-router-dom";
import '../../pages/Services/Services.style';
import { FaArrowLeft } from "react-icons/fa";
import {
  SectionService,
  Title,
  Paragraph,
  List,
  ListItem,
  ContactInfo,
  SectionContainer, SectionThumb, BtnNavigate} from '../../pages/Services/Services.style';
import plug_2 from '../../images/plug_2.jpg';


const Accompanying=()=>{
const navigate=useNavigate();


 return (
 <>
 <SectionThumb>
  <BtnNavigate onClick={()=> navigate('/')}> <FaArrowLeft />{" "}На головну</BtnNavigate>

           <Title>Попутній евакуатор</Title>
       <SectionService>
        <div>
            <img
              src={plug_2}
              alt="plug_2"
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </div> 
        <SectionContainer>

          <Paragraph>
            Попутній евакуатор — це зручний та економічний варіант евакуації
            вашого транспортного засобу, що ідеально підходить для індивідуальних
            запитів. Послуга передбачає перевезення автомобілів за попутним
            маршрутом евакуатора
          </Paragraph>
          <Paragraph>
            Ми надаємо:
          </Paragraph>
          <List>
            <ListItem>
            <strong>Індивідуальний підхід</strong> — маршрут відповідно до ваших потреб
            </ListItem>
            <ListItem>
            <strong>Доступну вартість</strong> — оптимізовані витрати
            </ListItem>
            <ListItem>
            <strong>Безпеку перевезення</strong> — надійне закріплення авто
            </ListItem>
          </List>
          <ContactInfo>
            Деталі дізнайтесь за номером<br/>{' '}
            <a href="tel:+380663614503">+38 066 361 45 03</a>
          </ContactInfo>
          </SectionContainer>
        </SectionService>
        </SectionThumb>
 </>
 )
}

export default Accompanying;