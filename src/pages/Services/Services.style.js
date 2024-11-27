import styled from "styled-components";

export const Page = styled.div`
  padding: 40px 20px;
  background-color: #f4f4f4;
  color: #1b1b1b;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section`
  margin-bottom: 50px;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #0057a3;
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
    color: #0057a3;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
