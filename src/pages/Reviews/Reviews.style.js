import styled from 'styled-components';

export const SwiperCard = styled.div`
  padding-top: 70px;
  height: 550px;
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1024px) { 
    width: 250px;
    height: 400px;
  }

  @media (max-width: 575px) { 
  height: 250px;
    width: 100%;
    height: auto;  
    padding-top: 20px;
  }
`;
