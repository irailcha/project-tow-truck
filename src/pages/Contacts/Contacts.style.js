import styled from 'styled-components';

export const ContactsTitle=styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const ContactsWrapper=styled.div`
 display: flex;
  flex-direction: column; /* Встановлюємо елементи в стовпчик */
  justify-content: space-between; /* Відстань між елементами */
  gap: 40px;
  height: 100%; 
`

export const ContactsText=styled.div`
flex: 1;
text-align: left;
`

export const ContactsSocial=styled.div`
margin-top: auto;

  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
  display: flex;
  align-items: center;
  gap: 10px;}
`


export const ContactsParagraph=styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;`

  export const ContactsItem=styled.li`
   font-size: 16px;
  margin: 10px 0;

  a {
  text-decoration: none;
  color: #0057a3;
  font-weight: bold;
  margin-left: 10px;
}

a:hover {
  color: #0077cc;
}
  `