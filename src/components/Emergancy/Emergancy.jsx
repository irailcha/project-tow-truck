import React from 'react';
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
import plug_1 from '../../images/plug_1.jpg';

const Emergancy=()=>{

  return(
    <>
    <SectionThumb>
    <Title>Терміновий евакуатор</Title>
            <SectionService>
        <SectionContainer>
          <Paragraph>
            Терміновий евакуатор — це ваш надійний помічник у складних ситуаціях
            на дорозі, коли час грає вирішальну роль. Якщо ваш автомобіль
            потрапив у ДТП, раптово вийшов з ладу, сів акумулятор або виникла
            будь-яка інша непередбачена ситуація, наші фахівці оперативно
            відреагують на ваш виклик і швидко прибудуть на місце
          </Paragraph>
          <Paragraph>
            <strong>Ми гарантуємо:</strong>
          </Paragraph>
          <List>
            <ListItem>
              Швидкий виїзд — наші водії готові допомогти вам у будь-який час
              доби
            </ListItem>
            <ListItem>
              Безпека транспортування — сучасне обладнання забезпечує дбайливе
              перевезення
            </ListItem>
            <ListItem>
              Доступну вартість — ціна термінового евакуатора стартує від 1500
              грн
            </ListItem>
          </List>
          <ContactInfo>
            Звертайтесь за номером<br/>{' '}
            <a href="tel:+380663614503">+38 066 361 45 03</a>
          </ContactInfo>
          </SectionContainer>
          <div>
            <img
              src={plug_1}
              alt="Image 1"
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </div>
        </SectionService>
        </SectionThumb>
    </>
  )
}

export default Emergancy;