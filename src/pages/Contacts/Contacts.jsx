import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaWhatsapp, FaTelegram, FaViber } from "react-icons/fa";
import './Contacts.style';
import {ContactsTitle, ContactsWrapper, ContactsText, ContactsParagraph, ContactsItem} from './Contacts.style';
import { Link } from "react-router-dom";

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
    <a href="tel:+380663614503" aria-label="Подзвонити +38 066 361 45 03" >
      +38 066 361 45 03 <IoIosPhonePortrait style={{ marginLeft: '5px' }} />
    </a>
  </ContactsItem>
  <ContactsItem>
    <a href="viber://chat?number=%2B380663614503" aria-label="Зв'язатися через Viber" target="_blank" rel="noopener noreferrer">
      Viber <FaViber style={{ marginLeft: '5px' }} />
    </a>
  </ContactsItem>
  <ContactsItem>
    <a href="href=https://t.me/alegha_01"  aria-label="Зв'язатися через Telegram" target="_blank" rel="noopener noreferrer">
      Telegram <FaTelegram style={{ marginLeft: '5px' }} />
    </a>
  </ContactsItem>
  <ContactsItem>
    <a href="https://wa.me/380663614503" aria-label="Зв'язатися через WhatsApp" target="_blank" rel="noopener noreferrer">
      WhatsApp <FaWhatsapp style={{ marginLeft: '5px' }} />
    </a>
  </ContactsItem>
</ul>
          </ContactsText>


            <ContactsTitle>Ми активно ділимося корисним контентом у наших соцмережах!</ContactsTitle>
            <ul>
  <ContactsItem>
    <ContactsParagraph>
      <a 
        href="https://www.instagram.com/eurotachkadnepr/profilecard/?igsh=dWUxN3p5emoxazdr" 
        aria-label="Переглянути наш Instagram" 
        target="_blank" 
        rel="noopener noreferrer">
        Instagram 📸
      </a>
      : Дивіться захоплюючі фото, відео та інсайти з нашої роботи, отримуйте корисні поради й натхнення.
    </ContactsParagraph>
  </ContactsItem>
  <ContactsItem>
    <ContactsParagraph>
      <a 
        href="https://www.tiktok.com/@alegha_2001?_t=8ruCtyRWO3k&_r=1" 
        aria-label="Переглянути наш TikTok" 
        target="_blank" 
        rel="noopener noreferrer">
        TikTok 🎥
      </a>
      : Легкий та цікавий контент із яскравими моментами, лайфхаки, а також історії, які заряджають позитивом.
    </ContactsParagraph>
  </ContactsItem>
</ul>

        </ContactsWrapper>
      </div>
    </section>
  );
};

export default Contacts;
