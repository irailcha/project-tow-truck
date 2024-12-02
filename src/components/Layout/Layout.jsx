import React, { Suspense } from "react";
import Header from "../Header/Header";

import { Outlet} from "react-router-dom";
import './Layout.style';
import {MainContainer} from './Layout.style'

const Layout=()=>{

  return (
    <>
    <Header/>
    <Suspense
          fallback={

             <p>Loading...</p>
          }
        >
          <MainContainer>
            <Outlet/>
          </MainContainer>
    </Suspense>

    </>
  )
}

export default Layout;