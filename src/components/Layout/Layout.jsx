import React, { Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, NavLink  } from "react-router-dom";
import './Layout.style'
import {MenuContainer, MenuList, MenuLink, MenuItem } from './Layout.style'

const Layout=()=>{

  return (
    <>
    <Header/>

    <MenuContainer>
      <MenuList>
        <MenuItem >
        <MenuLink as={NavLink} to="/" end>
              Головна
            </MenuLink>
        </MenuItem>
        <MenuItem >
          <MenuLink as={NavLink} to="/services">Послуги</MenuLink>
        </MenuItem>
        <MenuItem >
          <MenuLink  as={NavLink} to="/contacts">Контакти</MenuLink>
        </MenuItem>
        <MenuItem >
          <MenuLink as={NavLink} to="/reviews">Відгуки</MenuLink>
        </MenuItem>
      </MenuList>
    </MenuContainer>
    <Suspense
          fallback={
            <div>
             <p>Loading...</p>
            </div>
          }
        >
    <Outlet/>
    </Suspense>
    <Footer/>
    </>
  )
}

export default Layout;