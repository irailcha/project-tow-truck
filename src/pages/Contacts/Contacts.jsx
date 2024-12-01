import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaWhatsapp, FaTelegram, FaViber } from "react-icons/fa";
import './Contacts.style';
import {ContactsTitle, ContactsWrapper, ContactsText, ContactsSocial, ContactsParagraph, ContactsItem} from './Contacts.style';

const Contacts = () => {
  return (
    <section className="section">
      <div className="container">
        <ContactsWrapper>
          <ContactsText>
            <ContactsTitle>Контакти для зв'язку</ContactsTitle>
            <ContactsParagraph>
              Ми завжди поруч, адже працюємо для вас 24/7! Ви можете зв’язатися з нами за телефоном
              або через будь-який із зручних для вас месенджерів. Залишайтеся на зв’язку – ми готові
              допомогти у будь-який час!
            </ContactsParagraph>

            <ul>
              <ContactsItem>
               <a href="tel:+380663614503"> <IoIosPhonePortrait /> +38 066 361 45 03</a>
              </ContactsItem>
              <ContactsItem>
                Viber <a href="tel:+380663614503"> <FaViber /> +38 066 361 45 03 </a>
              </ContactsItem>
              <ContactsItem>
                Telegram <a href="tel:+380663614503"> <FaTelegram /> +38 066 361 45 03 </a>
              </ContactsItem>
              <ContactsItem>
                WhatsApp <a href="tel:+380663614503"> <FaWhatsapp /> +38 066 361 45 03 </a>
              </ContactsItem>
            </ul>
          </ContactsText>

          <ContactsSocial>
            <ContactsTitle>Ми активно ділимося корисним контентом у наших соцмережах!</ContactsTitle>
            <ContactsParagraph>📸 Instagram: Дивіться захоплюючі фото, відео та інсайти з нашої роботи, отримуйте корисні поради й натхнення.</ContactsParagraph>
            <ContactsParagraph>🎥 TikTok: Легкий та цікавий контент із яскравими моментами, лайфхаки, а також історії, які заряджають позитивом.</ContactsParagraph>
          </ContactsSocial>
        </ContactsWrapper>
      </div>
    </section>
  );
};

export default Contacts;
