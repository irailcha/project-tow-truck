import React from "react";
import '../../pages/Services/Services.style';
import {
  SectionService,
  Title,
  Paragraph,
  List,
  ListItem,
  ContactInfo,
  SectionContainer,
  SectionThumb} from '../../pages/Services/Services.style';
import plug_3 from '../../images/plug_3.jpg';



const Special=()=>{

  return(<>
  <SectionThumb>
  <Title>Спеціальні послуги: Перегон авто за кордон</Title>
         <SectionService>
          <SectionContainer>

          <Paragraph>
            Перегон авто за кордон — це професійна послуга, яка включає безпечне
            транспортування вашого автомобіля за межі України. Ми пропонуємо
            комплексний підхід для вашого спокою
          </Paragraph>
          <Paragraph>
            <strong>Що входить у послугу:</strong>
          </Paragraph>
          <List>
            <ListItem>
              Планування маршруту для швидкого та безпечного транспортування
            </ListItem>
            <ListItem>
              Підготовка документів та митних процедур
            </ListItem>
            <ListItem>
              Контроль на всіх етапах перевезення
            </ListItem>
          </List>
          <ContactInfo>
          З усіх питань звертайтесь за номером<br/>{' '}
            <a href="tel:+380663614503">+38 066 361 45 03</a>
            {" "} або соцмережі
          </ContactInfo>
          </SectionContainer>
          <div>
            <img
              src={plug_3}
              alt="plug_3"
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </div>
        </SectionService>
        </SectionThumb>
  </>
  )
}

export default Special;