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
  SectionContainer,
  SectionThumb,
  BtnNavigate
} from '../../pages/Services/Services.style';
import plug_3 from '../../images/plug_3.jpg';



const Special=()=>{
const navigate = useNavigate();


  return(<>
  <SectionThumb>
  <BtnNavigate onClick={()=> navigate('/')}><FaArrowLeft />{" "}На головну</BtnNavigate>

  <Title>Спеціальні послуги: Перегон авто за кордон</Title>
         <SectionService>
          <SectionContainer>

          <Paragraph>
            Перегон авто за кордон — це професійна послуга, яка включає безпечне
            транспортування вашого автомобіля за межі України. Ми пропонуємо
            комплексний підхід для вашого спокою
          </Paragraph>
          <Paragraph>
            Що входить у послугу:
          </Paragraph>
          <List>
            <ListItem>
            <strong>Планування маршруту</strong> для швидкого та безпечного транспортування
            </ListItem>
            <ListItem>
            <strong>Підготовка документів</strong> та митних процедур
            </ListItem>
            <ListItem>
            <strong>Контроль</strong> на всіх етапах перевезення
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