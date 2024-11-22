import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #e4e9ec;
  padding: 20px 0;

  @media (min-width: 769px) and (max-width: 1024px) {
  padding: 15px 0;
}
  /* Мобільні телефони */
@media (max-width: 375px) {
  padding: 10px 0;
}
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;

  @media (min-width: 769px) and (max-width: 1024px) {
   padding: 0 40px;
}

  @media (min-width: 376px) and (max-width: 768px) {
  padding: 0 20px;
  flex-direction: column;
  gap: 15px
}
    /* Мобільні телефони */
@media (max-width: 375px) {
  padding: 0 15px;
}
`

export const HeaderTtitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #1b1b1b;

    @media (min-width: 769px) and (max-width: 1024px) {
   font-size: 33px;
}
    @media (min-width: 376px) and (max-width: 768px) {
    font-size: 28px;
}
        /* Мобільні телефони */
@media (max-width: 375px) {
  font-size: 24px;
}
`

export const HeaderContacts = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: row;

`

export const HeaderElement = styled.li`
  color: #1b1b1b;
  padding: 12px 15px;
    @media (min-width: 769px) and (max-width: 1024px) {
   padding: 10px 13px;
}
           /* Мобільні телефони */
@media (max-width: 375px) {
  padding: 5px 8px;
}
`

export const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #1b1b1b;
  background-color: transparent;
  transition: all 0.3s ease;

  svg {
    font-size: 24px;
  }

  &:hover {
    color: #0057a3;

    svg {
      color: #0057a3;
    }
  }

}
`
