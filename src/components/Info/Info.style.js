import styled from 'styled-components';
import '../../styles/fonts/Gatsby-Normal.ttf';

export const ImageThumb = styled.div`
  height: 320px;
  width: 450px;
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
  border-radius: 8px;
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px 10px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoEvacuator = styled.div`
  margin: 30px auto;
  @media (max-width: 768px) {
    padding: 30px;
    margin: 20px auto;
  }

  h3 {
  text-align: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
    line-height: 1.6;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;

    li {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.primary};
      line-height: 1.6;
      margin-bottom: 10px;

      strong {
        font-weight: bold;
      }
    }
  }

  button {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    padding: 10px 20px;
    border: 2px solid #0D1117;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
