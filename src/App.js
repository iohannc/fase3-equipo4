import React, { useEffect } from "react";
// Components
import init from "./Init";
import login from "./login";
import reg from "./components/Register/index";
import reg1 from "./components/Register/register1";
import reg2 from "./components/Register/register2";
import historia from "./Historia";
import editHis from "./components/historia/index1"
import categoria from "./components/SearchCategory/index"

// Styles
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={init} />
        <Route exact path="/login" component={login} />
        <Route exact path="/register" component={reg} />
        <Route exact path="/register/s1" component={reg1} />
        <Route exact path="/register/s2" component={reg2} />
        <Route exact path="/historia/:titulo" component={historia} />
        <Route exact path="/historia/:titulo/edit" component={editHis} />
        <Route exact path="/categoria/:tematica" component={categoria} />
      </BrowserRouter>
    </>
  );
}

export default App;
