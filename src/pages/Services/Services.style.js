import styled from "styled-components";

export const Page = styled.div`
  padding-top:70px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};


`;


export const SectionService = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
  margin-bottom: 50px;
  padding: 30px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`;
export const SectionContainer=styled.div`
max-width: 50%`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent2};
  margin-bottom: 15px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 15px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;
`;

export const ContactInfo = styled.div`
  font-size: 18px;
  margin-top: 20px;

  a {
    color: ${({ theme }) => theme.colors.accent2};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
