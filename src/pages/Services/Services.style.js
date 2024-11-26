import styled from 'styled-components';


export const ServicesList=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
   padding: 50px 0;
  gap: 30px;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ServiceStyle=styled.div`
 background-color: #b0b0b0;
  color: #1b1b1b;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
@media (max-width: 768px) {
  width: 100%;
  text-align: center;
}
  &:hover {
    transform: scale(1.05);
  }



   h2 {
    font-size: 1.8rem;
    color: $color-accent;  // Темно-синій заголовок
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: $color-grey;  // Сірий текст
    margin-bottom: 20px;
  }
`

