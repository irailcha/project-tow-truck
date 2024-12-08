import styled from "styled-components";

export const ButtonStyle = styled.a`
  position: fixed;
  display: block;
  padding: 20px;
  border-radius: 50%;
  bottom: 40px;
  right: 40px;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  animation: pulseRotation 4s infinite ease-in-out; 
  text-align: center;
  
  svg {
    width: 40px;
    height: 40px;
    color: #9d0208;
  }

  &:hover {
    background-color: #9d0208;

    svg {
      color: ${({ theme }) => theme.colors.secondary};
    }

    &::after {
      opacity: 1; 
    }
  }

  /* Опис анімації */
  @keyframes pulseRotation {
    0% {
      transform: rotate(0deg); 
    }
    50% {
      transform: rotate(360deg); 
    }
    100% {
      transform: rotate(0deg);
    }
  }


   @media (max-width: 575px) { 
 padding: 15px;


 svg {
    width: 30px;
    height: 30px;

  }
  }
`;
