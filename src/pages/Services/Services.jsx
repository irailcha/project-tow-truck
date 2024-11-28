import React from "react";
import {
  Page,
  Section,
  Title,
  Paragraph,
  List,
  ListItem,
  ContactInfo,
  SectionContainer
} from "./Services.style";
import plug_1 from '../../images/plug_1.jpg';
import plug_2 from '../../images/plug_2.jpg';
import plug_3 from '../../images/plug_3.jpg';


const Services = () => {
  return (
    <section className="section">
      <div className="container">
    <Page>
        {/* Терміновий евакуатор */}
        <Section>
        <SectionContainer>
          <Title>Терміновий евакуатор</Title>
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
            Звертайтесь за номером{" "}
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
        </Section>

        {/* Попутній евакуатор */}
        <Section>
        <div>
            <img
              src={plug_2}
              alt="plug_2"
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </div> 
        <SectionContainer>
          <Title>Попутній евакуатор</Title>
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
            Деталі дізнайтесь за номером{" "}
            <a href="tel:+380663614503">+38 066 361 45 03</a>
          </ContactInfo>
          </SectionContainer>
        </Section>

        {/* Перегон авто за кордон */}
        <Section>
          <SectionContainer>
          <Title>Спеціальні послуги: Перегон авто за кордон</Title>
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
          З усіх питань звертайтесь за номером{" "}
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
        </Section>
    </Page>
    </div>
    </section>
  );
};

export default Services;
