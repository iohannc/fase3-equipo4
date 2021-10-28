import React, { useEffect } from "react";
// Components
import init from "./Init";
import login from "./login";
import reg from "./components/Register/index";
import reg1 from "./components/Register/register1";
import reg2 from "./components/Register/register2";
import historia from "./Historia";
// Styles
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.cookie = `user=`;
  });
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" render={init} />
        <Route exact path="/login" component={login} />
        <Route exact path="/register" component={reg} />
        <Route exact path="/register/s1" component={reg1} />
        <Route exact path="/register/s2" component={reg2} />
        <Route exact path="/history" component={historia} />
      </BrowserRouter>
    </>
  );
}

export default App;
