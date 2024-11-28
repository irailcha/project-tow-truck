import styled from 'styled-components';


export const HeaderContainer = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index:999;
background-color: ${({ theme }) => theme.colors.secondary};
padding: 10px 0;
border-bottom: 1px solid #8b8c89;

 @media (min-width: 576px) and (max-width: 1024px) {
   padding: 8px 0;
  }

  @media (max-width: 575px) {
      padding: 7px 0;

  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;

  @media (min-width: 576px) and (max-width: 1024px) {
   padding: 0 40px;
  }

  @media (max-width: 575px) {
    flex-direction: column;
   padding: 0 15px;

  }
`

export const HeaderTitle = styled.h1`
display: inline;
font-family: 'Gatsby Normal';
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 576px) and (max-width: 1024px) {
   font-size: 28px;
  }

  @media (max-width: 575px) {
  font-size: 20px;
align-self: start;
  }
`

export const MenuButton=styled.button`
display: none;

@media (max-width: 1024px) {
position: relative;
display: block;
font-weight: 700;
font-size: 1.5em;
transition: opacity 0.3s ease, transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
}
`

export const HeaderFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  

  @media (max-width: 1024px) {
    flex-direction: row; 
    width: 50%; 
  }

  @media (max-width: 575px) {
  margin-top: 8px;
    flex-direction: row;
    align-items: center; 
    justify-content: space-between; 
    width: 90%; 
  }
`;
