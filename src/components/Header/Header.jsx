import React, { useState, useRef } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderContactsComponent from "../HeaderContacts/HeaderContactsComponent";
import ModalMenu from "../ModalMenu/ModalMenu";
import { FaAlignJustify } from "react-icons/fa";
import  './Header.style';
import {
  HeaderContainer, 
  Container,
  HeaderTitle, 
  MenuButton,
  HeaderFlexContainer,

} from './Header.style';

const Header = () => {
const [isModalOpen, setIsModalOpen] =useState(false)
const [modalPosition, setModalPosition] = useState(null);
  const buttonRef = useRef(null);

  const toggleModal = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom, 
        left: rect.left, 
        width: rect.width, 
      });
    }
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <HeaderContainer>
      <div className="container">
        <Container>
          <HeaderFlexContainer>
        <MenuButton onClick={toggleModal} ref={buttonRef}> <FaAlignJustify /> Menu</MenuButton>
        {isModalOpen && <ModalMenu onClose={toggleModal} position={modalPosition}/>}
          <HeaderTitle to="/" aria-label="Перейти на головну сторінку"> Евакуатор 24/7</HeaderTitle>
          <HeaderMenu/>
          </HeaderFlexContainer>
          <HeaderContactsComponent/>
        </Container>
        </div>
      </HeaderContainer>

    </>
  );
};
export default Header;