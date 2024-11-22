import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1d2225; 
  padding: 60px 0; 
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const FooterContacts = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const FooterItem = styled.li`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;

  a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #0057a3; 
  }

  a svg {
    width: 30px;
    height: 30px;
    transition: all 0.3s ease;
  }

  &:hover a svg {
    transform: scale(1.2);
  }
`;

export const FooterText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #bbb; 
`;

