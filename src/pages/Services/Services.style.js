import styled from "styled-components";


export const Page = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;


export const ServicesList=styled.div`
display: block;
   @media (max-width: 575px) {
display: none;

  }
`


export const ServicesForMobile=styled.div`
display: none;
   @media (max-width: 575px) {
display: block;
margin-bottom: -100px;
  }
`

export const SectionThumb=styled.div`
  padding: 30px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
margin-bottom: 30px;
  @media (max-width: 575px) {
    margin-top: 130px;
    
      }

`

export const SectionService = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (min-width: 576px) and (max-width: 1024px) {
    gap: 15px;
    align-items: start;
  }
  
  @media (max-width: 575px) {
    flex-direction: column-reverse;
    gap: 15px;
  }

`;


export const SectionContainer=styled.div`
max-width: 50%;


  @media (max-width: 575px) {
  max-width: 100%;
  }

`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent2};
  margin-bottom: 15px;


  @media (max-width: 1024px) {
   font-size: 26px;
   margin-bottom: 13px;
  }

`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 15px;

  @media (max-width: 1024px) {
   font-size: 16px;
   margin-bottom: 9px;
  }

`;

export const List = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 15px;

          @media (max-width: 1024px) {
   margin-bottom: 9px;
  }

`;

export const ListItem = styled.li`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;

  strong{
   font-weight: bold;
   color: ${({ theme }) => theme.colors.accent2};
   }

        @media (max-width: 1024px) {
   font-size: 16px;
   margin-bottom: 9px;
  }

`;

export const ContactInfo = styled.div`
  font-size: 18px;
  line-height: 1.6;

  a {
    color: ${({ theme }) => theme.colors.accent2};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
      @media (max-width: 1024px) {
   font-size: 17px;
   line-height: 1.5;
  }


`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const BtnNavigate=styled.button`
display: none;

  @media (max-width: 575px) {
display: flex;
align-items: center;
gap: 8px;
margin-bottom: 20px;
color: ${({ theme }) => theme.colors.text};
 background-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent2};
    background-color: ${({ theme }) => theme.colors.text};

    svg {
      color: ${({ theme }) => theme.colors.accent2};
    }
  }
  }
`