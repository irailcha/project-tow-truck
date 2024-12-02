import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
const Main=React.lazy(() => import('./pages/Main/Main'));
const Contacts=React.lazy(() => import('./pages/Contacts/Contacts'));
const Reviews=React.lazy(() => import('./pages/Reviews/Reviews'));
const Services=React.lazy(() => import('./pages/Services/Services'));
const Accompanying=React.lazy(() => import('./components/Accompanying/Accompanying'));
const Emergancy=React.lazy(() => import('./components/Emergancy/Emergancy'));
const Special=React.lazy(() => import('./components/Special/Special'));

function App(){

  return (
    <>
<Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Main />}/>
<Route path="/services" element={<Services />}>
  <Route path="emergancy" element={<Emergancy />} />
  <Route path="accompanying" element={<Accompanying />} />
  <Route path="special" element={<Special />} />
</Route>
<Route path="/emergancy" element={<Emergancy />} />
  <Route path="/accompanying" element={<Accompanying />} />
  <Route path="/special" element={<Special />} />
<Route path="/contacts" element={<Contacts/>}/>
<Route path="/reviews" element={<Reviews/>}/>
</Route>
</Routes>
    </>
  )
}

export default App;