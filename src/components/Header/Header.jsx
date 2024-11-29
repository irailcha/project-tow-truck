import React, { useState, useRef } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderContactsComponent from "../HeaderContacts/HeaderContactsComponent";
import ModalMenu from "../ModalMenu/ModalMenu";
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
        <Container>
          <HeaderFlexContainer>
        <MenuButton onClick={toggleModal} ref={buttonRef}>Menu</MenuButton>
        {isModalOpen && <ModalMenu onClose={toggleModal} position={modalPosition}/>}
          <HeaderTitle>Евакуатор 24/7</HeaderTitle>
          <HeaderMenu/>
          </HeaderFlexContainer>
          <HeaderContactsComponent/>

        </Container>
      </HeaderContainer>
    </>
  );
};
export default Header;