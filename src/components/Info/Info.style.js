import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const ImageThumb = styled.div`
  height: 320px;
  width: 450px;
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
  border-radius: 8px;


  @media (max-width: 575px) {
   height: auto;
  width: 300px;
}

`

export const InfoSection = styled.div`
margin: 30px 0;
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
    gap: 30px;
}

  @media (max-width: 575px) {
    flex-direction: column-reverse;
    padding: 10px 5px;
    gap: 10px;
}


  
`;

export const InfoEvacuator = styled.div`
  margin: 30px auto;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px auto;
  }

  h2 {
    text-align: center;
    font-size: 1.5rem; 
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 15px;
    font-weight: 600;

    @media (max-width: 575px) {
      font-size: 1.1rem; 
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 1.2rem; 
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 15px;
    line-height: 1.5;

    @media (max-width: 575px) {
      font-size: 0.9rem; 
      margin-bottom: 10px;
    }
  }

  ul {
    margin-bottom: 20px;

    li {
      font-size: 0.9rem; 
      color: ${({ theme }) => theme.colors.primary};
      line-height: 1.5;
      margin-bottom: 10px;

      strong {
        font-weight: bold;
      }
    }
  }
`;


export const InfoButton= styled(Link)`

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

        @media (max-width: 575px) {
        display:none;

    }
`;
