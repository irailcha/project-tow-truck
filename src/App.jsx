import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Contacts from "./pages/Contacts/Contacts";
import Reviews from "./pages/Reviews/Reviews";
import Services from "./pages/Services/Services";

function App(){

  return (
    <>
<Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Main />}/>
<Route path="/services" element={<Services />}/>
<Route path="/contacts" element={<Contacts/>}/>
<Route path="/reviews" element={<Reviews/>}/>
</Route>
</Routes>
    </>
  )
}

export default App;