import styled from 'styled-components';

export const HeaderContactsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    padding: 8px 10px;

`
export const HeaderSocialList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px; 
  @media (max-width: 768px) {
    gap: 5px; 
  }
`;




export const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  padding: 8px;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  transition: all 0.3s ease;

  svg {
    font-size: 28px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent2};
    background-color: ${({ theme }) => theme.colors.text};

    svg {
      color: ${({ theme }) => theme.colors.accent2};
    }
  }

   @media (min-width: 576px) and (max-width: 1024px) {
   padding: 5px;

   svg {
    font-size: 24px;
  }
  }

  @media (max-width: 575px) {
   svg {
    font-size: 20px;
    
  }
  }
`; 
