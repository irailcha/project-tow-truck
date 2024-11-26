import styled from 'styled-components';

// Контейнер для всього сектора
export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 0;
  background-color: #f9f9f9; /* Білий фон */
`;

// Заголовок
export const ContactsTitle = styled.h2`
  font-size: 2rem;
  color: #0057a3; /* Темно-синій акцентний */
  margin-bottom: 20px;
`;

// Текстова частина
export const ContactsText = styled.div`
  margin-bottom: 40px;
  max-width: 800px;
  line-height: 1.6;
  color: #242323; /* Темний сірий для тексту */
`;

// Абзаци для тексту
export const ContactsParagraph = styled.p`
  font-size: 1rem;
  color: #242323; /* Темний сірий для тексту */
  margin-bottom: 20px;
`;

// Список контактів
export const ContactsItem = styled.li`
  font-size: 1.2rem;
  list-style: none;
  margin: 10px 0;
  color: #242323; /* Темний сірий для тексту */
  
  a {
    color: #0057a3; /* Темно-синій для посилань */
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #1b1b1b; /* Чорний при наведенні */
    }

    svg {
      margin-right: 10px;
      font-size: 1.4rem;
    }
  }
`;

// Соціальні мережі
export const ContactsSocial = styled.div`
  color: #1b1b1b;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  
  p {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

