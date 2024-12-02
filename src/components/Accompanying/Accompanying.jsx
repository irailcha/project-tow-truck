import React from "react";
import '../../pages/Services/Services.style';
import {
  SectionService,
  Title,
  Paragraph,
  List,
  ListItem,
  ContactInfo,
  SectionContainer, SectionThumb} from '../../pages/Services/Services.style';
import plug_2 from '../../images/plug_2.jpg';


const Accompanying=()=>{

 return (<>
 <SectionThumb>
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
            <strong>Ми надаємо:</strong>
          </Paragraph>
          <List>
            <ListItem>
              Індивідуальний підхід — маршрут відповідно до ваших потреб
            </ListItem>
            <ListItem>
              Доступну вартість — оптимізовані витрати
            </ListItem>
            <ListItem>
              Безпеку перевезення — надійне закріплення авто
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