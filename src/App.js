import React from "react";
// Components
import init from "./Init";
import login from "./login";
// Styles
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" render={init} />
        <Route exact path="/login" render={login} />
      </BrowserRouter>
    </>
  );
}

export default App;
