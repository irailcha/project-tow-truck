import styled from 'styled-components';

// Контейнер для всього сектора
export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 0;
  background-color:  ${({ theme }) => theme.colors.secondary};
border-radius: 8px;
`;

// Заголовок
export const ContactsTitle = styled.h2`
  font-size: 2rem;
  color:  ${({ theme }) => theme.colors.accent2};
  margin-bottom: 20px;
`;

// Текстова частина
export const ContactsText = styled.div`
  margin-bottom: 40px;
  max-width: 800px;
  line-height: 1.6;
  color:  ${({ theme }) => theme.colors.text};
`;

// Абзаци для тексту
export const ContactsParagraph = styled.p`
  font-size: 1.5rem;
  color:  ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

// Список контактів
export const ContactsItem = styled.li`
  font-size: 1.5rem;
  list-style: none;
  margin: 10px 0;
  color:  ${({ theme }) => theme.colors.text};
  
  a {
    color:  ${({ theme }) => theme.colors.accent2};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color:  ${({ theme }) => theme.colors.primary};
    }

    svg {
      margin-right: 10px;
      font-size: 1.4rem;
    }
  }
`;

// Соціальні мережі
export const ContactsSocial = styled.div`
  color:  ${({ theme }) => theme.colors.text};
  padding: 20px;
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  
  p {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;
