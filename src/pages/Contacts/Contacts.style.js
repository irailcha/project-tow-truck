import styled from 'styled-components';

// Контейнер для всього сектора
export const ContactsWrapper = styled.div`
  padding: 30px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 575px) {
    padding: 15px;
  }
`;

// Заголовок
export const ContactsTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent2};
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    font-size: 26px;
    margin-bottom: 13px;
  }

  @media (max-width: 575px) {
    font-size: 24px;
  }
`;

// Текстова частина
export const ContactsText = styled.div`
  margin-bottom: 40px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1024px) { 
    max-width: 700px;
  }

  @media (max-width: 575px) {
    max-width: 100%;
  }
`;

// Абзаци для тексту
export const ContactsParagraph = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

// Список контактів
export const ContactsItem = styled.li`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;

  a {
    color: ${({ theme }) => theme.colors.accent2};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-right: 8px;
      font-size: 18px;
    }
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 9px;

    a svg {
      font-size: 16px;
    }
  }

  @media (max-width: 575px) {
    font-size: 15px;
  }
`;
