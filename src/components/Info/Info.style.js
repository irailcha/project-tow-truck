import styled from 'styled-components';


export const ImageThumb=styled.div`
height: 300px;
width: 400px;
background-color: #b0b0b0;
overflow: hidden;
border-radius: 8px;
`

export const InfoSection=styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
}
`
export const InfoEvacuator=styled.div`
 background-color: #f4f4f4;  
    padding: 70px;              
    border-radius: 8px;         
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
    text-align: center;       
    max-width: 800px;         
    margin: 40px auto;         
  
    
    h3 {
      font-size: 2rem;             // Розмір шрифту заголовка
      color: #333;                 // Колір тексту заголовка
      margin-bottom: 20px;         // Відступ знизу
      font-weight: 600;            // Жирний шрифт
    }
  
    p {
      font-size: 1.2rem;           // Розмір шрифту абзацу
      color: #666;                 // Трохи світліший колір для абзацу
      margin-bottom: 20px;         // Відступ знизу
      line-height: 1.6;            // Міжрядковий інтервал для зручності читання
    }
  
    a {
      font-size: 1.2rem;           // Розмір шрифту посилання
      color: #0057a3;              // Колір посилання
      text-decoration: none;       // Видалити підкреслення
      padding: 10px 20px;          // Відступи навколо посилання
      border: 2px solid #0057a3;   // Оточення посилання рамкою
      border-radius: 4px;          // Округлення кутів
      transition: background-color 0.3s, color 0.3s;  // Плавний перехід при наведенні
  
      &:hover {
        background-color: #0057a3;  // Зміна фону при наведенні
        color: #fff;                // Колір тексту стає білим при наведенні
      }
    }
`

